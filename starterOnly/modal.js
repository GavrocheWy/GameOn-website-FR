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

// IMPLÉMENTATION DES ENTRÉES DU FORMULAIRE ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// User informations 
const userInformations = {
  first: undefined,
  last: undefined,
  email: undefined,
  birthdate: undefined,
  quantity: 0,
  location: undefined,
  conditions: true,
  newsletter: false,
}

// Implémentation et vérification des informations des entrées conditionnées du formulaire (Vérification en temps réel) - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/* 
1 - Créer la fonction qui vérifie si la valeur contient deux caractères ou plus
2 - Vérifier les entrées "Nom" et "Prénom" pour qu'elles fassent plus de deux caractères et implémenter ces données dans l'objet global
3 - Vérifier l'entrée "Adresse email" pour qu'elle respecte le format d'une adresse email et implémenter la donnée dans l'objet global
4 - Vérifier l'entrée "Nombre de concours participé" pour qu'elle respecte le format numérique et le min & max, et implémenter la donnée dans l'objet global
*/

// Function qui vérifie si la valeur contient deux caractères ou plus

const checkThatValueIsMoreThanTwoCharAndUpdate = function (val) {

  let currentValue = undefined;

  if (val.length >= 2) {
    console.log('L\'entrée a bien été modifiée')
    currentValue = val;
  } else {
    console.log('L\'entrée ne respecte pas le format et a été définie sur undefined')
  }

  return currentValue

}

// Vérification du prénom :

document.querySelector('#first').addEventListener('change', function (e) {
  let entryValue = e.target.value;
  checkThatValueIsMoreThanTwoCharAndUpdate(entryValue, first)
  userInformations.first = checkThatValueIsMoreThanTwoCharAndUpdate(entryValue)
  console.log(userInformations)
});

// Vérification du nom :

document.querySelector('#last').addEventListener('change', function (e) {
  let entryValue = e.target.value;
  userInformations.last = checkThatValueIsMoreThanTwoCharAndUpdate(entryValue);
  console.log(userInformations)
});

// Vérification de l'adresse email :

document.querySelector('#email').addEventListener('change', function (e) {
  let entryValue = e.target.value;

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(entryValue)) {
    console.log('L\'entrée a bien été modifiée')
    userInformations.email = entryValue;
  } else {
    console.log('L\'entrée dans "email" ne respecte pas le format demandé')
    userInformations.email = undefined;
  }

  console.log(userInformations)
});

// Vérification du nombre de concours participés :

document.querySelector('#quantity').addEventListener('change', function (e) {
  let entryValue = e.target.value;

  if (entryValue >= 0 && entryValue <= 99) {
    console.log('L\'entrée a bien été modifiée')
    userInformations.quantity = entryValue;
  } else {
    console.log('L\'entrée dans "Nombre de tournois participés" ne respecte pas le format demandé')
    userInformations.quantity = undefined;
  }

  console.log(userInformations)
});


// Implémentation des informations des entrées non conditionnées du formulaire - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/*
1 - Implémenter l'entrée "Date de naissance" lorsqu'elle est modifiée
2 - Implémenter l'entrée "Localisation du prochain tournoi" lorsqu'elle est modifiée
3 - Implémenter l'entrée "Acceptation des conditions" lorsqu'elle est modifiée
4 - Implémenter l'entrée "Newsletter" lorsqu'elle est modifiée
*/

// Function qui vérifie si une case est cochée ou non

const isCheckboxCheckedOrNot = function (val) {

  let currentValue = undefined;

  if (val.checked) {
    currentValue = true;
  } else {
    currentValue = false;
  }

  return currentValue

}


// Implémentation de l'entrée "Date de naissance"

document.querySelector('#birthdate').addEventListener('change', function (e) {
  userInformations.birthdate = e.target.value;
  console.log('L\'entrée a bien été modifiée')
  console.log(userInformations)
});

// Implémentation de l'entrée "Localisation du prochain tournoi"

const locationOptions = document.querySelectorAll('input[name="location"]')

locationOptions.forEach(locationOptionUnit => {

  locationOptionUnit.addEventListener('click', function () {

    let currentValue = undefined;

    for (const locationOption of locationOptions) {
      if (locationOption.checked) {
        currentValue = locationOption.value;
        break;
      }
    }

    userInformations.location = currentValue;
    console.log('L\'entrée a bien été modifiée')
    console.log(userInformations)

  })


});



// Changement d'état de l'entrée "Acceptation des CGU"

document.querySelector('#checkbox1').addEventListener('change', function (e) {

  let currentCheckbox = document.querySelector('#checkbox1')

  userInformations.conditions = isCheckboxCheckedOrNot(currentCheckbox)

  console.log('L\'entrée a bien été modifiée')
  console.log(userInformations)

});


// Changement d'état de l'entrée "Newsletter"

document.querySelector('#checkbox2').addEventListener('change', function (e) {

  let currentCheckbox = document.querySelector('#checkbox2')

  userInformations.newsletter = isCheckboxCheckedOrNot(currentCheckbox)

  console.log('L\'entrée a bien été modifiée')
  console.log(userInformations)

});


// Envoie des donnnées de l'objet "User informations" au moment du clic sur submit - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

document.querySelector('#registration-form').addEventListener('submit', function (e) {

  e.preventDefault();

  if (
    userInformations.first &&
    userInformations.last &&
    userInformations.email &&
    userInformations.birthdate &&
    userInformations.quantity != undefined &&
    userInformations.location &&
    userInformations.conditions
  ) {
    console.log('Tout les éléments sont valides : le formulaire est envoyé')
  } else {
    console.log('Un ou plusieurs éléments sont invalides : le formulaire ne peut pas être envoyé')
  }

});






