function submitForm() {
  // Create a JSON object from global variables
  const data = {
    age: age,
    BMI: BMI,
    bloodpressure: bloodpressure,
    glucose: glucose,
    insulin: insulin,
    pedigree: pedigree,
    pregnancy: pregnancy,
    thickness: thickness
  };

  // Send the JSON data to API using fetch method
  fetch('https://example.com/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('API response:', data);
    // Do something with the API response
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle the error
  });
}
