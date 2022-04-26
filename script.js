let firstNameInput = document.querySelector('#firstname');
let lastNameInput = document.querySelector('#lastname');
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');
let loginButton = document.querySelector('.login-button')
let loginForm = document.querySelector('.login-form')

firstNameInput.addEventListener('input', function () {
    console.log('in')
    firstNameInput.parentElement.children[0].classList.remove('display-block');
    firstNameInput.parentElement.children[2].classList.remove('display-block');
    firstNameInput.classList.remove('error-border-highlight');
})

lastNameInput.addEventListener('input', function () {
    lastNameInput.parentElement.children[0].classList.remove('display-block');
    lastNameInput.parentElement.children[2].classList.remove('display-block');
    lastNameInput.classList.remove('error-border-highlight');
})


emailInput.addEventListener('input', function () {
    emailInput.parentElement.children[0].classList.remove('display-block');
    emailInput.parentElement.children[2].classList.remove('display-block');
    emailInput.classList.remove('error-border-highlight');
})


passwordInput.addEventListener('input', function () {
    passwordInput.parentElement.children[0].classList.remove('display-block');
    passwordInput.parentElement.children[2].classList.remove('display-block');
    passwordInput.classList.remove('error-border-highlight');
})

loginForm.addEventListener('submit', function(e){

    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!firstNameInput.value || firstNameInput.value.length == 0) {
        firstNameInput.parentElement.children[0].classList.add('display-block');
        firstNameInput.parentElement.children[2].classList.add('display-block');
        firstNameInput.classList.add('error-border-highlight');
    }

    if(!lastNameInput.value || lastNameInput.value.length == 0) {
        lastNameInput.parentElement.children[0].classList.add('display-block');
        lastNameInput.parentElement.children[2].classList.add('display-block');
        lastNameInput.classList.add('error-border-highlight');
    }

    if(!emailInput.value || emailInput.value.length == 0 || !emailInput.value.match(pattern)) {
        emailInput.parentElement.children[0].classList.add('display-block');
        emailInput.parentElement.children[2].classList.add('display-block');
        emailInput.classList.add('error-border-highlight');
    }

    if(!passwordInput.value || passwordInput.value.length == 0) {
        passwordInput.parentElement.children[0].classList.add('display-block');
        passwordInput.parentElement.children[2].classList.add('display-block');
        passwordInput.classList.add('error-border-highlight');
    }

    e.preventDefault();
});


