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
const modalCloseBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event

modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
  resetUserInformations();
}

// Informations de l'utilisateur

const userInformations = {
  first: undefined,
  last: undefined,
  email: undefined,
  birthdate: undefined,
  quantity: 0,
  location: undefined,
  conditions: false,
  newsletter: false,
}

// Ajout de l'erreur si la valeur de l'entrée est fausse

const displayError = (elt) => {

  const targetedElementParent = document.getElementById(elt).parentElement
  targetedElementParent.setAttribute('data-error-visible', 'true')

}

// Suprression de l'erreur si la valeur de l'entrée est valide

const hideError = (elt) => {

  const targetedElementParent = document.getElementById(elt).parentElement
  targetedElementParent.setAttribute('data-error-visible', 'false')

}

// Implémentation et vérification des informations des entrées conditionnées du formulaire (Vérification en temps réel) - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/* 
1 - Créer la fonction qui vérifie si la valeur contient deux caractères ou plus
2 - Vérifier les entrées "Nom" et "Prénom" pour qu'elles fassent plus de deux caractères et implémenter ces données dans l'objet global
3 - Vérifier l'entrée "Adresse email" pour qu'elle respecte le format d'une adresse email et implémenter la donnée dans l'objet global
4 - Vérifier l'entrée "Nombre de concours participé" pour qu'elle respecte le format numérique et le min & max, et implémenter la donnée dans l'objet global
*/

// Function qui vérifie si la valeur contient deux caractères ou plus

const checkThatValueIsMoreThanTwoCharAndUpdate = function (val, id) {

  let currentValue = undefined;

  if (val.length >= 2) {
    hideError(id)
    currentValue = val;
  } else {
    displayError(id)
  }

  return currentValue

}

// Vérification du prénom :

document.querySelector('#first').addEventListener('change', function (e) {
  let entryValue = e.target.value;
  let inputId = e.target.id
  userInformations.first = checkThatValueIsMoreThanTwoCharAndUpdate(entryValue, inputId)
  console.log(userInformations)
});

// Vérification du nom :

document.querySelector('#last').addEventListener('change', function (e) {
  let entryValue = e.target.value;
  let inputId = e.target.id
  userInformations.last = checkThatValueIsMoreThanTwoCharAndUpdate(entryValue, inputId);
  console.log(userInformations)
});

// Vérification de l'adresse email :

document.querySelector('#email').addEventListener('change', function (e) {
  let entryValue = e.target.value;
  let inputId = e.target.id

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(entryValue)) {
    hideError(inputId)
    userInformations.email = entryValue;
  } else {
    displayError(inputId)
    userInformations.email = undefined;
  }

  console.log(userInformations)
});

// Vérification du nombre de concours participés :

document.querySelector('#quantity').addEventListener('change', function (e) {
  let entryValue = e.target.value;
  let inputId = e.target.id

  if (entryValue >= 0 && entryValue <= 99 && Number.isInteger(Number.parseInt(entryValue))) {
    hideError(inputId)
    userInformations.quantity = entryValue;
  } else {
    displayError(inputId)
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
  let inputId = e.target.id
  hideError(inputId)
  console.log(userInformations)
});

// Implémentation de l'entrée "Localisation du prochain tournoi"

const locationOptions = document.querySelectorAll('input[name="location"]')

locationOptions.forEach(locationOptionUnit => {

  locationOptionUnit.addEventListener('click', function (e) {

    let currentValue = undefined;
    let inputId = e.target.id

    for (const locationOption of locationOptions) {
      if (locationOption.checked) {
        currentValue = locationOption.value;
        break;
      }
    }

    userInformations.location = currentValue;
    hideError(inputId)
    console.log(userInformations)

  })


});

// Changement d'état de l'entrée "Acceptation des CGU"

document.querySelector('#checkbox1').addEventListener('change', function (e) {

  let currentCheckbox = document.querySelector('#checkbox1')
  let inputId = e.target.id

  userInformations.conditions = isCheckboxCheckedOrNot(currentCheckbox)
  hideError(inputId)
  console.log(userInformations)

});

// Changement d'état de l'entrée "Newsletter"

document.querySelector('#checkbox2').addEventListener('change', function (e) {

  let currentCheckbox = document.querySelector('#checkbox2')

  userInformations.newsletter = isCheckboxCheckedOrNot(currentCheckbox)
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
    document.querySelector('#form-modal').style.display = 'none'
    document.querySelector('#thanks-modal').style.display = 'flex'
    isFormSubmitted = true;

  } else {
    console.log('Un ou plusieurs éléments sont invalides : le formulaire ne peut pas être envoyé')
    checkValuesAndDisplayMessage()
  }

});

// Si le formulaire est invalide, lancer la fonction de vérification - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const checkValuesAndDisplayMessage = () => {

  let firstId = document.querySelector('#first').id;
  let lastId = document.querySelector('#last').id;
  let emailId = document.querySelector('#email').id;
  let birthdateId = document.querySelector('#birthdate').id;
  let localisationId = document.querySelector('#location1').id;
  let conditionsId = document.querySelector('#checkbox1').id;

  userInformations.first ? hideError(firstId) : displayError(firstId);
  userInformations.last ? hideError(lastId) : displayError(lastId);
  userInformations.email ? hideError(emailId) : displayError(emailId);
  userInformations.birthdate ? hideError(birthdateId) : displayError(birthdateId);
  userInformations.location ? hideError(localisationId) : displayError(localisationId);
  userInformations.conditions ? hideError(conditionsId) : displayError(conditionsId);

}

// Reset des informations lorsqu'un formulaire est envoyé  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let isFormSubmitted = false;

let resetUserInformations = function () {

  if (isFormSubmitted) {  

    // Reset de l'objet userInformations :

    userInformations.first = undefined;
    userInformations.last = undefined;
    userInformations.email = undefined;
    userInformations.birthdate = undefined;
    userInformations.quantity = 0;
    userInformations.location = undefined;
    userInformations.conditions = false;
    userInformations.newsletter = false;

    // Reset des styles des popups :

    document.querySelector('#thanks-modal').style.display = 'none'
    document.querySelector('#form-modal').style.display = 'block'

    // Reset des données du formulaire et de l'objet userInformations :

    document.querySelector("#registration-form").reset()

  }

}





