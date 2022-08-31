const SearchingValue = document.getElementById("searchingValue");
const searchButton = document.getElementById("searchButton");

if(SearchingValue.value.length == 0) {
  searchButton.style.display = "none";
}

const searchingValueChange = () => {
  searchButton.style.display= "inline"
  
}

const searchingStudent = async () => {
  try {
    loading.style.display = "block"
    const parent = document.getElementsByClassName(
      "studentDetailsCardContainer"
    )[0];
    removeAllChildNodes(parent);

    const SearchMedium = document.getElementById("searchMedium").value;
    let mainUrl = "/student";
    //   let params = "/student/:department/:year";

    if (SearchMedium === "Year") {
      mainUrl = `${mainUrl}/${SearchingValue.value}`;
    } else if (SearchMedium === "Blood-Group") {
      mainUrl = `${mainUrl}BloodGroup/${SearchingValue.value}`;
    } else if (SearchMedium === "Building-Number") {
      mainUrl = `${mainUrl}Building/${SearchingValue.value}`;
    } else if(SearchMedium === "Year/Department"){
      mainUrl = `${mainUrl}/${SearchingValue.value}`;
    } else if(SearchMedium == "Aadhar Number"){
      mainUrl = `${mainUrl}Aadhar/${SearchingValue.value}`;
    } else if(SearchMedium == "Full Name"){
      mainUrl = `${mainUrl}Name/${SearchingValue.value}`;
    }
    console.log(mainUrl);
    console.log(SearchingValue.value);
    const response = await fetch(mainUrl,{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
         "Authorization": `Bearer ${document.cookie.split(":")[1]}`
      }
    });
    let result = await response.json();

    const studentGender = sessionStorage.getItem("hostelType")
    const hostelType = studentGender == "Boys" ? "Male" : "Female";

    result = result.filter((data) => {
      return data.gender == hostelType;
    });

    loading.style.display = "none"
  
    result.map((data) => {
      return studentFullDetails(data);
    });

    document.getElementById("searchingValue").value = "";

    if(result.length === 0) {
      const h1 = document.createElement("h1");
      h1.style.cssText = `
      font-size: 4em;
      color: red;
      `
      
      h1.innerText = "No Record Found";
      parent.appendChild(h1);
    }
  } catch (error) {
    toastr.error("Some Technical issue occure")
    console.log(error);
  }

  searchButton.style.display = "none";

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
  <p>Email: <span>${data.email}</span></p>
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
