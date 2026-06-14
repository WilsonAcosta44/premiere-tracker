"""Garmin Connect authentication and API helpers."""

from __future__ import annotations

from pathlib import Path

from garminconnect import Garmin

_TOKEN_DIR = Path.home() / ".garmin_importer"


def get_client(email: str | None = None, password: str | None = None) -> Garmin:
    """Return an authenticated Garmin client.

    Caches OAuth tokens in ~/.garmin_importer/ so credentials are only
    needed on first run.
    """
    _TOKEN_DIR.mkdir(parents=True, exist_ok=True)
    token_store = str(_TOKEN_DIR)

    try:
        client = Garmin()
        client.login(tokenstore=token_store)
        return client
    except Exception:
        pass

    if not email or not password:
        raise ValueError(
            "No cached session. Set GARMIN_EMAIL / GARMIN_PASSWORD for first login."
        )

    client = Garmin(email, password)
    client.login()
    client.garth.dump(token_store)
    return client


def upload_workout(client: Garmin, workout: dict) -> dict:
    """POST a workout to /workout-service/workout and return the response JSON."""
    try:
        return client.add_workout(workout)
    except AttributeError:
        # Fallback for garminconnect versions without add_workout
        response = client.garth.post(
            "connectapi",
            "/workout-service/workout",
            json=workout,
            headers={"NK": "NT"},
        )
        response.raise_for_status()
        return response.json()
