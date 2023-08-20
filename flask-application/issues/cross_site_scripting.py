from flask import Blueprint, request

cross_site_scripting = Blueprint('cross_site_scripting', __name__)


@cross_site_scripting.route("/cross-site-scripting")
def get_greeting():
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
