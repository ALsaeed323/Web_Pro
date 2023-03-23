const fullNamePattern = /^[A-Za-z]+ [A-Za-z]+$/;
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class FormValidator {
    constructor(form) {
        this.form = form;
        this.inputs = form.querySelectorAll(form.nodeName + " input");
        for (let input of this.inputs) {
            console.log(input.name);
        }
        this.errors = [];
    }

    validate() {
        this.errors = [];
        for (let input of this.inputs) {
            if (input.name === "Email") {
                if (!emailPattern.test(input.value)) {
                    input.nextSibling.innerText = "Email is invalid";
                }
            }
            else if (input.name === "Password") {
                if (input.value.length === 0) {
                    input.nextSibling.innerText = "Password is required";
                }
            }
            else if (input.name === "fullName") {
                if (input.value.length === 0) {
                    input.nextSibling.innerText = "Full name is required";
                }
                else if(!fullNamePattern.test(input.value)) {
                    input.nextSibling.innerText = "Full name is invalid";
                }
            }
        }
    }
    clearErrors() {
        for (let input of this.inputs) {
            input.nextSibling.innerText = "";
        }
    }
}
let form = document.querySelector("#login");
let validator = new FormValidator(form);
form.addEventListener("submit", function (e) {
    console.log("Form submitted");
    e.preventDefault();
    validator.clearErrors();
    let isValid = validator.validate();
    if (isValid) {
        console.log("Form is valid");
    } else {
        console.log("Form is invalid");
        validator.showErrors();
    }
});


let form2 = document.querySelector("#signup");
let valid = new FormValidator(form2);
form2.addEventListener("submit", function (e) {
    console.log("Form submitted");
    e.preventDefault();
    valid.clearErrors();
    let isValid = valid.validate();
    if (isValid) {
        console.log("Form is valid");
    } else {
        console.log("Form is invalid");
        valid.showErrors();
    }
});