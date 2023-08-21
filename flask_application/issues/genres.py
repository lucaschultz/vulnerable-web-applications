from flask import Blueprint, g, request, jsonify
import sqlite3

genres = Blueprint('genres', __name__)


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect("../assets/chinook.db")
    return db


def close_connection(error):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@genres.route("/genres")
def get_genres():
    db = get_db()
    cursor = db.cursor()
    cursor.execute(
        f"SELECT * FROM genres WHERE name LIKE '%{request.args.get('search', '') or ''}%'")
    rows = cursor.fetchall()
    if rows:
        columns = [column[0] for column in cursor.description]
        result = [dict(zip(columns, row)) for row in rows]
        return jsonify(result), 200
    else:
        return jsonify([]), 200
