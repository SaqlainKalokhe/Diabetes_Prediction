let bloodpressure;

function bloodPressure() {
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");

    if (option1.checked) {
        bloodpressure = Math.floor(Math.random() * (130 - 80 + 1)) + 80;
    } else if (option2.checked) {
        bloodpressure = Math.floor(Math.random() * (80 - 50 + 1)) + 50;
    }
}

