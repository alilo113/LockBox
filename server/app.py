from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "THis is homepage"
    
@app.route("/signup")
def signup():
    return "Signup page!"

@app.route("/login")
def login():
    return "Login page!"

if __name__ == "__main__":
    app.run()