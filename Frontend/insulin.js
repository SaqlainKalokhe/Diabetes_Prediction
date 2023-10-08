let insulin;

function insulinDose() {
  let radios = document.getElementsByName('options');
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      let value = 0;
      switch(radios[i].value) {
        case '0-5':
          value = Math.floor(Math.random() * 6);
          break;
        case '5-10':
          value = Math.floor(Math.random() * 6) + 5;
          break;
        case '10-15':
          value = Math.floor(Math.random() * 6) + 10;
          break;
        case '15-20':
          value = Math.floor(Math.random() * 6) + 15;
          break;
        default:
          value = 0;
          break;
      }
      insulin = value;
      break;
    }
  }
  window.location.href = "sixth.html";
}
