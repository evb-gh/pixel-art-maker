// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM fully loaded and parsed')

  let submit = document.querySelector('#sizePicker > input[type="submit"]:nth-child(3)')
  let table = document.getElementById('pixelCanvas')
  let gh = document.getElementById('inputHeight')
  var gw = document.getElementById('inputWidth')

  function makeGrid (e) {
    while (table.firstChild) {
      table.removeChild(table.firstChild)
    }

    // table.innerHTML = "";

    for (let i = 0; i < gh.value; i++) {
      let row = table.insertRow()
      for (let j = 0; j < gw.value; j++) {
        row.insertCell()
      }
    }
	  function color (e) {
		  let color = document.getElementById("colorPicker");
		  let cell = document.querySelector('td');
		  if (e.target.tagName === "TD") {
		  	console.log(e.target.tagName);
		  e.target.style.backgroundColor = color.value;
		  }
		  
	  }
	  table.onclick = color;

      e.preventDefault()
  }

  submit.onclick = makeGrid
})

