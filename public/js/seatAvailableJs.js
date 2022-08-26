const BlankSeat = document.getElementsByClassName("blankSeat");
const vaccentDataTable = document.getElementById("vaccentDataTable");

const FullBuildingSeatAvailability = document.getElementsByClassName(
  "fullBuildingSeatAvailability"
)[0];

const seatsAvailableContainer = document.getElementsByClassName(
  "seatsAvailableContainer"
)[0];
FullBuildingSeatAvailability.style.display = "none";

const displayAllBuildingDetails = (buildingData) => {
  const studentGender = JSON.parse(sessionStorage.getItem("auth"))[0]
    .hostelType;
  if (studentGender == "Boys") {
    for (let roomNumber = 14; roomNumber <= 64; roomNumber++) {
      const eachRoomDetails = buildingData.filter((data) => {
        return (
          data.buildingNumber == roomNumber ||
          data.buildingNumber == roomNumber + "A"
        );
      });
      FullBuildingSeatAvailability.style.display = "flex";

      const validRoom = new Array(66);
      validRoom[14] = true;
      validRoom[15] = true;
      validRoom[16] = true;
      validRoom[17] = true;
      validRoom[18] = true;
      validRoom[19] = true;
      validRoom[20] = true;
      validRoom[61] = true;
      validRoom[63] = true;
      validRoom[56] = true;
      validRoom[51] = true;
      validRoom[53] = true;
      validRoom[55] = true;
      validRoom[62] = true;
      validRoom[64] = true;

      if (validRoom[roomNumber]) {
        addEachRoomStatus(eachRoomDetails, roomNumber);
      }
    }
  } else {
    for (let roomNumber = 65; roomNumber <= 70; roomNumber++) {
      const eachRoomDetails = buildingData.filter((data) => {
        return (
          data.buildingNumber == roomNumber ||
          data.buildingNumber == roomNumber + "A"
        );
      });
      FullBuildingSeatAvailability.style.display = "flex";

      addEachRoomStatus(eachRoomDetails, roomNumber);
    }
  }
};

// add new row into table with room data
const addEachRoomStatus = (eachRoomDetails, roomNumber) => {
  const tr1 = document.createElement("tr");
  const tr2 = document.createElement("tr");

  if (roomNumber != 51 || roomNumber != 53 || roomNumber != 55) {
    const upper2Seater = eachRoomDetails.filter((data) => {
      return (
        data.buildingNumber == roomNumber + "A" && data.roomType == "2-seaters"
      );
    });

    const upper3Seater = eachRoomDetails.filter((data) => {
      return (
        data.buildingNumber == roomNumber + "A" && data.roomType == "3-seaters"
      );
    });

    const markup1 = ` <tr>
  <td>${roomNumber}A</td>
  ${
    upper2Seater.length == 0
      ? `<td class = "vaccentSeats">${2 - upper2Seater.length} </td> `
      : `<td>${2 - upper2Seater.length}</td>`
  }
  ${
    upper3Seater.length == 0
      ? `<td class = "vaccentSeats">${2 - upper3Seater.length} </td> `
      : `<td>${2 - upper3Seater.length}</td>`
  }
</tr>`;

    tr1.innerHTML = markup1;
    vaccentDataTable.appendChild(tr1);
  }

  if (roomNumber != 56) {
    const lower2Seater = eachRoomDetails.filter((data) => {
      return data.buildingNumber == roomNumber && data.roomType == "2-seaters";
    });

    const lower3Seater = eachRoomDetails.filter((data) => {
      return data.buildingNumber == roomNumber && data.roomType == "3-seaters";
    });

    const markup2 = ` <tr>
  <td>${roomNumber}</td>
  ${
    lower2Seater.length == 0
      ? `<td class = "vaccentSeats">${2 - lower2Seater.length} </td> `
      : `<td>${2 - lower2Seater.length}</td>`
  }
  ${
    lower3Seater.length == 0
      ? `<td class = "vaccentSeats">${2 - lower3Seater.length} </td> `
      : `<td>${2 - lower3Seater.length}</td>`
  }
</tr>`;

    tr2.innerHTML = markup2;
    vaccentDataTable.appendChild(tr2);
  }
};

