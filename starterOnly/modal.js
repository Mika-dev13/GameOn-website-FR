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
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");
const tabLocation = document.forms.reserve.location;
const closeThanksModal = document.querySelector(".thanks-button");
const thanksModal = document.querySelector(".thanks-container");
const form = document.querySelector("#reserveForm");

// launch modal form
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
  modalbg.style.display = "block";
  document.body.classList.add("stop_scrolling")
}));

//close modal form
closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
  document.body.classList.remove("stop_scrolling")
});

// launch thanks modal
function launchThanksModal() {
  thanksModal.style.display = "block";
  document.body.classList.add("stop_scrolling")
};

//close thanks modal
closeThanksModal.addEventListener('click', () => {
  thanksModal.style.display = "none";
  document.body.classList.remove("stop_scrolling")
});

// *************** First name validation ***********

//Ecoute de la modification du first name
form.first.addEventListener("input", function() {
  validFirstName(this);
});

const validFirstName = function(inputFirstName) {
  //Verifcation au moins 2 caractères
  if(inputFirstName.value.length < 2) {
    formData[0].dataset.errorVisible = "true";
    return false;
  } else {
    formData[0].dataset.errorVisible = "false";
    return true;
  }
};

// *************** Last name validation ***********

//Ecoute de la modification du last name
form.last.addEventListener('input', function() {
  validLastName(this);
});

const validLastName = function(inputLastName) {
  //Vérification au moins 2 caractères
  if(inputLastName.value.length < 2) {
    formData[1].dataset.errorVisible = "true";
    return false;
  } else {
    formData[1].dataset.errorVisible = "false";
    return true;
  }
};

// *************** Email validation ***********

//Ecoute de la modification de l'email
form.email.addEventListener('input', function () {
  validEmail(this);
})

  const validEmail = function (inputEmail) {
  //Création de la reg exp pour l'email
  let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
  //Test de l'expresssion régulière
  if(!emailRegExp.test(inputEmail.value)) {
    formData[2].dataset.errorVisible = "true";
    return false;
  } else {
    formData[2].dataset.errorVisible = "false";
    return true;
  }
};

// *************** Birthdate validation ***********

//Ecoute de la modification du birthdate
form.birthdate.addEventListener('input', function() {
  validBirthdate(this);
})

const validBirthdate = function (inputBirthdate) {
  //Vérication du remplissage de la birthdate
  if(!inputBirthdate.value) {
    formData[3].dataset.errorVisible = "true";
    return false;
  } else {
    formData[3].dataset.errorVisible = "false";
    return true;
  }
};

//*************** Quantity validation ***********

//Ecoute de la modification de quantity
form.quantity.addEventListener("input", function () {
  validQuantity(this);
});

const validQuantity = function (inputQuantity) {
  //Vérificaition du remplissage de quantity
  if(!/^[0-9]+$/.test(inputQuantity.value)) {
    formData[4].dataset.errorVisible = "true";
    return false;
  } else {
    formData[4].dataset.errorVisible = "false";
    return true;
  }
};


//****************** Radio validation ***************

function validSelectedLocation() {
  //Récupération du nombre de location
  let nbLocations = tabLocation.length;
  //Booléen sélection de location
  let locationSelection = false;
  
  //Récupération des locations proposées dans le tableau
  if(nbLocations > 0) {
    //Parcours des locations proposées
    let i = 0;
    while(i < nbLocations) {
      //Test de la location sélectionnée
      if(tabLocation[i].checked) {
        locationSelection = true;
      }
      i++
    }
  }
  if(!locationSelection) {
    formData[5].dataset.errorVisible = "true";
    return false;
  } else {
    formData[5].dataset.errorVisible = "false";
    return true;
  }
    
};

//************************ Checkbox validation *********************** */
function validCgv() {
  let check1 = document.getElementById("checkbox1");
    if(check1.checked == false) {
      formData[6].dataset.errorVisible = "true";
      return false;
    } else {
      formData[6].dataset.errorVisible = "false";
      return true;
    } 
};

//********************* Validation du formulaire ********************* */
function validate() {
  
  if(
    validFirstName(form.first)
    && validLastName(form.last)
    && validEmail(form.email) 
    && validBirthdate(form.birthdate) 
    && validQuantity(form.quantity) 
    && validSelectedLocation()
    && validCgv()
  ) {
    return true;
  } 
    return false; 
};

if(location.href.includes('?')) {
  launchThanksModal()
}
