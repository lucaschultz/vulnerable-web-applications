from flask import Blueprint, request

greet = Blueprint('greet', __name__)


@greet.route("/greet")
def get_greet():
    name = request.args.get("name", "")

    html = """
  <!DOCTYPE html>
  <html>
    <head>
      <title>Example Vulnerable Page</title>
    </head>
    <body>
      <div id="greeting" style="color:green;">Hello {}!</div>
    </body>
  </html>
  """.format(name)

    return html