const checkSeatAvailability = async () => {
  try {
    toastr.info("Please wait..")
    FullBuildingSeatAvailability.style.display = "none";
    const SeatSearchParameter = document.getElementById("seatSearchParameter");
    let originalUrl = "student";
    // let originalUrl = "studentBuilding";
    originalUrl = `/${originalUrl}`;
    // originalUrl = `${url}/${originalUrl}/${SeatSearchParameter.value}`;
    const response = await fetch(originalUrl);
    const result = await response.json();
    // console.log(result);

    if (
      SeatSearchParameter.value == "ALL" ||
      SeatSearchParameter.value == "all" ||
      SeatSearchParameter.value == "All"
    ) {
      seatsAvailableContainer.style.display = "none";
      porjectTitle.innerText = "Available All Seats List"

      removeAllChildNodes(vaccentDataTable);
      // add tr into table
      const tr = document.createElement("tr");
      tr.className = "seatAvailableTableth"

      const markup = `
      <th>Room Number</th>
      <th>2-Seaters</th>
      <th>3-Seaters</th>`;

      tr.innerHTML = markup;
      vaccentDataTable.appendChild(tr);
      displayAllBuildingDetails(result);
      return;
    }



    seatsAvailableContainer.style.display = "flex";

    document.getElementById(
      "upperRoom"
    ).innerText = `Building Number: ${SeatSearchParameter.value}A`;
    document.getElementById(
      "lowerRoom"
    ).innerText = `Building Number: ${SeatSearchParameter.value}`;

    BlankSeat[0].style.display = "none";
    BlankSeat[1].style.display = "none";
    BlankSeat[2].style.display = "none";
    BlankSeat[3].style.display = "none";
    BlankSeat[4].style.display = "none";
    BlankSeat[5].style.display = "none";
    BlankSeat[6].style.display = "none";
    BlankSeat[7].style.display = "none";

    porjectTitle.innerText = "Room Wise Available Seats"

    setDataToStudent(result, SeatSearchParameter.value);
    SeatSearchParameter.value = "";
  } catch (error) {
    console.log(error);
    toastr.error("Some technical issue is happened.")
  }
};

