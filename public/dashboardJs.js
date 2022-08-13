let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let mainContent = document.querySelector(".main--content");

menu.onclick = function () {
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
};

const fetchStudentDetails = async (year) => {

  const url = "http://localhost:8000/student";
  const response = await fetch(url);
  let result = await response.json();
  result = result.filter((data) => {
    return data.year === year;
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
