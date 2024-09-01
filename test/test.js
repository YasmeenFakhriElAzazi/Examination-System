// btn = document.querySelector("button")
// let flags = [1, 2, 11, 4, 5];
// btn.addEventListener("click", function(){
// 	if (flags.includes(1)){
// 		ind = flags.indexOf(4);
//         console.log(ind);
// 	}
// })




let flags = []
const flag = (h) => {
	const flaggedQues = document.querySelector(".ques-flagged");
	const card = document.createElement("div");
	card.classList.add("card");
	card.innerHTML = `
	<h3>Question No.${questions[h].id}</h3>`
	flaggedQues.appendChild(card)
	}

flagBtn.addEventListener("click", function(){
	if (flags.includes(j+1)){
		index = flags.indexOf(j+1);
		delete flags[index];
		console.log(flags);
		flag()
	}else{
		flags.push(j+1);
		console.log(flags);
		flag(j)
	}
})