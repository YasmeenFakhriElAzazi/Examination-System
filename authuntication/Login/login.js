let loginButton  = document.querySelector('#login-btn')
let userNameNotFound = document.querySelector('#userNameNotFound') ;
let passwordNotFound = document.querySelector('#passwordNotFound') ;
let nameOfUser  = document.querySelector('#nameOfUser')

let usersl ;

if(localStorage.user != null){
    usersl = JSON.parse(localStorage.user) ;
}else{
    usersl = [] ;
}

loginButton.onclick = function(){
    if(users.find(user  => user.userName === userName.value)){
        //nameOfUser.textContent = "fffffff" ;

        if(users.find(user  => user.password === password.value)){
            window.location.href = '../../welcome/welcome.html';
                        
        }
        else{
            passwordNotFound.textContent = "Password does not exist";

        }
        
    }else{
        userNameNotFound.textContent = "This User Name is not exist";
    }
}


window.history.forward(); 
function noBack() { 
    window.history.forward(); 
}

