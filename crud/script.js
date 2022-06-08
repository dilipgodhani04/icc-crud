var selectedRow = null;

function readFormatData() {
  ////3
  var formData = {}; ///4/
  formData.firstname = document.getElementById("firstname").value; ////5
  formData.Lastname = document.getElementById("lastname").value; ///6/
  formData.country = document.getElementById("country").value; ////7

  // return formData;
  insertNewRecord(formData); ///8
}

function onFormSubmit() {
  ////1
  readFormatData(); ////2
}
function insertNewRecord(data) {
  ////9
  var table = document
    .getElementById("customers")
    .getElementsByTagName("tbody")[0]; ///10
  var newRow = table.insertRow(table.length); ///11
  cell0 = newRow.insertCell(0); ///12
  cell0.innerHTML = data.firstname; ////13/
  cell1 = newRow.insertCell(1); ////14
  cell1.innerHTML = data.Lastname; ////15
  cell2 = newRow.insertCell(2); ///16
  cell2.innerHTML = data.country; ////17
  cell3 = newRow.insertCell(3); ////18
  cell3.innerHTML = `<button>Edit</button>
                       <button>Delet</button>`; ////19
}
