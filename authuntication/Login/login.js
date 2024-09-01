// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Perform your login validation here

//     // If login is successful, store a flag in localStorage
//     localStorage.setItem('isLoggedIn', true);

//     // Redirect to the exam page
//     window.location.href = '../../welcome/welcome.html';
// });
 
let loginButton  = document.querySelector('#login-btn')
let userNameNotFound = document.querySelector('#userNameNotFound') ;
let passwordNotFound = document.querySelector('#passwordNotFound') ;


let usersl ;

if(localStorage.user != null){
    usersl = JSON.parse(localStorage.user) ;
}else{
    usersl = [] ;
}

loginButton.onclick = function(){
    if(users.find(user  => user.userName === userName.value)){
        if(users.find(user  => user.password === password.value)){
            window.location.href = '../../welcome/welcome.html';
                        
         
           // console.log('founded');
        }
        else{
            passwordNotFound.textContent = "Password is not exist";

        }
        
    }else{
        userNameNotFound.textContent = "This User Name is not exist";
    }
}


window.history.forward(); 
function noBack() { 
    window.history.forward(); 
}

