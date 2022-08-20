const searchingStudent = async () => {
  try {
    const parent = document.getElementsByClassName(
      "studentDetailsCardContainer"
    )[0];
    removeAllChildNodes(parent);
  
    const SearchMedium = document.getElementById("searchMedium").value;
    const SearchingValue = document.getElementById("searchingValue").value;

    let mainUrl = "/student";
    //   let params = "/student/:department/:year";

    if (SearchMedium === "Year") {
      mainUrl = `${mainUrl}/${SearchingValue}`;
    } else if (SearchMedium === "Blood-Group") {
      mainUrl = `${mainUrl}BloodGroup/${SearchingValue}`;

    } else if (SearchMedium === "Building-Number") {
      mainUrl = `${mainUrl}Building/${SearchingValue}`;
    } else {
      mainUrl = `${mainUrl}/${SearchingValue}`;
    }
    const response = await fetch(mainUrl);
      const result = await response.json();
      result.map((data) => {
        return studentFullDetails(data);
      });

      document.getElementById("searchingValue").value = ""
  } catch (error) {
    console.log(error);
  }
};

// remove all child of parent
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// insert student full Details
const studentFullDetails = (data) => {
  let div = document.createElement("div");
  const markup = `
  <p>Name: <span>${data.name}</span></p>
  <p>Mobile Number: <span>${data.mob}</span></p>
  <p>Gender: <span>${data.gender}</span></p>
  <p>Year: <span>${data.year}</span></p>
  <p>Department: <span>${data.department}</span></p>
  <p>Blood-Group: <span class="room">${data.bloodGroup}</span></p>
  <p>Aadhar Number: <span>${data.aadhar}</span></p>
  <p>Building Number: <span class="room">${data.buildingNumber}</span></p>
  <p>Room-Type: <span class="room">${data.roomType}</span></p>
  <p>Father's Name <span>${data.fathersName}</span></p>
  <p>Father's Mob Number: <span>${data.fathersMob}</span></p>
  <p>Address: <span>${data.address}</span></p>
  `;

  div.className = "studentDetailsCard";
  div.innerHTML = markup;

  const parent = document.getElementsByClassName(
    "studentDetailsCardContainer"
  )[0];

//   console.log(parent);
  parent.appendChild(div);
};
