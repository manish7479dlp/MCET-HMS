const BlankSeat = document.getElementsByClassName("blankSeat");
const checkSeatAvailability = async () => {
  try {
    const SeatSearchParameter = document.getElementById("seatSearchParameter");
    const url = "http://localhost:8000";
    let originalUrl = "student";
    // let originalUrl = "studentBuilding";
    originalUrl = `${url}/${originalUrl}`;
    // originalUrl = `${url}/${originalUrl}/${SeatSearchParameter.value}`;
    const response = await fetch(originalUrl);
    const result = await response.json();
    // console.log(result);
     
    BlankSeat[0].style.display = "none"
    BlankSeat[1].style.display = "none"
    BlankSeat[2].style.display = "none"
    BlankSeat[3].style.display = "none"
    BlankSeat[4].style.display = "none"
    BlankSeat[5].style.display = "none"
    BlankSeat[6].style.display = "none"
    BlankSeat[7].style.display = "none"
    BlankSeat[8].style.display = "none"
    
    setDataToStudent(result, SeatSearchParameter.value);
    SeatSearchParameter.value = ""
  } catch (error) {
    console.log(error);
  }
};



const setDataToStudent = (data, buildingNumber) => {

    // upper 2-seaters
  const u2fName = document.getElementById("u2fName");
  const u2fYear = document.getElementById("u2fYear");
  const u2fDept = document.getElementById("u2fDept");

  const u2sName = document.getElementById("u2sName");
  const u2sYear = document.getElementById("u2sYear");
  const u2sDept = document.getElementById("u2sDept")

//   upper 3-seaters
  const u3fName = document.getElementById("u3fName");
  const u3fYear = document.getElementById("u3fYear");
  const u3fDept = document.getElementById("u3fDept");

  const u3sName = document.getElementById("u3sName");
  const u3sYear = document.getElementById("u3sYear");
  const u3sDept = document.getElementById("u3sDept");

//   lower 2-seaters
  const l2fName = document.getElementById("l2fName");
  const l2fYear = document.getElementById("l2fYear");
  const l2fDept = document.getElementById("l2fDept");

  const l2sName = document.getElementById("l2sName");
  const l2sYear = document.getElementById("l2sYear");
  const l2sDept = document.getElementById("l2sDept");
    
//   lower 3-seaters
  const l3fName = document.getElementById("l3fName");
  const l3fYear = document.getElementById("l3fYear");
  const l3fDept = document.getElementById("l3fDept");

  const l3sName = document.getElementById("l3sName");
  const l3sYear = document.getElementById("l3sYear");
  const l3sDept = document.getElementById("l3sDept");

  let flag = false;

  const lower2SeaterData = data.filter((data) => {
    return (
      data.roomType === "2-seaters" && data.buildingNumber === buildingNumber
    );
  });

// console.log(lower2SeaterData);

if(lower2SeaterData.length === 2) {

    l2fName.lastChild.innerText = lower2SeaterData[0].name;
    l2fYear.lastChild.innerText = lower2SeaterData[0].year;
    l2sDept.lastChild.innerText = lower2SeaterData[0].department;

    l2sName.lastChild.innerText = lower2SeaterData[1].name;
    l2sYear.lastChild.innerText = lower2SeaterData[2].year;
    l2sDept.lastChild.innerText = lower2SeaterData[3].department;


} else if(lower2SeaterData.length === 1) {
    l2fName.lastChild.innerText = lower2SeaterData[0].name;
    l2fYear.lastChild.innerText = lower2SeaterData[0].year;
    l2fDept.lastChild.innerText = lower2SeaterData[0].department;

    // l2sName.innerHTML = "Empty"
    // l2sYear.innerHTML = ""
    // l2sDept.innerHTML = ""

    l2sName.style.display = "none";
    l2sYear.style.display = "none";
    l2sDept.style.display = "none";

} else {
    l2fName.innerHTML = "Empty"
    l2fYear.innerHTML = ""
    l2fDept.innerHTML = ""

    l2sName.innerHTML = "Empty"
    l2sYear.innerHTML = ""
    l2sDept.innerHTML = ""
}


  const lower3SeaterData = data.filter((data) => {
    return (
      data.roomType === "2-seaters" && data.buildingNumber === buildingNumber
    );
  });

// console.log(lower3SeaterData);

if(lower3SeaterData.length === 2) {

    l3fName.lastChild.innerText = lower3SeaterData[0].name;
    l3fName.lastChild.innerText = lower3SeaterData[0].year;
    l3fName.lastChild.innerText = lower3SeaterData[0].department;

    l3sName.lastChild.innerText = lower3SeaterData[1].name;
    l3sName.lastChild.innerText = lower3SeaterData[2].year;
    l3sName.lastChild.innerText = lower3SeaterData[3].department;


} else if(lower3SeaterData.length === 1) {
    l3fName.lastChild.innerText = lower3SeaterData[0].name;
    l3fYear.lastChild.innerText = lower3SeaterData[0].year;
    l3fDept.lastChild.innerText = lower3SeaterData[0].department;

    l3sName.innerHTML = "Empty"
    l3sYear.innerHTML = ""
    l3sDept.innerHTML = ""

} else {
    l3fName.innerHTML = "Empty"
    l3fYear.innerHTML = ""
    l3fDept.innerHTML = ""

    l3sName.innerHTML = "Empty"
    l3sYear.innerHTML = ""
    l3sDept.innerHTML = ""
}
  

  buildingNumber = buildingNumber + "A";

//   console.log(buildingNumber);

  const upper2SeaterData = data.filter((data) => {
    return (
      data.roomType === "2-seaters" && data.buildingNumber === buildingNumber
    );
  });

console.log(upper2SeaterData);
console.log(upper2SeaterData.length);

if(upper2SeaterData.length === 2) {

    u2fName.lastChild.innerText = upper2SeaterData[0].name;
    u2fName.lastChild.innerText = upper2SeaterData[0].year;
    u2fName.lastChild.innerText = upper2SeaterData[0].department;

    u2sName.lastChild.innerText = upper2SeaterData[1].name;
    u2sName.lastChild.innerText = upper2SeaterData[1].year;
    u2sName.lastChild.innerText = upper2SeaterData[1].department;


} else if(upper2SeaterData.length === 1) {
    console.log(upper2SeaterData[0].name);
    u2fName.lastChild.innerText = upper2SeaterData[0].name;
    u2fYear.lastChild.innerText = upper2SeaterData[0].year;
    u2fDept.lastChild.innerText = upper2SeaterData[0].department;

    u2sName.innerHTML = "Empty"
    u2sYear.innerHTML = ""
    u2sDept.innerHTML = ""

} else {
    u2fName.innerHTML = "Empty"
    u2fYear.innerHTML = ""
    u2fDept.innerHTML = ""

    u2sName.innerHTML = "Empty"
    u2sYear.innerHTML = ""
    u2sDept.innerHTML = ""
}



  const upper3SeaterData = data.filter((data) => {
    return (
      data.roomType === "3-seaters" && data.buildingNumber === buildingNumber
    );
  });

//   console.log( upper3SeaterData);

  if(upper3SeaterData.length === 2) {

    u3fName.lastChild.innerText = upper3SeaterData[0].name;
    u3fYear.lastChild.innerText = upper3SeaterData[0].year;
    u3fDept.lastChild.innerText = upper3SeaterData[0].department;

    u3sName.lastChild.innerText = upper3SeaterData[0].name;
    u3sYear.lastChild.innerText = upper3SeaterData[0].year;
    u3sDept.lastChild.innerText = upper3SeaterData[0].department;


} else if(upper3SeaterData.length === 1) {
    u3fName.lastChild.innerText = upper3SeaterData[0].name;
    u3fYear.lastChild.innerText = upper3SeaterData[0].year;
    u3fDept.lastChild.innerText = upper3SeaterData[0].department;

    u3sName.innerHTML = "Empty"
    u3sYear.innerHTML = ""
    u3sDept.innerHTML = ""

} else {
    u3fName.innerHTML = "Empty"
    u3fYear.innerHTML = ""
    u3fDept.innerHTML = ""

    u3sName.innerHTML = "Empty"
    u3sYear.innerHTML = ""
    u3sDept.innerHTML = ""
}
};
