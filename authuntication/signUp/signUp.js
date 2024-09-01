let userName  =  document.querySelector('#username') ;
let email = document.querySelector('#email') ;
let password = document.querySelector('#password')
let submit = document.querySelector('#submit');
let emailFound  = document.querySelector('#emailFound');
let userNameFound = document.querySelector('#userNameFound') ;

//local dataBase 
let users ;

if(localStorage.user != null){
    users = JSON.parse(localStorage.user) ;
}else{
    users = [] ;
}

//authuntecation
submit.onclick = function(){
    emailFound.textContent = "" ;

    let newUser = {
        id: users.length + 1 ,
        userName : userName.value ,
        email : email.value,
        password: password.value ,

    }

    if(users.find(user  => user.userName === userName.value)){
        userNameFound.textContent = "This User Name is already exist";
    }else if(users.find(user  => user.email === email.value)){
        emailFound.textContent = "This Email is already exist" ;
        console.log('founded'); 
    }
    else{
        users.push(newUser) ;  
        localStorage.setItem('user' , JSON.stringify(users)) 
        window.location.href = '../../welcome/welcome.html';
    

    }
    
console.log(users);



}

            
window.history.forward(); 
function noBack() { 
    window.history.forward(); 
}