let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let mainContent = document.querySelector(".main--content");

menu.onclick = function () {
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
};

 const FormContainer = document.getElementsByClassName("formContainer");
 const DashboardRightContent = document.getElementsByClassName("dashboardRightContent");
 const SearchStudentContainer = document.getElementById("searchStudentContainer");
 const SeatAvailable = document.getElementById("seatAvailable");


const BoysHostel = document.getElementsByClassName("boysHostel")[0];
const GirlsHostel = document.getElementsByClassName("girlsHostel")[0];
const AvailableSeats = document.getElementsByClassName("availableSeats")[0];
const SearchStudent = document.getElementsByClassName("searchStudent")[0];
const ModifyStudentDetails = document.getElementsByClassName("modifyStudentDetails")[0];
const RegisterStudent = document.getElementsByClassName("registerStudent")[0];
const Logout = document.getElementsByClassName("logout")[0];


const navigateToBoysHostel = () => {
  BoysHostel.id = "active--link"
  GirlsHostel.id = ""
  AvailableSeats.id = ""
  SearchStudent.id = ""
  ModifyStudentDetails.id = ""
  RegisterStudent.id = ""
  Logout.id = ""

  document.getElementsByClassName("formContainer")[0].style.display = "none";
  document.getElementsByClassName("dashboardRightContent")[0].style.display = "block";

  SearchStudentContainer.style.display = "none"

}
const navigateToGirlsHostel = () => {
  BoysHostel.id = ""
  GirlsHostel.id = "active--link"
  AvailableSeats.id = ""
  SearchStudent.id = ""
  ModifyStudentDetails.id = ""
  RegisterStudent.id = ""
  Logout.id = ""

  SearchStudentContainer.style.display = "none"
  SeatAvailable.style.display = "none"

  FormContainer[0].style.display = "none";
  DashboardRightContent[0].style.display = "none";

}
const navigateToAvailableSeats = () => {
  BoysHostel.id = ""
  GirlsHostel.id = ""
  AvailableSeats.id = "active--link"
  SearchStudent.id = ""
  ModifyStudentDetails.id = ""
  RegisterStudent.id = ""
  Logout.id = ""

  FormContainer[0].style.display = "none";
  SearchStudentContainer.style.display = "none"
  DashboardRightContent[0].style.display = "none";
  SeatAvailable.style.display = "block"


}
const navigateToSearchStudent = () => {
  BoysHostel.id = ""
  GirlsHostel.id = ""
  AvailableSeats.id = ""
  SearchStudent.id = "active--link"
  ModifyStudentDetails.id = ""
  RegisterStudent.id = ""
  Logout.id = ""

  DashboardRightContent[0].style.display = "none";
  FormContainer[0].style.display = "none";
  SeatAvailable.style.display = "none"


  //searchStudentContainer make visible.
  SearchStudentContainer.style.display = "block"
}
const navigateToModifyStudentDetails = () => {
  BoysHostel.id = ""
  GirlsHostel.id = ""
  AvailableSeats.id = ""
  SearchStudent.id = ""
  ModifyStudentDetails.id = "active--link"
  RegisterStudent.id = ""
  Logout.id = ""

  SearchStudentContainer.style.display = "none"
  SeatAvailable.style.display = "none"

  FormContainer[0].style.display = "none";
  DashboardRightContent[0].style.display = "none";


}
const navigateToRegisterStudent = () => {
  BoysHostel.id = ""
  GirlsHostel.id = ""
  AvailableSeats.id = ""
  SearchStudent.id = ""
  ModifyStudentDetails.id = ""
  RegisterStudent.id = "active--link"
  Logout.id = ""

  document.getElementsByClassName("formContainer")[0].style.display = "flex";
  document.getElementsByClassName("dashboardRightContent")[0].style.display = "none";
  // alert("nav")

  SearchStudentContainer.style.display = "none"
  SeatAvailable.style.display = "none"



}
const navigateToLogout = () => {
  BoysHostel.id = ""
  GirlsHostel.id = ""
  AvailableSeats.id = ""
  SearchStudent.id = ""
  ModifyStudentDetails.id = ""
  RegisterStudent.id = ""
  Logout.id = "active--link"

  SearchStudentContainer.style.display = "none"
  SeatAvailable.style.display = "none"

  FormContainer[0].style.display = "none";
  DashboardRightContent[0].style.display = "none";


}

// fetch student data
const fetchStudentDetails = async (year) => {

  const url = "http://localhost:8000/student";
  const response = await fetch(url);
  let result = await response.json();
  result = result.filter((data) => {
    return data.year == year;
  });

  console.log(result);

  //   insertTitleTag(year);
  const temp = document.getElementById("studentYear");

  if (year === 1) {
    temp.innerHTML = `<span id="studentYear">${year}</span><sup>st</sup> Year Student's`;
  } else if (year === 2) {
    temp.innerHTML = `<span id="studentYear">${year}</span><sup>nd</sup> Year Student's`;
  } else if (year === 3) {
    temp.innerHTML = `<span id="studentYear">${year}</span><sup>rd</sup> Year Student's`;
  } else {
    temp.innerHTML = `<span id="studentYear">${year}</span><sup>th</sup> Year Student's`;
  }

  document.getElementById("addStudentBtn").style.visibility = "visible";
  document.getElementById("tableHead").style.visibility = "visible";

  const parent = document.getElementById("tableBody");
  removeAllChildNodes(parent);

  result.map((data) => {
    return studentInfo(data);
  })


  
};


// remove all child of parent 
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// insert student infomation
const studentInfo = (data) => {
    // <td>${data.buildingNumber}-Seaters</td>
  let tr = document.createElement("tr");
  const markup = `
    <td>${data.name}</td>
    <td>${data.mob}</td>
    <td>${data.department + " / " + data.year}</td>
    <td>${data.buildingNumber}</td>
    <td>${data.roomType}</td>
    <td><span><i class="ri-edit-line edit"></i><i
    class="ri-delete-bin-line delete"></i></span></td>`;

  tr.innerHTML = markup;

  const parent = document.getElementById("tableBody");

  console.log(parent);
  parent.appendChild(tr);
};