const setDataToStudent = (data, buildingNumber) => {
  // upper 2-seaters
  const u2fName = document.getElementById("u2fName");
  const u2fYear = document.getElementById("u2fYear");
  const u2fDept = document.getElementById("u2fDept");

  u2fName.style.display = "block";
  u2fYear.style.display = "block";
  u2fDept.style.display = "block";

  const u2sName = document.getElementById("u2sName");
  const u2sYear = document.getElementById("u2sYear");
  const u2sDept = document.getElementById("u2sDept");

  u2sName.style.display = "block";
  u2sYear.style.display = "block";
  u2sDept.style.display = "block";

  //   upper 3-seaters
  const u3fName = document.getElementById("u3fName");
  const u3fYear = document.getElementById("u3fYear");
  const u3fDept = document.getElementById("u3fDept");

  u3fName.style.display = "block";
  u3fYear.style.display = "block";
  u3fDept.style.display = "block";

  const u3sName = document.getElementById("u3sName");
  const u3sYear = document.getElementById("u3sYear");
  const u3sDept = document.getElementById("u3sDept");

  u3sName.style.display = "block";
  u3sYear.style.display = "block";
  u3sDept.style.display = "block";

  //   lower 2-seaters
  const l2fName = document.getElementById("l2fName");
  const l2fYear = document.getElementById("l2fYear");
  const l2fDept = document.getElementById("l2fDept");

  l2fName.style.display = "block";
  l2fYear.style.display = "block";
  l2fDept.style.display = "block";

  const l2sName = document.getElementById("l2sName");
  const l2sYear = document.getElementById("l2sYear");
  const l2sDept = document.getElementById("l2sDept");

  l2sName.style.display = "block";
  l2sYear.style.display = "block";
  l2sDept.style.display = "block";

  //   lower 3-seaters
  const l3fName = document.getElementById("l3fName");
  const l3fYear = document.getElementById("l3fYear");
  const l3fDept = document.getElementById("l3fDept");

  l3fName.style.display = "block";
  l3fYear.style.display = "block";
  l3fDept.style.display = "block";

  const l3sName = document.getElementById("l3sName");
  const l3sYear = document.getElementById("l3sYear");
  const l3sDept = document.getElementById("l3sDept");

  l3sName.style.display = "block";
  l3sYear.style.display = "block";
  l3sDept.style.display = "block";

  let flag = false;

  const lower2SeaterData = data.filter((data) => {
    return (
      data.roomType === "2-seaters" && data.buildingNumber === buildingNumber
    );
  });

  if (lower2SeaterData.length === 2) {
    l2fName.lastChild.innerText = lower2SeaterData[0].name;
    l2fYear.lastChild.innerText = lower2SeaterData[0].year;
    l2sDept.lastChild.innerText = lower2SeaterData[0].department;

    l2sName.lastChild.innerText = lower2SeaterData[1].name;
    l2sYear.lastChild.innerText = lower2SeaterData[1].year;
    l2sDept.lastChild.innerText = lower2SeaterData[1].department;
  } else if (lower2SeaterData.length === 1) {
    l2fName.lastChild.innerText = lower2SeaterData[0].name;
    l2fYear.lastChild.innerText = lower2SeaterData[0].year;
    l2fDept.lastChild.innerText = lower2SeaterData[0].department;

    // l2sName.innerHTML = "Empty"
    // l2sYear.innerHTML = ""
    // l2sDept.innerHTML = ""

    l2sName.style.display = "none";
    l2sYear.style.display = "none";
    l2sDept.style.display = "none";

    BlankSeat[5].style.display = "block";
  } else {
    l2fName.style.display = "none";
    l2fYear.style.display = "none";
    l2fDept.style.display = "none";
    BlankSeat[4].style.display = "block";

    l2sName.style.display = "none";
    l2sYear.style.display = "none";
    l2sDept.style.display = "none";
    BlankSeat[5].style.display = "block";
  }

  const lower3SeaterData = data.filter((data) => {
    return (
      data.roomType === "3-seaters" && data.buildingNumber === buildingNumber
    );
  });

  // console.log(lower3SeaterData);

  if (lower3SeaterData.length === 2) {
    l3fName.lastChild.innerText = lower3SeaterData[0].name;
    l3fYear.lastChild.innerText = lower3SeaterData[0].year;
    l3fDept.lastChild.innerText = lower3SeaterData[0].department;

    l3sName.lastChild.innerText = lower3SeaterData[1].name;
    l3sYear.lastChild.innerText = lower3SeaterData[1].year;
    l3sDept.lastChild.innerText = lower3SeaterData[1].department;
  } else if (lower3SeaterData.length === 1) {
    l3fName.lastChild.innerText = lower3SeaterData[0].name;
    l3fYear.lastChild.innerText = lower3SeaterData[0].year;
    l3fDept.lastChild.innerText = lower3SeaterData[0].department;

    l3sName.style.display = "none";
    l3sYear.style.display = "none";
    l3sDept.style.display = "none";

    BlankSeat[7].style.display = "block";
  } else {
    l3fName.style.display = "none";
    l3fYear.style.display = "none";
    l3fDept.style.display = "none";
    BlankSeat[6].style.display = "block";

    l3sName.style.display = "none";
    l3sYear.style.display = "none";
    l3sDept.style.display = "none";
    BlankSeat[7].style.display = "block";
  }

  buildingNumber = buildingNumber + "A";

  //   console.log(buildingNumber);3
  const upper2SeaterData = data.filter((data) => {
    return (
      data.roomType === "2-seaters" && data.buildingNumber === buildingNumber
    );
  });

  if (upper2SeaterData.length === 2) {
    u2fName.lastChild.innerText = upper2SeaterData[0].name;
    u2fYear.lastChild.innerText = upper2SeaterData[0].year;
    u2fDept.lastChild.innerText = upper2SeaterData[0].department;

    u2sName.lastChild.innerText = upper2SeaterData[1].name;
    u2sYear.lastChild.innerText = upper2SeaterData[1].year;
    u2sDept.lastChild.innerText = upper2SeaterData[1].department;
  } else if (upper2SeaterData.length === 1) {
    u2fName.lastChild.innerText = upper2SeaterData[0].name;
    u2fYear.lastChild.innerText = upper2SeaterData[0].year;
    u2fDept.lastChild.innerText = upper2SeaterData[0].department;

    u2sName.style.display = "none";
    u2sYear.style.display = "none";
    u2sDept.style.display = "none";

    BlankSeat[1].style.display = "block";
  } else {
    u2fName.style.display = "none";
    u2fYear.style.display = "none";
    u2fDept.style.display = "none";
    BlankSeat[0].style.display = "block";

    u2sName.style.display = "none";
    u2sYear.style.display = "none";
    u2sDept.style.display = "none";
    BlankSeat[1].style.display = "block";
  }

  const upper3SeaterData = data.filter((data) => {
    return (
      data.roomType === "3-seaters" && data.buildingNumber === buildingNumber
    );
  });

  //   console.log( upper3SeaterData);

  if (upper3SeaterData.length === 2) {
    u3fName.lastChild.innerText = upper3SeaterData[0].name;
    u3fYear.lastChild.innerText = upper3SeaterData[0].year;
    u3fDept.lastChild.innerText = upper3SeaterData[0].department;

    u3sName.lastChild.innerText = upper3SeaterData[1].name;
    u3sYear.lastChild.innerText = upper3SeaterData[1].year;
    u3sDept.lastChild.innerText = upper3SeaterData[1].department;
  } else if (upper3SeaterData.length === 1) {
    u3fName.lastChild.innerText = upper3SeaterData[0].name;
    u3fYear.lastChild.innerText = upper3SeaterData[0].year;
    u3fDept.lastChild.innerText = upper3SeaterData[0].department;

    u3sName.style.display = "none";
    u3sYear.style.display = "none";
    u3sDept.style.display = "none";

    BlankSeat[3].style.display = "block";
  } else {
    u3fName.style.display = "none";
    u3fYear.style.display = "none";
    u3fDept.style.display = "none";
    BlankSeat[2].style.display = "block";

    u3sName.style.display = "none";
    u3sYear.style.display = "none";
    u3sDept.style.display = "none";
    BlankSeat[3].style.display = "block";
  }
};
