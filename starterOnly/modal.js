function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalCloseBtn.addEventListener('click', closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// User informations 
const userInformations = {
  first : '',
  last : '',
  email : '',
  birthdate : '',
  quantity : '',
  location : '',
  conditions : false,
  newsletter : false,
}

// Modifiation du prénom
document.getElementById('first').addEventListener('change', function(e) {
  e.preventDefault;
  userInformations.first = e.target.value;
  console.log(userInformations)
})

// Modifiation du nom
document.getElementById('last').addEventListener('change', function(e) {
  e.preventDefault;
  userInformations.last = e.target.value;
  console.log(userInformations)
})

// Modifiation de l'email
document.getElementById('email').addEventListener('change', function(e) {
  e.preventDefault;
  userInformations.email = e.target.value;
  console.log(userInformations)
})









