let pedigree;

function calculatePedigree() {
  let radios = document.getElementsByName('options');
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      let value = 0;
      switch(radios[i].value) {
        case '0':
          value = 0;
          break;
        case '0.5-1.5':
          value = parseFloat((Math.random() * (1.5 - 0.5) + 0.5).toFixed(3));
          break;
        case '1.5-2.5':
          value = parseFloat((Math.random() * (2.5 - 1.5) + 1.5).toFixed(3));
          break;
        default:
          value = 0;
          break;
      }
      pedigree = value;
      break;
    }
  }
  window.location = "seventh.html";
}
