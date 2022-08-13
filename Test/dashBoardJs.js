let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let mainContent = document.querySelector(".main--content");

menu.onclick = function () {
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
};

const getStudentData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log("🚀 ~ file: dashBoardJs.js ~ line 13 ~ getStudentData ~ result", result)
  return result;
}

getStudentData("http://localhost:8000/student");