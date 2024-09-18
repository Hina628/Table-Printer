function PrintTable() {
  let tableNum = document.getElementById('NumToPrint').value;
  let minLength = document.getElementById('minLength').value;
  let maxLength = document.getElementById('maxLength').value;

  for (let i = minLength; i <= maxLength; i++) {
    document.getElementById('table').innerHTML += `${tableNum} x ${i} = ${tableNum * i} </br> `;
  }
  console.log('work');
}

function refresh() {
  document.getElementById('NumToPrint').value = "";
  document.getElementById('minLength').value = "";
  document.getElementById('maxLength').value = "";
  document.getElementById('table').innerHTML = "";
}