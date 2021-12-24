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

let form = document.querySelector("#reserveForm");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
document.querySelector(".close")
        .addEventListener("click", () => modalbg.style.display = "none");

// Email validation

form.email.addEventListener("change", function () {
  validEmail(this);
});

const validEmail = function (e) {
  let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
 
  let validEmailText = document.querySelector(".validEmailText");

  if(emailRegExp.test(e.value)) {
    validEmailText.textContent = "Adresse valide";
    validEmailText.style.color = "green"; 
    validEmailText.style.fontSize = "14px"; 
  } else {
    validEmailText.textContent = "Adresse non valide";
    validEmailText.style.color = "red"; 
    validEmailText.style.fontSize = "14px"; 
  }
};






