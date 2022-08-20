const popup = document.querySelector('.full-screen');

function showPopup(data){
  popup.classList.remove('hidden');
  console.log(data);
  fillStudentDetailsFiled(data[0]);
  const editForm = document.getElementById("editForm");
  editForm.setAttribute("action" , `/student/${data[0]._id}`)
  console.log(editForm);
  // sessionStorage.setItem("editStudentDetails" , JSON.stringify(data));
}

const fillStudentDetailsFiled = (data) => {
  
  document.getElementById("fullName").value = data.name;

  document.getElementById("mobileNumber").value = data.mob;
  
  document.getElementById("aadharNumber").value = data.aadhar;
  
  document.getElementById("bloodGroupFiled").value = data.bloodGroup;
  
  document.getElementById("year").value = data.year;
  
  document.getElementById("department").value = data.department;
  
  document.getElementById("roomType").value = data.roomType;
  
  document.getElementById("buildingNumberField").value = data.buildingNumber;
  
  document.getElementById("fathersName").value = data.fathersName;
  
  document.getElementById("fathersMobNumber").value = data.fathersMob;
  
  document.getElementById("address").value = data.address;
  
  
}

function closePopup(){
  const editForm = document.getElementById("editForm");
  console.log(editForm);
  popup.classList.add('hidden');
}
