import asyncio
from flask import Blueprint, request
import json

denial_of_service = Blueprint('denial_of_service', __name__)


class ValidationError(Exception):
    def __init__(self, message):
        super().__init__(message)


def validate_user(value):
    if (
        not isinstance(value, dict) or
        value is None or
        isinstance(value, list) or
        'name' not in value or
        not isinstance(value['name'], str) or
        len(value['name']) == 0
    ):
        raise ValidationError(f"Invalid User: {json.dumps(value)}")

    return {'name': value['name']}


def validate_user_array(value):
    if not isinstance(value, list):
        raise ValidationError(
            f"Expected user array received {json.dumps(value)}")

    return [validate_user(user) for user in value]


async def work(user):
    await asyncio.sleep(0.1)
    return user['name']


@denial_of_service.route('/denial-of-service', methods=['POST'])
async def list_users():
    try:
        users = validate_user_array(request.get_json())
        names = []

        for user in users:
            names.append(await work(user))

        return ', '.join(names)
    except ValidationError as err:
        return str(err), 400
    except Exception:
        return "An unexpected error occurred", 500
