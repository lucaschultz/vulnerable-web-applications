from flask import Blueprint, request

hello = Blueprint('hello', __name__)


@hello.route("/hello")
def get_hello():
    amount = eval(f"{request.args.get('amount')} * 10")
    return f"Hello {amount} times!"
