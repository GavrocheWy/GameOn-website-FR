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


// IMPLÉMENTATION DES ENTRÉES DU FORMULAIRE

// User informations 
const userInformations = {
  first : '',
  last : '',
  email : '',
  birthdate : '',
  quantity : 0,
  location : '',
  conditions : false,
  newsletter : false,
}

// Implémentation et vérification des informations des entrées conditionnées du formulaire (Vérification en temps réel) - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/* 
1 - Vérifier les entrées "Nom" et "Prénom" pour qu'elles fassent plus de deux caractères et implémenter ces données dans l'objet global
2 - Vérifier l'entrée "Adresse email" pour qu'elle respecte le format d'une adresse email et implémenter la donnée dans l'objet global
3 - Vérifier l'entrée "Nombre de concours participé" pour qu'elle respecte le format numérique et le min & max, et implémenter la donnée dans l'objet global
*/

// Implémentation des informations des entrées non conditionnées du formulaire - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/* 
1 - Implémenter l'entrée "Date de naissance" lorsqu'elle est modifiée
2 - Implémenter l'entrée "Localisation du prochain tournoi" lorsqu'elle est modifiée
3 - Implémenter l'entrée "Acceptation des conditions" lorsqu'elle est modifiée
4 - Implémenter l'entrée "Newsletter" lorsqu'elle est modifiée
*/



// Envoie des donnnées de l'objet "User informations" au moment du clic sur submit - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -








