const questions = [
	{
		"id": 1,
		"question": "What is the chemical symbol for Gold?",
		"firstChoice": "Au",
		"secondChoice": "Ag",
		"thirdChoice": "Pb",
		"fourthChoice": "Fe",
		"correctAnswer": "Au"
	},
	{
		"id": 2,
		"question": "What is the symbol for Potassium?",
		"firstChoice": "K",
		"secondChoice": "P",
		"thirdChoice": "Pt",
		"fourthChoice": "Po",
		"correctAnswer": "K"
	},
	{
		"id": 3,
		"question": "What is the chemical symbol for Silver?",
		"firstChoice": "Ag",
		"secondChoice": "Au",
		"thirdChoice": "Si",
		"fourthChoice": "S",
		"correctAnswer": "Ag"
	},
	{
		"id": 4,
		"question": "Which element has the symbol 'O'?",
		"firstChoice": "Oxygen",
		"secondChoice": "Gold",
		"thirdChoice": "Osmium",
		"fourthChoice": "Oganesson",
		"correctAnswer": "Oxygen"
	},
	{
		"id": 5,
		"question": "What is the chemical symbol for Sodium?",
		"firstChoice": "Na",
		"secondChoice": "S",
		"thirdChoice": "So",
		"fourthChoice": "Sd",
		"correctAnswer": "Na"
	},
	{
		"id": 6,
		"question": "Which element is represented by the symbol 'Fe'?",
		"firstChoice": "Iron",
		"secondChoice": "Fluorine",
		"thirdChoice": "Francium",
		"fourthChoice": "Fermium",
		"correctAnswer": "Iron"
	},
	{
		"id": 7,
		"question": "What is the symbol for Chlorine?",
		"firstChoice": "Cl",
		"secondChoice": "C",
		"thirdChoice": "Ch",
		"fourthChoice": "Cr",
		"correctAnswer": "Cl"
	},
	{
		"id": 8,
		"question": "Which element has the symbol 'N'?",
		"firstChoice": "Nitrogen",
		"secondChoice": "Neon",
		"thirdChoice": "Nickel",
		"fourthChoice": "Neptunium",
		"correctAnswer": "Nitrogen"
	},
	{
		"id": 9,
		"question": "What is the chemical symbol for Calcium?",
		"firstChoice": "Ca",
		"secondChoice": "Cl",
		"thirdChoice": "Cd",
		"fourthChoice": "C",
		"correctAnswer": "Ca"
	},
	{
		"id": 10,
		"question": "What is the symbol for Helium?",
		"firstChoice": "He",
		"secondChoice": "H",
		"thirdChoice": "Ho",
		"fourthChoice": "Hg",
		"correctAnswer": "He"
	},
	{
		"id": 11,
		"question": "Which element has the symbol 'Pb'?",
		"firstChoice": "Lead",
		"secondChoice": "Platinum",
		"thirdChoice": "Palladium",
		"fourthChoice": "Phosphorus",
		"correctAnswer": "Lead"
	},
	{
		"id": 12,
		"question": "What is the chemical symbol for Zinc?",
		"firstChoice": "Zn",
		"secondChoice": "Z",
		"thirdChoice": "Ze",
		"fourthChoice": "Zr",
		"correctAnswer": "Zn"
	},
	{
		"id": 13,
		"question": "Which element is represented by the symbol 'Cu'?",
		"firstChoice": "Copper",
		"secondChoice": "Carbon",
		"thirdChoice": "Cobalt",
		"fourthChoice": "Chromium",
		"correctAnswer": "Copper"
	},
	{
		"id": 14,
		"question": "What is the chemical symbol for Mercury?",
		"firstChoice": "Hg",
		"secondChoice": "Mr",
		"thirdChoice": "Me",
		"fourthChoice": "Mh",
		"correctAnswer": "Hg"
	},
	{
		"id": 15,
		"question": "What is the symbol for Argon?",
		"firstChoice": "Ar",
		"secondChoice": "Ag",
		"thirdChoice": "Al",
		"fourthChoice": "Au",
		"correctAnswer": "Ar"
	},
	{
		"id": 16,
		"question": "Which element has the symbol 'S'?",
		"firstChoice": "Sulfur",
		"secondChoice": "Silicon",
		"thirdChoice": "Sodium",
		"fourthChoice": "Strontium",
		"correctAnswer": "Sulfur"
	},
	{
		"id": 17,
		"question": "What is the chemical symbol for Iodine?",
		"firstChoice": "I",
		"secondChoice": "Ir",
		"thirdChoice": "Id",
		"fourthChoice": "In",
		"correctAnswer": "I"
	},
	{
		"id": 18,
		"question": "Which element is represented by the symbol 'K'?",
		"firstChoice": "Potassium",
		"secondChoice": "Phosphorus",
		"thirdChoice": "Krypton",
		"fourthChoice": "Kali",
		"correctAnswer": "Potassium"
	},
	{
		"id": 19,
		"question": "What is the chemical symbol for Nitrogen?",
		"firstChoice": "N",
		"secondChoice": "Ni",
		"thirdChoice": "Nd",
		"fourthChoice": "Ne",
		"correctAnswer": "N"
	},
	{
		"id": 20,
		"question": "What is the symbol for Barium?",
		"firstChoice": "Ba",
		"secondChoice": "Br",
		"thirdChoice": "Bi",
		"fourthChoice": "B",
		"correctAnswer": "Ba"
	},
	{
		"id": 21,
		"question": "Which element has the symbol 'Tl'?",
		"firstChoice": "Thallium",
		"secondChoice": "Titanium",
		"thirdChoice": "Tellurium",
		"fourthChoice": "Tungsten",
		"correctAnswer": "Thallium"
	},
	{
		"id": 22,
		"question": "What is the chemical symbol for Manganese?",
		"firstChoice": "Mn",
		"secondChoice": "Mg",
		"thirdChoice": "M",
		"fourthChoice": "Mo",
		"correctAnswer": "Mn"
	},
	{
		"id": 23,
		"question": "What is the symbol for Platinum?",
		"firstChoice": "Pt",
		"secondChoice": "Pl",
		"thirdChoice": "Pa",
		"fourthChoice": "P",
		"correctAnswer": "Pt"
	},
	{
		"id": 24,
		"question": "Which element is represented by the symbol 'Rh'?",
		"firstChoice": "Rhodium",
		"secondChoice": "Radon",
		"thirdChoice": "Ruthenium",
		"fourthChoice": "Rubidium",
		"correctAnswer": "Rhodium"
	},
	{
		"id": 25,
		"question": "What is the chemical symbol for Silicon?",
		"firstChoice": "Si",
		"secondChoice": "S",
		"thirdChoice": "Sc",
		"fourthChoice": "Sl",
		"correctAnswer": "Si"
	},
	{
		"id": 26,
		"question": "What is the symbol for Strontium?",
		"firstChoice": "Sr",
		"secondChoice": "St",
		"thirdChoice": "S",
		"fourthChoice": "Sm",
		"correctAnswer": "Sr"
	},
	{
		"id": 27,
		"question": "Which element has the symbol 'Co'?",
		"firstChoice": "Cobalt",
		"secondChoice": "Carbon",
		"thirdChoice": "Copper",
		"fourthChoice": "Chromium",
		"correctAnswer": "Cobalt"
	},
	{
		"id": 28,
		"question": "What is the chemical symbol for Beryllium?",
		"firstChoice": "Be",
		"secondChoice": "B",
		"thirdChoice": "Br",
		"fourthChoice": "Bl",
		"correctAnswer": "Be"
	},
	{
		"id": 29,
		"question": "What is the symbol for Radon?",
		"firstChoice": "Rn",
		"secondChoice": "Ra",
		"thirdChoice": "Rd",
		"fourthChoice": "Re",
		"correctAnswer": "Rn"
	},
	{
		"id": 30,
		"question": "Which element is represented by the symbol 'Ti'?",
		"firstChoice": "Titanium",
		"secondChoice": "Tungsten",
		"thirdChoice": "Tellurium",
		"fourthChoice": "Thallium",
		"correctAnswer": "Titanium"
	}
];
let numbers;
(function () {
	const set = new Set();
	while (set.size !== 10) {
		set.add(Math.floor(Math.random() * 30) + 1);
	}
	numbers = [...set];
	console.log(numbers);
})();

