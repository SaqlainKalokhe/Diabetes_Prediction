import pickle
from fastapi import FastAPI
import json
import uvicorn  # it is like a webserver for python
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from pydantic import BaseModel


class predict(BaseModel):
    pregnancies: int
    glucose: float
    bloodpressure: float
    skinthickness: float
    insulin: float
    bmi: float
    diabetespedigreefunction: float
    age: int

app = FastAPI()


with open("svc.pkl", "rb") as f:
    clf = pickle.load(f)


#Index
@app.get('/')
def index():
    return {'Diabetes' : "Prediction"}

#Predict
@app.post("/predict")
async def predict_diabetes(data: predict):
    try:
        data_list = [[data.pregnancies, data.glucose, data.bloodpressure,
                      data.skinthickness, data.insulin, data.bmi,
                      data.diabetespedigreefunction, data.age]]
        sc = StandardScaler()
        # Reshape into 2D array and standardize
        standardised_input = sc.fit_transform(data_list)

        # Make prediction using a trained model (clf)
        results = int(clf.predict(data_list))
        
        if results == 0:
            return f"You are Healthy"
        elif results == 1:
            return f"You have Diabetes"
    
        # return json.dumps(results)
    
    except Exception as e:
        # Return an appropriate error message if an exception occurs
        return {"error": str(e)}
 
    
    
    


if __name__ == ' __main__':
    uvicorn.run(app, host='127.0.0.1', port=5000)
