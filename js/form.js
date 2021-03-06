// ————————‡————————  HTML Targets  ————————‡————————
const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#fullName");
const fullNameErr = document.querySelector("#fullNameErr");
const subject = document.querySelector("#subject");
const subjectErr = document.querySelector("#subjectErr");
const email = document.querySelector("#email");
const emailErr = document.querySelector("#emailErr");
const address = document.querySelector("#address");
const addressErr = document.querySelector("#addressErr");
const header = document.querySelector(".form-title");
const resetForm = document.querySelector(".reset");
const errorDisplay = document.querySelector(".formError");
const button = document.querySelector(".btn");





// ————————‡————————  FORM Validation  ————————‡————————
function formVisa(event) {
  event.preventDefault();

  if (checkRange(fullName.value, 1)) {
    fullNameErr.style.display = "none";
  } else {
    errorDisplay.innerHTML = `
    <h4>Your name is required</h4>
    `;
  }

  if (phoneVisa(subject.value)) {
    subjectErr.style.display = "none";
  } else {
    errorDisplay.innerHTML = `
    <h4>Enter a valid phone number</h4>
    `;
  }

  if (emailVisa(email.value)) {
    emailErr.style.display = "none";
  } else {
    errorDisplay.innerHTML = `
    <h4>Enter a valid E-mail</h4>
    `;
  }

  if (checkRange(address.value, 20)) {
    addressErr.style.display = "none";
  } else {
    errorDisplay.innerHTML = `
    <h4>Enter a valid address</h4>
    `;
  }
  
  if (checkRange(fullName.value, 1) && phoneVisa(subject.value) && emailVisa(email.value) && checkRange(address.value, 20)) {
    header.innerHTML = `<h2 style="color: var(--clr-white); font-size: 1rem;">Your message has been sent!</h2>`; 
    form.reset();
  }
}
form.addEventListener("submit", formVisa);

// ————————————————————————————————————— How can I make this below more succinct
function clearForm(event) {

  fullNameErr.innerHTML = "";
  subjectErr.innerHTML = "";
  emailErr.innerHTML = "";
  addressErr.innerHTML = "";
}

function eventListener() {
  if (clearForm) {
    form.reset();
  }
}
form.addEventListener("reset", clearForm);
// ————————————————————————————————————— How can I make this above more succinct

function checkRange(value, range) {
  if (value.trim().length > range) {
    return true;
  } else {
    return false;
  }
}

function emailVisa(email) {
  const regEx = /\S+@\S+\.\S+/;
  const typeFit = regEx.test(email);
  return typeFit;
}

function phoneVisa(subject) {
  const regEx = /^\d+$/;
  const typeFit = regEx.test(subject);
  return typeFit;
}
