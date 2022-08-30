let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let mainContent = document.querySelector(".main--content");

menu.onclick = function () {
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
};

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-top-center",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

// Auth check
const auth = sessionStorage.getItem("auth");
if (!auth) {
  toastr.warning("Don't try to do like this..");
  window.location.href = "/";
}

// dashboard loading partial reference
const loading = document.getElementById("loading");
loading.style.display = "none";

// project heading
const porjectTitle = document.getElementById("porjectTitle");

const registerGenderField = document.getElementById("registerGenderField");
let Gender = JSON.parse(sessionStorage.getItem("auth"))[0].hostelType;
Gender = Gender == "Boys" ? "Male" : "Female";
registerGenderField.value = Gender;

const FormContainer = document.getElementsByClassName("formContainer");
const DashboardRightContent = document.getElementsByClassName(
  "dashboardRightContent"
);
const SearchStudentContainer = document.getElementById(
  "searchStudentContainer"
);
const ModifyStudentDetailsContainer = document.getElementById(
  "modifyStudentDetailsContainer"
);
const SeatsAvailbableContentContainer = document.getElementsByClassName(
  "seatsAvailbableContentContainer"
)[0];

SearchStudentContainer.style.display = "none";
ModifyStudentDetailsContainer.style.display = "none";

SeatsAvailbableContentContainer.style.display = "none";

document.getElementsByClassName("formContainer")[0].style.display = "none";

const BoysHostel = document.getElementsByClassName("boysHostel")[0];
// const GirlsHostel = document.getElementsByClassName("girlsHostel")[0];
const AvailableSeats = document.getElementsByClassName("availableSeats")[0];
const SearchStudent = document.getElementsByClassName("searchStudent")[0];
const ModifyStudentDetails = document.getElementsByClassName(
  "modifyStudentDetails"
)[0];
const RegisterStudent = document.getElementsByClassName("registerStudent")[0];
const Logout = document.getElementsByClassName("logout")[0];
const search = document.getElementsByClassName("search")[0];

porjectTitle.innerText = `${
  JSON.parse(sessionStorage.getItem("auth"))[0].hostelType
} Hostel Details`;

//navbar search box
search.style.display = "none";

const navigateToBoysHostel = () => {
  porjectTitle.innerText = `${
    JSON.parse(sessionStorage.getItem("auth"))[0].hostelType
  } Hostel Details`;

  BoysHostel.id = "active--link";
  AvailableSeats.id = "";
  SearchStudent.id = "";
  ModifyStudentDetails.id = "";
  RegisterStudent.id = "";
  Logout.id = "";

  document.getElementsByClassName("formContainer")[0].style.display = "none";
  document.getElementsByClassName("dashboardRightContent")[0].style.display =
    "block";

  SearchStudentContainer.style.display = "none";

  SeatsAvailbableContentContainer.style.display = "none";

  FormContainer[0].style.display = "none";
  ModifyStudentDetailsContainer.style.display = "none";

  //navbar search box
  search.style.display = "none";
};

const navigateToAvailableSeats = () => {
  porjectTitle.innerText = "Available Seats";
  BoysHostel.id = "";
  // GirlsHostel.id = "";
  AvailableSeats.id = "active--link";
  SearchStudent.id = "";
  ModifyStudentDetails.id = "";
  RegisterStudent.id = "";
  Logout.id = "";

  FormContainer[0].style.display = "none";
  SearchStudentContainer.style.display = "none";
  DashboardRightContent[0].style.display = "none";
  SeatsAvailbableContentContainer.style.display = "block";
  ModifyStudentDetailsContainer.style.display = "none";
  //navbar search box
  search.style.display = "flex";
};
const navigateToSearchStudent = () => {
  porjectTitle.innerText = "Search Students";

  BoysHostel.id = "";
  AvailableSeats.id = "";
  SearchStudent.id = "active--link";
  ModifyStudentDetails.id = "";
  RegisterStudent.id = "";
  Logout.id = "";

  DashboardRightContent[0].style.display = "none";
  FormContainer[0].style.display = "none";
  SeatsAvailbableContentContainer.style.display = "none";

  //searchStudentContainer make visible.
  SearchStudentContainer.style.display = "block";
  ModifyStudentDetailsContainer.style.display = "none";
  //navbar search box
  search.style.display = "none";
};
const navigateToModifyStudentDetails = () => {
  porjectTitle.innerText = "Modify Student Details";

  BoysHostel.id = "";
  AvailableSeats.id = "";
  SearchStudent.id = "";
  ModifyStudentDetails.id = "active--link";
  RegisterStudent.id = "";
  Logout.id = "";

  SearchStudentContainer.style.display = "none";
  SeatsAvailbableContentContainer.style.display = "none";

  FormContainer[0].style.display = "none";
  DashboardRightContent[0].style.display = "none";
  ModifyStudentDetailsContainer.style.display = "block";
  //navbar search box
  search.style.display = "none";
};