let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let flagBtn = document.querySelector(".toggle");
let queNum = document.querySelector(".que-num")
let que = document.querySelector(".que");
let ansA = document.querySelector(".ansA")
let ansB = document.querySelector(".ansB")
let ansC = document.querySelector(".ansC")
let ansD = document.querySelector(".ansD")


function page(i) {
	queNum.textContent = `Question No.${j + 1}`
	que.textContent = `${questions[numbers[i]].question}`
	ansA.textContent = `${questions[numbers[i]].firstChoice}`
	ansB.textContent = `${questions[numbers[i]].secondChoice}`
	ansC.textContent = `${questions[numbers[i]].thirdChoice}`
	ansD.textContent = `${questions[numbers[i]].fourthChoice}`
};

let j = 0;
page(j);
nextBtn.addEventListener("click", function () {
	if (j < 9) {
		j++;
		page(j);
	}
})
prevBtn.addEventListener("click", function () {
	if (j > 0) {
		j--;
		page(j);
	}
})

let flags = []
const flaggedQues = document.querySelector(".ques-flagged");
function addFlag (h){
	const card = document.createElement("div");
	card.classList.add("card");
	card.onclick = function() {getPage(h)};
	card.classList.add(`in${h}`)
	card.innerHTML = `
	<h3>Question No.${questions[h].id}</h3>`
	flaggedQues.appendChild(card)
	}

function removeFlag(y){
	document.querySelector(`.in${y}`).remove();
}

flagBtn.addEventListener("click", function(){
	if (flags.includes(j+1)){
		index = flags.indexOf(j+1);
		removeFlag(j)
		delete flags[index];
		console.log(flags);
	}else{
		flags.push(j+1);
		console.log(flags);
		addFlag(j)
	}
})

function getPage (g){
	j = g
	page(j);
}

// let clock = document.querySelector(".countdown")
// let minsTime = 10;
// let currentTime = Date.parse(new Date());
// let deadline = new Date(currentTime + minsTime * 60 * 1000)
// console.log(deadline)

// function remainTime() {

// }
// function timer() {

// }