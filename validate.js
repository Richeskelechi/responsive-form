const form = document.querySelector('#registerForm');
let firstFilled = false
let lastFilled = false
let emailFilled = false
let passwordFilled = false
// listen for submit even
form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('firstImg').style.display = 'none';
    document.getElementById('lastImg').style.display = 'none';
    document.getElementById('emailImg').style.display = 'none';
    document.getElementById('passImg').style.display = 'none';
    document.getElementById('firstErr').innerHTML = '';
    document.getElementById('lastErr').innerHTML = '';
    document.getElementById('emailErr').innerHTML = '';
    document.getElementById('passErr').innerHTML = '';
    // getting the value of each input field 
    let first = document.querySelector('#first').value;
    let last = document.querySelector('#last').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // // checking to ensure that all inputs are filled before submitting the form 
    if (first == "") {
        document.querySelector('#firstErr').innerHTML = 'First Name cannot be empty';
        document.querySelector('#firstImg').style.display = 'inline-block';
        firstFilled = false;
    } else {
        firstFilled = true
    }
    if (last == "") {
        document.querySelector('#lastErr').innerHTML = 'Last Name cannot be empty';
        document.querySelector('#lastImg').style.display = 'inline-block';
        lastFilled = false;
    } else {
        lastFilled = true
    }
    if (email == "") {
        document.querySelector('#emailErr').innerHTML = 'Email Address cannot be empty';
        document.querySelector('#emailImg').style.display = 'inline-block';
        emailFilled = false
    } else if (email.match(mailformat)) {
        emailFilled = true
    }
    else {
        document.querySelector('#emailErr').innerHTML = 'Looks like this is not an email';
        document.querySelector('#emailImg').style.display = 'inline-block';
        emailFilled = false
    }
    if (password == "") {
        document.querySelector('#passErr').innerHTML = 'Password cannot be empty';
        document.querySelector('#passImg').style.display = 'inline-block';
        passwordFilled = false
    } else {
        passwordFilled = true
    }

    if (firstFilled && lastFilled && emailFilled && passwordFilled) {
        alert('Form Submitted');
    }
})