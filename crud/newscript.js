var selectedRow = null
function onFormSubmit() {
 
      var formData = readFormData();
      if (selectedRow == null)
     
      insertDataForm(formData);
      else 
          updateRecord(formData);
      resetForm();
      
  }


function readFormData() {
 
  var formData = {};
  formData.studentname = document.getElementById("studentname").value;
  formData.fathername = document.getElementById("fathername").value;
  formData.surname = document.getElementById("surname").value;
  formData.department = document.getElementById("department").value;
  formData.semester = document.getElementById("semester").value;
  formData.email = document.getElementById("email").value;
  formData.number = document.getElementById("number").value;
  formData.Enrolmentnumber = document.getElementById("Enrolmentnumber").value;
  formData.course = document.getElementById("course").value;
  formData.hostel = document.getElementById("hostel").value;
  return formData;
  insertDataForm(formData);
}

function insertDataForm(data) {
  

  var table = document.getElementById("student") .getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell0 = newRow.insertCell(0);
  cell0.innerHTML = data.studentname;
  cell1 = newRow.insertCell(1);
  cell1.innerHTML = data.fathername;
  cell2 = newRow.insertCell(2);
  cell2.innerHTML = data.surname;
  cell3 = newRow.insertCell(3);
  cell3.innerHTML = data.department;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = data.semester;
  cell5 = newRow.insertCell(5);
  cell5.innerHTML = data.email;
  cell6 = newRow.insertCell(6);
  cell6.innerHTML = data.number;
  cell7 = newRow.insertCell(7);
  cell7.innerHTML = data.Enrolmentnumber;
  cell8 = newRow.insertCell(8);
  cell8.innerHTML = data.course;
  cell9 = newRow.insertCell(9);
  cell9.innerHTML = data.hostel;
  cell10 = newRow.insertCell(10);
  cell10.innerHTML = '<button onClick="onEdit(this)">Edit</button><button onClick="onDelete(this)">Delete</button>';
}
 function resetForm() {
   document.getElementById("studentname").value="";
   document.getElementById("fathername").value="";
   document.getElementById("surname").value="";
   document.getElementById("department").value="";
   document.getElementById("semester").value="";
   document.getElementById("email").value="";
   document.getElementById("number").value="";
   document.getElementById("Enrolmentnumber").value="";
   document.getElementById("course").value="";
   document.getElementById("hostel").value="";
   selectedRow = null;
   
 }

function onEdit(td) {
  
    selectedRow = td.parentElement.parentElement;
    document.getElementById("studentname").value=selectedRow.cells[0].innerHTML;
    document.getElementById("fathername").value=selectedRow.cells[1].innerHTML;
    document.getElementById("surname").value=selectedRow.cells[2].innerHTML;
    document.getElementById("department").value=selectedRow.cells[3].innerHTML;
    document.getElementById("semester").value=selectedRow.cells[4].innerHTML;
    document.getElementById("email").value=selectedRow.cells[5].innerHTML;
    document.getElementById("number").value=selectedRow.cells[6].innerHTML;
    document.getElementById("Enrolmentnumber").value=selectedRow.cells[7].innerHTML;
    document.getElementById("course").value=selectedRow.cells[8].innerHTML;
    document.getElementById("hostel").value=selectedRow.cells[9].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.studentname;
  selectedRow.cells[1].innerHTML = formData.fathername;
  selectedRow.cells[2].innerHTML = formData.surname;
  selectedRow.cells[3].innerHTML = formData.department;
  selectedRow.cells[4].innerHTML = formData.semester;
  selectedRow.cells[5].innerHTML = formData.email;
  selectedRow.cells[6].innerHTML = formData.number;
  selectedRow.cells[7].innerHTML = formData.Enrolmentnumber;
  selectedRow.cells[8].innerHTML = formData.course;
  selectedRow.cells[9].innerHTML = formData.hostel;
}
function onDelete(td) {
  if (confirm('Are you sure to delete this record ?')) {
      row = td.parentElement.parentElement;
      document.getElementById("student").deleteRow(row.rowIndex);
      resetForm();
  }
}
