"use strict";
let buttonGueset = document.querySelector("#buttonguest");
let GuestForm = document.querySelector(".UserGuestForm");
let GuestText = GuestForm.querySelector(".textarea");
let GuestNote = document.querySelector(".guestNote");
let usernameInput = document.getElementById("userName");
// кнопка ты пидор
let tiPidorClickHandler = function () {
  alert("ti pidor");
};
{
  //buttonGueset.addEventListener("click", tiPidorClickHandler);
  // кнопка добавления текста на страницу
  buttonGueset.addEventListener("click", function () {
    if (GuestText.value !== "") {
      GuestNote.insertAdjacentText(
        "beforeend",
        "Гражданин по имени: " +
          usernameInput.value +
          " Решил нам сказать: " +
          GuestText.value +
          " "
      );
    }
  });
}
{
  //валидация форм в реальном времени
  /* ----------------------------
	CustomValidation prototype
	- Keeps track of the list of invalidity messages for this input
	- Keeps track of what validity checks need to be performed for this input
	- Performs the validity checks and sends feedback to the front end
---------------------------- */
  function CustomValidation(input) {
    this.invalidities = [];
    this.validityChecks = [];

    //add reference to the input node
    this.inputNode = input;

    //trigger method to attach the listener
    this.registerListener();
  }
  CustomValidation.prototype = {
    addInvalidity: function (message) {
      this.invalidities.push(message);
    },
    getInvalidities: function () {
      return this.invalidities.join(". \n");
    },
    checkValidity: function (input) {
      for (let i = 0; i < this.validityChecks.length; i += 1) {
        let isInvalid = this.validityChecks[i].isInvalid(input);
        if (isInvalid) {
          this.addInvalidity(this.validityChecks[i].invalidityMessage);
        }

        let requirementElement = this.validityChecks[i].element;

        if (requirementElement) {
          if (isInvalid) {
            requirementElement.classList.add("invalid");
            requirementElement.classList.remove("valid");
          } else {
            requirementElement.classList.remove("invalid");
            requirementElement.classList.add("valid");
          }
        } // end if requirementElement
      } // end for
    },
    checkInput: function () {
      // checkInput now encapsulated

      this.inputNode.CustomValidation.invalidities = [];
      this.checkValidity(this.inputNode);

      if (
        this.inputNode.CustomValidation.invalidities.length === 0 &&
        this.inputNode.value !== ""
      ) {
        this.inputNode.setCustomValidity("");
      } else {
        let message = this.inputNode.CustomValidation.getInvalidities();
        this.inputNode.setCustomValidity(message);
      }
    },
    registerListener: function () {
      //register the listener here

      var CustomValidation = this;

      this.inputNode.addEventListener("keyup", function () {
        CustomValidation.checkInput();
      });
    },
  };

  /* ----------------------------
	Validity Checks
	The arrays of validity checks for each input
	Comprised of three things
		1. isInvalid() - the function to determine if the input fulfills a particular requirement
		2. invalidityMessage - the error message to display if the field is invalid
		3. element - The element that states the requirement
---------------------------- */

  let usernameValidityChecks = [
    {
      isInvalid: function (input) {
        return input.value.length < 3;
      },
      invalidityMessage: "Really? your name contains less than three letters?",
      element: document.querySelector(
        'label[for="userName"] .input-requirements li:nth-child(1)'
      ),
    },
    {
      isInvalid: function (input) {
        let illegalCharacters = input.value.match(/[^а-яА-ЯёЁa-zA-Z0-9]/g);
        return illegalCharacters ? true : false;
      },
      invalidityMessage: "You have a robot name, enter human name.",
      element: document.querySelector(
        'label[for="userName"] .input-requirements li:nth-child(2)'
      ),
    },
  ];

  let passwordValidityChecks = [
    {
      isInvalid: function (input) {
        return (input.value.length < 6) | (input.value.length > 25);
      },
      invalidityMessage:
        "This input needs to be between 6 and 25 characters. Safety First.",
      element: document.querySelector(
        'label[for="userPass"] .input-requirements li:nth-child(1)'
      ),
    },
    {
      isInvalid: function (input) {
        return !input.value.match(/[0-9]/g);
      },
      invalidityMessage: "At least 1 number is required. Safety first.",
      element: document.querySelector(
        'label[for="userPass"] .input-requirements li:nth-child(2)'
      ),
    },
    {
      isInvalid: function (input) {
        return !input.value.match(/[a-z]/g);
      },
      invalidityMessage:
        "At least 1 lowercase letter is required. Safety first.",
      element: document.querySelector(
        'label[for="userPass"] .input-requirements li:nth-child(3)'
      ),
    },
    {
      isInvalid: function (input) {
        return !input.value.match(/[A-Z]/g);
      },
      invalidityMessage: "At least 1 uppercase letter is required",
      element: document.querySelector(
        'label[for="userPass"] .input-requirements li:nth-child(4)'
      ),
    },
    {
      isInvalid: function (input) {
        return !input.value.match(/[\!\@\#\$\%\^\&\*]/g);
      },
      invalidityMessage:
        "You need one of the required special characters. Safety first.",
      element: document.querySelector(
        'label[for="userPass"] .input-requirements li:nth-child(5)'
      ),
    },
  ];
  let emailValidityChecks = [
    {
      isInvalid: function (input) {
        return !input.value.match(
          /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/g
        );
      },
      invalidityMessage: "Really? i don't think this is e-mail",
      element: document.querySelector(
        'label[for="userEmail"] .input-requirements li:nth-child(1)'
      ),
    },
  ];
  let passwordRepeatValidityChecks = [
    {
      isInvalid: function () {
        return passwordRepeatInput.value != passwordInput.value;
      },
      invalidityMessage: "This password needs to match the first one",
      element: document.querySelector(
        'label[for="pass-repeat"] .input-requirements li:nth-child(1)'
      ),
    },
  ];
  /* ----------------------------
	Setup CustomValidation
	Setup the CustomValidation prototype for each input
	Also sets which array of validity checks to use for that input
---------------------------- */

  let usernameInput = document.getElementById("userName");
  let passwordInput = document.getElementById("userPass");
  let passwordRepeatInput = document.getElementById("pass-repeat");
  let userEmailInput = document.getElementById("userEmail");

  usernameInput.CustomValidation = new CustomValidation(usernameInput);
  usernameInput.CustomValidation.validityChecks = usernameValidityChecks;

  passwordInput.CustomValidation = new CustomValidation(passwordInput);
  passwordInput.CustomValidation.validityChecks = passwordValidityChecks;

  passwordRepeatInput.CustomValidation = new CustomValidation(
    passwordRepeatInput
  );
  passwordRepeatInput.CustomValidation.validityChecks = passwordRepeatValidityChecks;

  userEmailInput.CustomValidation = new CustomValidation(userEmailInput);
  userEmailInput.CustomValidation.validityChecks = emailValidityChecks;

  /* ----------------------------
	Event Listeners
---------------------------- */

  let inputs = document.querySelectorAll('input:not([type="submit"])');

  let submit = document.querySelector('input[type="submit"]');

  function validate() {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].CustomValidation.checkInput();
    }
  }

  submit.addEventListener("click", validate);
  GuestForm.addEventListener("submit", validate);
}
//buttonGueset.removeEventListener("click", tiPidorfunction);
