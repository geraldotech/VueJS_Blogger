from flask import Flask, jsonify, request
import json

import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(BASE_DIR, "data.json")


app = Flask(__name__)


def load_data():
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def save_data(data):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


# Listar todos os posts
@app.route("/posts", methods=["GET"])
def get_posts():
    data = load_data()
    return jsonify(data["blog"]["posts"])


# Buscar post por id
@app.route("/posts/<int:post_id>", methods=["GET"])
def get_post(post_id):
    data = load_data()
    post = next((p for p in data["blog"]["posts"] if p["id"] == post_id), None)
    return jsonify(post or {"error": "Post not found"})


# Criar novo post
@app.route("/posts", methods=["POST"])
def add_post():
    data = load_data()
    new_post = request.json
    new_post["id"] = max(p["id"] for p in data["blog"]["posts"]) + 1
    data["blog"]["posts"].append(new_post)
    save_data(data)
    return jsonify(new_post), 201


# Atualizar post por id
@app.route("/posts/<int:post_id>", methods=["PUT"])
def update_post(post_id):
    data = load_data()
    posts = data["blog"]["posts"]
    post = next((p for p in posts if p["id"] == post_id), None)
    if not post:
        return jsonify({"error": "Post not found"}), 404

    for key, value in request.json.items():
        if key in post:
            post[key] = value

    save_data(data)
    return jsonify(post)


# Deletar post
@app.route("/posts/<int:post_id>", methods=["DELETE"])
def delete_post(post_id):
    data = load_data()
    posts = data["blog"]["posts"]
    new_posts = [p for p in posts if p["id"] != post_id]

    if len(new_posts) == len(posts):
        return jsonify({"error": "Post not found"}), 404

    data["blog"]["posts"] = new_posts
    save_data(data)
    return jsonify({"message": "Deleted"})

# Verificar se slug já existe
@app.route("/posts/check-slug/<slug>", methods=["GET"])
def check_slug(slug):
    data = load_data()
    exists = any(p["slug"] == slug for p in data["blog"]["posts"])
    return jsonify({"slug": slug, "exists": exists})



if __name__ == "__main__":
    app.run(debug=True, port=5000)
