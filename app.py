import pickle
from fastapi import FastAPI
# importing another python file in which inputs to be taken are defined inside a class as variable

import uvicorn  # it is like a webserver for python
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from pydantic import BaseModel


class predict(BaseModel):
    pregnancies: int
    glucose: float
    bloodpressure: float
    skinthickness: int
    insulin: float
    bmi: float
    diabetespedigreefunction: float
    age: int

app = FastAPI()


with open("logistic_model.pkl", "rb") as f:
    clf = pickle.load(f)


#Index
@app.get('/')
def index():
    return "Yo Nigga"

#Predict
@app.post("/predict")
async def predict_diabetes(data: predict):
    data = data.dict()
    inputs = pd.DataFrame(data.items(), columns=data.keys())
    
    # sc = StandardScaler()
    # # #Reshaping into 2D array
    # input = np.array(inputs).reshape(1,-1)
    
    # standardised_input = sc.fit_transfrom(input)
    
    results = clf.predict(inputs)
    
    return {
        "Prediction" : 'results'
    }
    
    # if input_pred == 0:
    #     return "You are Healthy nigga"
    # else:
    #     return "You have Diabetes , You gonna die"
    
    


if __name__ == ' __main__':
    uvicorn.run(app, host='127.0.0.1', port=5000)
