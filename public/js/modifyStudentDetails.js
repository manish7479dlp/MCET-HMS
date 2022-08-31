const storePassedStudentDetails = document.getElementById("storePassedStudentDetails");
const authData = sessionStorage.getItem("hostelType");
console.log(authData);
storePassedStudentDetails.setAttribute("action" , `/storeStudentDetails/${authData}`);
