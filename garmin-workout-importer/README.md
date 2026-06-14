# garmin-workout-importer

CLI tool that imports structured workouts defined in JSON into Garmin Connect. Supports running (with intervals and repeat groups) and strength training.

## Installation

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Usage

```bash
# Basic — prompts for credentials on first run, then caches tokens
python importer.py examples/running_5k_intervals.json

# Set credentials via environment variables
export GARMIN_EMAIL="you@example.com"
export GARMIN_PASSWORD="yourpassword"
python importer.py examples/running_5k_intervals.json

# Dry run — print the Garmin API JSON without uploading (useful for debugging)
python importer.py examples/strength_upper_body.json --dry-run
```

OAuth tokens are cached in `~/.garmin_importer/` after the first login. Delete that directory to force re-authentication.

---

## Running workout JSON format

```json
{
  "name": "5K Interval Training",
  "type": "running",
  "description": "Optional description",
  "steps": [
    {"type": "warmup", "duration_minutes": 10, "target": {"type": "hr_zone", "zone": 2}},
    {
      "type": "repeat",
      "repetitions": 5,
      "steps": [
        {"type": "interval", "distance_meters": 1000, "target": {"type": "pace", "fast": "5:00", "slow": "5:30"}},
        {"type": "recovery", "duration_minutes": 2, "target": {"type": "none"}}
      ]
    },
    {"type": "cooldown", "duration_minutes": 10, "target": {"type": "none"}}
  ]
}
```

### Step types

| Key | Garmin step |
|---|---|
| `warmup` | Warm up |
| `cooldown` | Cool down |
| `interval` | Interval |
| `active` | Active |
| `rest` / `recovery` | Rest |
| `repeat` | Repeat group (contains nested `steps`) |

### End condition (pick one per step)

| Field | Example | Description |
|---|---|---|
| `duration_minutes` | `10` | Fixed time |
| `distance_meters` | `1000` | Fixed distance |
| *(neither)* | — | Lap button press |

### Target types

| `"type"` | Extra fields | Description |
|---|---|---|
| `"none"` | — | No target |
| `"pace"` | `"fast": "5:00", "slow": "5:30"` | Pace range in MM:SS per km |
| `"heart_rate"` | `"min": 140, "max": 160` | Heart rate range (BPM) |
| `"hr_zone"` | `"zone": 2` | HR zone 1–5 |

---

## Strength workout JSON format

```json
{
  "name": "Upper Body Push",
  "type": "strength",
  "description": "Optional description",
  "exercises": [
    {
      "name": "Bench Press",
      "category": "BENCH_PRESS",
      "sets": 4,
      "reps": 8,
      "weight_kg": 80,
      "rest_seconds": 120
    }
  ]
}
```

### Exercise fields

| Field | Required | Description |
|---|---|---|
| `category` | Yes | Garmin exercise category key (see below) |
| `sets` | Yes | Number of sets |
| `reps` | Yes | Reps per set |
| `weight_kg` | No | Weight in kg (`null` for bodyweight) |
| `rest_seconds` | No | Rest between sets (default: 60) |
| `exercise_key` | No | Override Garmin exercise name key (defaults to `category`) |

### Common category keys

`BENCH_PRESS`, `SQUAT`, `DEADLIFT`, `SHOULDER_PRESS`, `PULL_UP`, `BENT_OVER_ROW`,
`LAT_PULLDOWN`, `INCLINE_BENCH_PRESS`, `CHEST_FLY`, `BICEP_CURL`, `TRICEP_EXTENSION`,
`CHEST_PRESS`, `DIP`, `PLANK`, `LUNGE`, `LEG_PRESS`, `HIP_THRUST`, `Romanian_DEADLIFT`

The category key is sent directly to Garmin's API — if an exercise isn't found, check how Garmin names it in your Garmin Connect workout library.

---

## Notes

- Garmin Connect has no official public API. This tool uses the same internal REST API as the Garmin Connect web app, accessed via [garminconnect](https://github.com/cyberjunky/python-garminconnect) and [garth](https://github.com/matin/garth).
- Use `--dry-run` to inspect the generated JSON before uploading.
- Requires Python 3.10+.
