from flask import Blueprint, request

path_traversal = Blueprint('path_traversal', __name__)


@path_traversal.route("/path-traversal")
def get_example_data():
    category = request.args.get("category")
    try:
        with open(f"../assets/public/{category}", "r") as file:
            data = file.read()
            return data
    except FileNotFoundError:
        return "Unknown category, please try 'artists' or 'genres'", 404
    except Exception:
        return "An unexpected error occurred, please try again later", 500
