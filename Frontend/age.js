let age;

function storeAge() {
  let inputAge = document.getElementById("ageInput").value;
  if (Number.isInteger(parseInt(inputAge))) {
    age = parseInt(inputAge);
  } else {
    alert("Please enter a valid integer for age.");
  }
}
