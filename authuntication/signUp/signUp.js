let userName  = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
let imagePath =  document.querySelector('#file-input')
let submit = document.querySelector('#submit');
let emailFound  = document.querySelector('#emailFound');
let userNameFound = document.querySelector('#userNameFound');
let passwordError = document.querySelector('#passwordError');
let passwordConfirmationError = document.querySelector('#passwordConfirmaionError');
let nameOfUserSign  = document.querySelector('#nameOfUser')
let base64String ;
const fileUploadInput = document.querySelector('.file-uploader');

document.querySelector(".haveAccount").addEventListener("click", function(){
    window.location.replace('../login/login.html')
})

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
submit.onclick = async function() {
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

    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            base64String = e.target.result; // Base64 string of the image

          
    

        };
        reader.readAsDataURL(file); // Convert image to Base64
    } else {
        alert("Please select an image before submitting.");
    }
    let newUser = {
        id: users.length + 1,
        userName: userName.value,
        email: email.value,
        password: password.value,
        imagePath : base64String

    };
    console.log(newUser.imagePath);
    
           
    if (users.find(user => user.userName === userName.value)) {
        userNameFound.textContent = "This User Name already exists";
    } else if (users.find(user => user.email === email.value)) {
        emailFound.textContent = "This Email already exists";
        console.log('Email found');
    } else {
        users.push(newUser);
        localStorage.setItem('user', JSON.stringify(users));
       // nameOfUserSign.textContent = userName.value ;
        const set = new Set(); //get array of random numbers to determine questions
	        while (set.size !== 10) {
		        set.add(Math.floor(Math.random() * 30));
	        }
	       let numbers = [...set];
            localStorage.setItem('numbersArray',JSON.stringify(numbers))

            //upload
           

       window.location.replace('../../welcome/welcome.html');
    }


    console.log(users);
};

//try

// submit.onclick = async function() {
//     emailFound.textContent = "";
//     userNameFound.textContent = "";

//     // Validate inputs
//     const isUserNameValid = validateUserName(userName);
//     const isEmailValid = validateEmail(email);
//     const isPasswordValid = validatePassword(password);
//     const confermedPassword = validatePasswordConfirmation(confirmPassword);

//     // If any validation fails, stop the form submission
//     if (!isUserNameValid || !isEmailValid || !isPasswordValid || !confermedPassword) {
//         return;
//     }

//     const fileInput = document.getElementById('file-input');
//     const file = fileInput.files[0];

//     // Check for image upload
//     if (file) {
//         const reader = new FileReader();
        
//         reader.onload = function(e) {
//             const base64String = e.target.result; // Base64 string of the image

//             // Create the newUser object after the image is processed
//             let newUser = {
//                 id: users.length + 1,
//                 userName: userName.value,
//                 email: email.value,
//                 password: password.value,
//                 imagePath: base64String  // Add image as Base64 string
//             };

//             // Check if username or email already exists
//             if (users.find(user => user.userName === userName.value)) {
//                 userNameFound.textContent = "This User Name already exists";
//             } else if (users.find(user => user.email === email.value)) {
//                 emailFound.textContent = "This Email already exists";
//                 console.log('Email found');
//             } else {
//                 // Add the new user to the users array
//                 users.push(newUser);

//                 // Save users array to localStorage
//                 localStorage.setItem('user', JSON.stringify(users));

//                 // Set random numbers for the exam (optional feature)
//                 const set = new Set(); // get array of random numbers to determine questions
//                 while (set.size !== 10) {
//                     set.add(Math.floor(Math.random() * 30));
//                 }
//                 let numbers = [...set];
//                 localStorage.setItem('numbersArray', JSON.stringify(numbers));

//                 // Redirect to welcome page
//                 window.location.replace('../../welcome/welcome.html');
//             }

//             console.log(users);  // Log the users array for debugging
//         };

//         // Start reading the image file as Base64
//         reader.readAsDataURL(file);
//     } else {
//         alert("Please select an image before submitting.");
//     }
// };



window.history.forward(); 
function noBack() { 
    window.history.forward(); 
}
