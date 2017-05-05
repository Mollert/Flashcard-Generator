
var inquirer = require("inquirer");
var fs = require("node-fs");
var BasicCard = require("./basiccard.js");
var ClozeCard = require("./clozecard.js");
// Chose which Flashcard game you want to play
var choice = [
	{
    type: "list",
    message: "Which flashcard game would you like to play with?",
    choices: ["Basic Flashcard", "Cloze-Deleted Flashcard"],
    name: "command"
	}
];
var count = 0;
var allQuestAnswer = [];
var eachSet = "";
// Grab the user selection, read the Q & A file, loading into an array, and call the correct game
inquirer.prompt(choice).then(function(user) {
	fs.readFile("questions.txt", "utf8", function(error, data) {
		allQuestAnswer = data.split("\n");
		if (user.command === "Basic Flashcard") {
			basicFlashcardMain();
		}
		else {
			clozeFlashcardMain();
		}
	});
});
// Employed the Constuctors, called the Q & A, used timers to give space between q & A
function basicFlashcardMain() {
	if (count < 4) {
		eachSet = new BasicCard(allQuestAnswer[count]);
		console.log("");
		basicFront();
		setTimeout (function(){basicBack();}, 1800);
		count++;
	}
};

function basicFront() {
	console.log(eachSet.front);
};

function basicBack() {
	console.log("");
	console.log(eachSet.back);
	setTimeout (function(){basicFlashcardMain();}, 2800);
};


function clozeFlashcardMain() {
	if (count < 4) {
		eachSet = new ClozeCard(allQuestAnswer[count]);
		console.log("");
		clozePartial();
		setTimeout (function(){clozeDeletion();}, 3000);
		setTimeout (function(){clozeFull();}, 3800);
		count++;
	}
};

function clozePartial() {
	console.log(eachSet.partialText);
};

function clozeDeletion() {
	console.log(eachSet.deletionText);
};

function clozeFull() {
	console.log("");
	console.log(eachSet.fullText);
	setTimeout (function(){clozeFlashcardMain();}, 2600);
};
