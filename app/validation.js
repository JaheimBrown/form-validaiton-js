const form = document.querySelector("#form");
const fContainer = document.querySelector(".form-field");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

form.addEventListener("submit", e => {
    e.preventDefault();
    console.log("event ran")

    checkInputs();
})

const checkInputs = () => {
    let nameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const passwordCVal = passwordVal;

    if (nameVal === '') {   
        error(username, "Username cannot be blank.");
    } else if (nameVal.length < 3) {
        error(username, "Must have atleast 3 characters.")
    } else {
        success(username);
    }

    if (emailVal === '') {
        error(email, "Email cannot be blank.");
    } else if (!emailCheck(emailVal)) {
        error(email, "Email is not valid.");
    } else {
        success(email);
    }

    if (passwordVal === '') {   
        error(password, "Password cannot be blank.");
    } else if (passwordVal.length < 6) {
        error(password, "Must be 6 characters or longer.")
    } else {
        success(password);
    }

    if (password2.value === '') {  
        error(password2, "Password cannot be blank.");
    } else if (passwordVal !== password2.value) {  
        error(password2, "Password does not match.");
    }else {
        success(password2);
    }
}

const error = (input, message) => {
    const inpField = input.parentElement;
    const errDescription = inpField.querySelector('span');

    errDescription.innerText = message;

    inpField.className = "form-field err"
}

const success = (input) => {
    const parent = input.parentElement;

    parent.className = "form-field success"
}

const emailCheck = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}