from flask import Blueprint, request

remote_code_execution = Blueprint('remote_code_execution', __name__)


@remote_code_execution.route("/remote-code-execution")
def get_greeting():
    amount = eval(f"{request.args.get('amount')} * 10")
    return f"Hello {amount} times!"
