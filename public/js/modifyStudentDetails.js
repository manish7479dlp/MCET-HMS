const storePassedStudentDetails = document.getElementById("storePassedStudentDetails");
const authData = JSON.parse(sessionStorage.getItem("auth"))[0];
console.log(authData);
storePassedStudentDetails.setAttribute("action" , `/storeStudentDetails/${authData.hostelType}`);
