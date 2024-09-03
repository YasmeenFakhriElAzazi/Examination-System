// let userName  =  document.querySelector('#username') ;
// let email = document.querySelector('#email') ;
// let password = document.querySelector('#password')
// let submit = document.querySelector('#submit');
// let emailFound  = document.querySelector('#emailFound');
// let userNameFound = document.querySelector('#userNameFound') ;

// //local dataBase 
// let users ;

// if(localStorage.user != null){
//     users = JSON.parse(localStorage.user) ;
// }else{
//     users = [] ;
// }

// //authuntecation
// submit.onclick = function(){
//     emailFound.textContent = "" ;

//     let newUser = {
//         id: users.length + 1 ,
//         userName : userName.value ,
//         email : email.value,
//         password: password.value ,

//     }

//     if(users.find(user  => user.userName === userName.value)){
//         userNameFound.textContent = "This User Name is already exist";
//     }else if(users.find(user  => user.email === email.value)){
//         emailFound.textContent = "This Email is already exist" ;
//         console.log('founded'); 
//     }
//     else{
//         users.push(newUser) ;  
//         localStorage.setItem('user' , JSON.stringify(users)) 
//         window.location.href = '../../welcome/welcome.html';
    

//     }
    
// console.log(users);



// }

            
// window.history.forward(); 
// function noBack() { 
//     window.history.forward(); 
// }


let userName  = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');

let submit = document.querySelector('#submit');
let emailFound  = document.querySelector('#emailFound');
let userNameFound = document.querySelector('#userNameFound');
let passwordError = document.querySelector('#passwordError');
let passwordConfirmationError = document.querySelector('#passwordConfirmaionError');

// Local database
let users;

if (localStorage.user != null) {
    users = JSON.parse(localStorage.user);
} else {
    users = [];
}

// Validation functions
function validateUserName(input) {
    if (input.value.trim() === "") {
        userNameFound.textContent = "Username is required";
        return false;
    }
    userNameFound.textContent = "";
    return true;
}

function validateEmail(input) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(input.value)) {
        emailFound.textContent = "Invalid email address";
        return false;
    }
    emailFound.textContent = "";
    return true;
}

function validatePassword(input) {
    if (input.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";
        return false;
    }
    passwordError.textContent = "";
    return true;
}


function validatePasswordConfirmation(input) {
    if(input.value !== password.value){
        passwordConfirmationError.textContent = "You don't Write same password";
        return false;
    }
    passwordConfirmationError.textContent = "";
    return true;
}

// Authentication
submit.onclick = function() {
    emailFound.textContent = "";
    userNameFound.textContent = "";
    // passwordError.textContent = "";
    // passwordConfirmationError.textContent = "" ;

    // Validate inputs
    const isUserNameValid = validateUserName(userName);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const confermedPassword = validatePasswordConfirmation(confirmPassword)  ;

    // If any validation fails, stop the form submission
    if (!isUserNameValid || !isEmailValid || !isPasswordValid || !confermedPassword) {
        return;
    }

    let newUser = {
        id: users.length + 1,
        userName: userName.value,
        email: email.value,
        password: password.value,
    };

    if (users.find(user => user.userName === userName.value)) {
        userNameFound.textContent = "This User Name already exists";
    } else if (users.find(user => user.email === email.value)) {
        emailFound.textContent = "This Email already exists";
        console.log('Email found');
    } else {
        users.push(newUser);
        localStorage.setItem('user', JSON.stringify(users));
        window.location.href = '../../welcome/welcome.html';
    }

    console.log(users);
};

window.history.forward(); 
function noBack() { 
    window.history.forward(); 
}

// // Prevent back navigation
// function noBack() {
//     window.history.replaceState(null, null, window.location.href);
// }

// window.onload = noBack;
// window.onpopstate = function(event) {
//     window.history.replaceState(null, null, window.location.href);
// };

// // Prevent navigation to other URLs
// window.addEventListener('beforeunload', function(event) {
//     event.preventDefault();
//     // Optionally display a message (not always shown in modern browsers)
//     event.returnValue = 'Are you sure you want to leave?';
//     // Redirect to a specific page if the user tries to leave
//     setTimeout(function() {
//         window.location.href = 'your-desired-page.html'; // Replace with your desired URL
//     }, 0);
// });
