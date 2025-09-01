from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"]) ## allowing data to come from frontend


with open(r".\ml\model.pkl", "rb") as f:
    model = pickle.load(f)

@app.route("/predict", methods = ["POST"])
def predict():
    data = request.get_json()

    features = pd.DataFrame([data["features"]])

    prediction = model.predict(features)[0]

    return jsonify({"diagnosis" : prediction}) 

if __name__ == "__main__":
    app.run(debug=True)