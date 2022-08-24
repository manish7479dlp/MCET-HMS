let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let mainContent = document.querySelector(".main--content");

menu.onclick = function () {
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
};

// Auth check
const auth = sessionStorage.getItem("auth");
if (!auth) {
  window.location.href = "/";
}
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

// Download student Details of specific year

// const downloadDetail = async (year) => {
//   const url = `/student/${year}`;
//   const response = await fetch(url);
//   let result = await response.json();

//   result = result.filter((data) => {
//     return data.gender == Gender;
//   });

//   console.log(result);

//   const doc = new jsPDF();

//   const currentYear = new Date().getFullYear();
//   if (year === 1) {
//     doc.save(`${currentYear}First_Year.pdf`);
//   } else if (year === 2) {
//     doc.save(`${currentYear}Second_Year.pdf`);
//   } else if (year === 3) {
//     doc.save(`${currentYear}Third_Year.pdf`);
//   } else if (year === 4) {
//     doc.save(`${currentYear}Fourth_Year.pdf`);
//   }
// };

porjectTitle.innerText = `${JSON.parse(sessionStorage.getItem("auth"))[0].hostelType} Hostel Details`

//navbar search box
search.style.display = "none"


const navigateToBoysHostel = () => {
  porjectTitle.innerText = `${JSON.parse(sessionStorage.getItem("auth"))[0].hostelType} Hostel Details`

  BoysHostel.id = "active--link";
  // GirlsHostel.id = "";
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
  search.style.display = "none"
};
// const navigateToGirlsHostel = () => {
//   BoysHostel.id = "";
//   // GirlsHostel.id = "active--link";
//   AvailableSeats.id = "";
//   SearchStudent.id = "";
//   ModifyStudentDetails.id = "";
//   RegisterStudent.id = "";
//   Logout.id = "";

//   SearchStudentContainer.style.display = "none";
//   SeatsAvailbableContentContainer.style.display = "none";

//   FormContainer[0].style.display = "none";
//   DashboardRightContent[0].style.display = "none";
// };
const navigateToAvailableSeats = () => {
  porjectTitle.innerText = "Available Seats"
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
search.style.display = "flex"
};
const navigateToSearchStudent = () => {
  porjectTitle.innerText = "Search Students"

  BoysHostel.id = "";
  // GirlsHostel.id = "";
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
   search.style.display = "none"
};
const navigateToModifyStudentDetails = () => {
  porjectTitle.innerText = "Modify Student Details"

  BoysHostel.id = "";
  // GirlsHostel.id = "";
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
   search.style.display = "none"
};

const navigateToRegisterStudent = () => {
  porjectTitle.innerText = "Registration"

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
   search.style.display = "none"
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

  sessionStorage.removeItem("auth");
  window.location.href = "/";
   //navbar search box
   search.style.display = "none"
};

// fetch student data
const fetchStudentDetails = async (year) => {
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

  // console.log(result);

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
  let count = 0;
  result.map((data) => {
    return studentInfo(data);
  });
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
    } else {
      alert("Student Details is not Deleted..");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: dashboardJs.js ~ line 199 ~ deleteStudentData ~ error",
      error
    );
  }
};

const editStudentData = async (data) => {
  data = data + "";
  const mainURL = "/student";
  const response = await fetch(mainURL);
  const result = await response.json();

  const desireStudentDetails = result.filter((res) => {
    return res._id === data;
  });
  console.log(desireStudentDetails);
  showPopup(desireStudentDetails);
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
