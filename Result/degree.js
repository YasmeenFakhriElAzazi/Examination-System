let score = localStorage.getItem('mark')


let degree = document.querySelector('.degree') ;
let statement = document.querySelector('.statement') ;
let icon = document.querySelector('#icon') ;
let iconDiv = document.querySelector('.true');
let percentage  = Math.round((score  / 10 ) * 100 );

console.log(percentage);


if(percentage < 50 ){
    degree.textContent = `${percentage}%` ;
    icon.className = "fa-regular fa-face-frown";
    iconDiv.style.backgroundColor = 'red'
    statement.textContent = ' Sorry, You do not pass the exam '

}else if(percentage >= 50 && percentage < 90 ){
    degree.textContent = `${percentage}%` ;
    statement.textContent = 'Nice job, you passed!'

}else if(percentage >= 90 && percentage < 100){
    degree.textContent = `${percentage}%` ;
    statement.textContent = 'Excellent'

}else{
    window.location.href = '../Result/fullMark.html'; // Redirect to another page
}
