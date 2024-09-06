let startBtn = document.querySelector(".start")

startBtn.addEventListener("click", function(){	
    localStorage.setItem('timeNow',JSON.stringify(Date.now()))
    window.location.replace('../question/question.html')
})