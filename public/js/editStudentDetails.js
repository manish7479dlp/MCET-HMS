const popup = document.querySelector('.full-screen');

function showPopup(data){
  popup.classList.remove('hidden');
  // sessionStorage.setItem("editStudentDetails" , JSON.stringify(data));
}

function closePopup(){
  popup.classList.add('hidden');
}
