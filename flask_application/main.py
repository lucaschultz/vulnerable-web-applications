from flask import Flask

from issues.greet import greet
from issues.list_users import list_users
from issues.example_data import example_data
from issues.hello import hello
from issues.genres import genres, close_connection

app = Flask(__name__)

app.teardown_appcontext(close_connection)

app.register_blueprint(greet)
app.register_blueprint(list_users)
app.register_blueprint(example_data)
app.register_blueprint(hello)
app.register_blueprint(genres)


if __name__ == '__main__':
    app.run()
