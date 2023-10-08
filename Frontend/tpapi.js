const url = 'http://localhost:5000/predict';

const inputData = {
  pregnancies: 6,
  glucose: 148,
  bloodpressure: 72,
  skinthickness: 35,
  insulin: 0,
  bmi: 33.6,
  diabetespedigreefunction: 0.627,
  age: 50
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(inputData)
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Do something with the response data
  })
  .catch(error => {
    console.error(error);
    // Handle any errors that occur
  });
