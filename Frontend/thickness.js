let thickness = null;

function tricepThickness() {
	const options = document.getElementsByName('options');
	for (let i = 0; i < options.length; i++) {
		if (options[i].checked) {
			const valueRange = options[i].value.split('-');
			const min = parseInt(valueRange[0]);
			const max = parseInt(valueRange[1]);
			thickness = Math.floor(Math.random() * (max - min + 1) + min);
			break;
		}
	}
	if (thickness !== null) {
		// Use the selected thickness as needed
		console.log(`Selected tricep thickness: ${thickness}`);
	} else {
		alert('Please select an option');
	}
}
