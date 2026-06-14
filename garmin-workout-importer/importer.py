#!/usr/bin/env python3
"""CLI to import JSON workout definitions into Garmin Connect."""

import json
import sys
from pathlib import Path

import click

from garmin.builder import build_workout
from garmin.client import get_client, upload_workout


@click.command()
@click.argument("workout_file", type=click.Path(exists=True, path_type=Path))
@click.option("--email", envvar="GARMIN_EMAIL", default=None, help="Garmin Connect email")
@click.option(
    "--password",
    envvar="GARMIN_PASSWORD",
    default=None,
    help="Garmin Connect password",
)
@click.option(
    "--dry-run",
    is_flag=True,
    help="Print the generated Garmin API JSON without uploading",
)
def main(workout_file: Path, email: str | None, password: str | None, dry_run: bool) -> None:
    """Import WORKOUT_FILE (JSON) as a structured workout on Garmin Connect."""
    with workout_file.open() as f:
        workout_def = json.load(f)

    garmin_workout = build_workout(workout_def)

    if dry_run:
        click.echo(json.dumps(garmin_workout, indent=2))
        return

    if not email:
        email = click.prompt("Garmin Connect email")
    if not password:
        password = click.prompt("Garmin Connect password", hide_input=True)

    try:
        client = get_client(email, password)
        result = upload_workout(client, garmin_workout)
        workout_id = result.get("workoutId", "unknown")
        click.echo(f"Uploaded '{workout_def['name']}' — workout ID: {workout_id}")
    except Exception as exc:
        click.echo(f"Error: {exc}", err=True)
        sys.exit(1)


if __name__ == "__main__":
    main()
