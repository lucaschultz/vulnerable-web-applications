from flask import Flask

from issues.cross_site_scripting import cross_site_scripting
from issues.denial_of_service import denial_of_service
from issues.path_traversal import path_traversal
from issues.remote_code_execution import remote_code_execution
from issues.sql_injection import sql_injection, close_connection

app = Flask(__name__)

app.teardown_appcontext(close_connection)

app.register_blueprint(cross_site_scripting)
app.register_blueprint(denial_of_service)
app.register_blueprint(path_traversal)
app.register_blueprint(remote_code_execution)
app.register_blueprint(sql_injection)


if __name__ == '__main__':
    app.run()
