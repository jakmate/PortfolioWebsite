from flask import Flask, render_template
from app import app

@app.route("/", methods=["GET", "POST"])
def home():
    return render_template("home.html", title="Home")

@app.route("/sendMessage", methods=["GET", "POST"])
def sendMessage():
    print("Balls")