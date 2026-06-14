"""Converts a user-friendly JSON workout definition into Garmin Connect API format."""

from __future__ import annotations

_SPORT_TYPES: dict[str, dict] = {
    "running":  {"sportTypeId": 1, "sportTypeKey": "running"},
    "strength": {"sportTypeId": 5, "sportTypeKey": "strength_training"},
}

_STEP_TYPES: dict[str, dict] = {
    "warmup":   {"stepTypeId": 1, "stepTypeKey": "warmup"},
    "cooldown": {"stepTypeId": 2, "stepTypeKey": "cooldown"},
    "interval": {"stepTypeId": 3, "stepTypeKey": "interval"},
    "active":   {"stepTypeId": 4, "stepTypeKey": "active"},
    "rest":     {"stepTypeId": 5, "stepTypeKey": "rest"},
    "recovery": {"stepTypeId": 5, "stepTypeKey": "rest"},
    "repeat":   {"stepTypeId": 6, "stepTypeKey": "repeat"},
    "exercise": {"stepTypeId": 7, "stepTypeKey": "exercise"},
}

_NO_TARGET: dict = {
    "targetType": {"workoutTargetTypeId": 1, "workoutTargetTypeKey": "no.target"},
    "targetValueOne": None,
    "targetValueTwo": None,
    "zoneNumber": None,
}


def _pace_to_mps(pace: str) -> float:
    """Convert 'MM:SS' per-km pace string to metres per second."""
    parts = pace.strip().split(":")
    return round(1000.0 / (int(parts[0]) * 60 + int(parts[1])), 6)


def _build_target(target_def: dict | None) -> dict:
    if not target_def or target_def.get("type") == "none":
        return _NO_TARGET

    t = target_def["type"]

    if t == "pace":
        # "fast" = faster end of the range (lower mm:ss, higher m/s)
        # "slow" = slower end of the range (higher mm:ss, lower m/s)
        fast = target_def.get("fast")
        slow = target_def.get("slow")
        return {
            "targetType": {"workoutTargetTypeId": 6, "workoutTargetTypeKey": "pace.zone"},
            "targetValueOne": _pace_to_mps(fast) if fast else None,
            "targetValueTwo": _pace_to_mps(slow) if slow else None,
            "zoneNumber": None,
        }

    if t == "heart_rate":
        return {
            "targetType": {"workoutTargetTypeId": 4, "workoutTargetTypeKey": "heart.rate"},
            "targetValueOne": target_def.get("min"),
            "targetValueTwo": target_def.get("max"),
            "zoneNumber": None,
        }

    if t == "hr_zone":
        return {
            "targetType": {"workoutTargetTypeId": 2, "workoutTargetTypeKey": "heart.rate.zone"},
            "targetValueOne": None,
            "targetValueTwo": None,
            "zoneNumber": target_def.get("zone"),
        }

    return _NO_TARGET


def _build_end_condition(step: dict) -> tuple[dict, float | None]:
    if "duration_minutes" in step:
        return (
            {"conditionTypeId": 3, "conditionTypeKey": "time"},
            float(step["duration_minutes"] * 60),
        )
    if "distance_meters" in step:
        return (
            {"conditionTypeId": 2, "conditionTypeKey": "distance"},
            float(step["distance_meters"]),
        )
    # Default: user presses lap button to advance
    return ({"conditionTypeId": 1, "conditionTypeKey": "lap.button"}, None)


class _Counter:
    def __init__(self) -> None:
        self._n = 0

    def next(self) -> int:
        self._n += 1
        return self._n


def _build_running_steps(step_defs: list[dict], counter: _Counter) -> list[dict]:
    steps: list[dict] = []
    for step_def in step_defs:
        order = counter.next()
        step_key = step_def["type"]

        if step_key == "repeat":
            child_steps = _build_running_steps(step_def.get("steps", []), counter)
            steps.append({
                "stepId": None,
                "stepOrder": order,
                "stepType": _STEP_TYPES["repeat"],
                "childStepId": child_steps[0]["stepOrder"] if child_steps else None,
                "numberOfIterations": step_def.get("repetitions", 1),
                "smartRepeat": False,
                "endCondition": {"conditionTypeId": 7, "conditionTypeKey": "iterations"},
                "endConditionValue": float(step_def.get("repetitions", 1)),
                "workoutSteps": child_steps,
                **_NO_TARGET,
            })
        else:
            end_condition, end_value = _build_end_condition(step_def)
            steps.append({
                "stepId": None,
                "stepOrder": order,
                "stepType": _STEP_TYPES.get(step_key, _STEP_TYPES["active"]),
                "childStepId": None,
                "description": step_def.get("description", ""),
                "endCondition": end_condition,
                "endConditionValue": end_value,
                **_build_target(step_def.get("target")),
            })

    return steps


def _build_strength_steps(exercises: list[dict]) -> list[dict]:
    steps: list[dict] = []
    for i, ex in enumerate(exercises, start=1):
        category_key = ex.get("category", "").upper()
        exercise_key = ex.get("exercise_key", category_key)
        weight_kg = ex.get("weight_kg")
        steps.append({
            "stepId": None,
            "stepOrder": i,
            "stepType": _STEP_TYPES["exercise"],
            "childStepId": None,
            "exerciseCategory": {
                "exerciseCategoryId": None,
                "exerciseCategoryKey": category_key,
            },
            "exerciseName": {
                "exerciseNameId": None,
                "exerciseNameKey": exercise_key,
            },
            "description": ex.get(
                "description",
                f"{ex.get('sets', 3)} x {ex.get('reps', 10)}",
            ),
            "endCondition": {"conditionTypeId": 3, "conditionTypeKey": "reps"},
            "endConditionValue": float(ex.get("reps", 10)),
            **_NO_TARGET,
            "numberOfSets": ex.get("sets", 3),
            "numberOfReps": ex.get("reps", 10),
            "weight": float(weight_kg) if weight_kg is not None else None,
            "weightUnit": (
                {"unitId": 1, "unitKey": "kilogram", "factor": 1.0}
                if weight_kg is not None else None
            ),
            "repeatDuration": ex.get("rest_seconds", 60),
        })
    return steps


def build_workout(workout_def: dict) -> dict:
    """Transform a user JSON workout definition into the Garmin Connect API format."""
    workout_type = workout_def.get("type", "running").lower()

    if workout_type not in _SPORT_TYPES:
        supported = list(_SPORT_TYPES)
        raise ValueError(f"Unsupported workout type '{workout_type}'. Supported: {supported}")

    sport_type = _SPORT_TYPES[workout_type]

    if workout_type == "running":
        steps = _build_running_steps(workout_def.get("steps", []), _Counter())
    else:
        steps = _build_strength_steps(workout_def.get("exercises", []))

    return {
        "sportType": sport_type,
        "workoutName": workout_def["name"],
        "description": workout_def.get("description", ""),
        "workoutSegments": [
            {
                "segmentOrder": 1,
                "sportType": sport_type,
                "workoutSteps": steps,
            }
        ],
    }