const navigateToRegisterStudent = () => {
  porjectTitle.innerText = "New Student Registration";

  BoysHostel.id = "";
  // GirlsHostel.id = "";
  AvailableSeats.id = "";
  SearchStudent.id = "";
  ModifyStudentDetails.id = "";
  RegisterStudent.id = "active--link";
  Logout.id = "";

  document.getElementsByClassName("formContainer")[0].style.display = "flex";
  document.getElementsByClassName("dashboardRightContent")[0].style.display =
    "none";
  // alert("nav")

  SearchStudentContainer.style.display = "none";
  SeatsAvailbableContentContainer.style.display = "none";
  ModifyStudentDetailsContainer.style.display = "none";
  //navbar search box
  search.style.display = "none";
};

const navigateToLogout = () => {
  BoysHostel.id = "";
  // GirlsHostel.id = "";
  AvailableSeats.id = "";
  SearchStudent.id = "";
  ModifyStudentDetails.id = "";
  RegisterStudent.id = "";
  Logout.id = "active--link";

  SearchStudentContainer.style.display = "none";
  SeatsAvailbableContentContainer.style.display = "none";

  FormContainer[0].style.display = "none";
  DashboardRightContent[0].style.display = "none";
  ModifyStudentDetailsContainer.style.display = "none";

  search.style.display = "none";
  sessionStorage.removeItem("auth");

  toastr.success("Logout Sucessfully");
  window.location.href = "/";
  //navbar search box
};

// fetch student data
const fetchStudentDetails = async (year) => {
  try {
    const parent = document.getElementById("tableBody");
    removeAllChildNodes(parent);
    loading.style.display = "block"
    
    const studentGender = JSON.parse(sessionStorage.getItem("auth"))[0]
      .hostelType;
    console.log(studentGender);
    const url = "/student";
    const response = await fetch(url);
    let result = await response.json();
    const hostelType = studentGender == "Boys" ? "Male" : "Female";
    result = result.filter((data) => {
      return data.year == year && data.gender == hostelType;
    });

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

    loading.style.display = "none"


   
    let count = 0;
    result.map((data) => {
      return studentInfo(data);
    });
  } catch (error) {
    console.log(error);
    toastr.error("Some technical problem is happened");
  }
};

// remove all child of parent
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const deleteStudentData = async (data) => {
  try {
    const confirmation = window.confirm("Do you Really Want to Delete.");
    if (confirmation) {
      const mainURL = `/student/${data}`;
      console.log(mainURL);
      const response = await fetch(mainURL, {
        method: "DELETE",
      });

      const result = await response.json();
      console.log(result);
      window.location.href = `/dashboard/${
        JSON.parse(sessionStorage.getItem("auth"))[0].hostelType
      }`;
      toastr.success("Student Details Sucessfully Deleted");
    } else {
      toastr.info("Student Details is not Deleted");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: dashboardJs.js ~ line 199 ~ deleteStudentData ~ error",
      error
    );

    toastr.error("Due to Technical issue Student Details is not Deleted");
  }
};

const editStudentData = async (data) => {
  try {
    data = data + "";
    const mainURL = "/student";
    const response = await fetch(mainURL);
    const result = await response.json();

    const desireStudentDetails = result.filter((res) => {
      return res._id === data;
    });
    console.log(desireStudentDetails);
    showPopup(desireStudentDetails);
  } catch (error) {
    console.log(error);
    toastr.error("Due to Technical issue Student Details is not Updated");
  }
};

const studentDetailsInternalInfo = (data) => {
  const id = data._id;
  let markup = `
  <td>${data.name}</td>
  <td>${data.mob}</td>
  <td>${data.department + " / " + data.year}</td>
  <td>${data.buildingNumber}</td>
  <td>${data.roomType}</td>
  <td><span><i id = "editStudentIcon" onclick = "editStudentData('${id}')" class="ri-edit-line edit"></i>
  <i id = "deleteStudentIcon" onclick = "deleteStudentData('${id}')" class="ri-delete-bin-line delete"></i></span></td>`;
  return markup;
};

// insert student infomation
const studentInfo = (data) => {
  // console.log(data);
  // <td>${data.buildingNumber}-Seaters</td>
  let tr = document.createElement("tr");

  const markup = studentDetailsInternalInfo(data);

  tr.innerHTML = markup;

  const parent = document.getElementById("tableBody");

  parent.appendChild(tr);

  // const deleteStudentDetails = document.getElementById("deleteStudentIcon");
  // deleteStudentDetails.addEventListener('click',() => { deleteStudentData(data)});
};
