
var inquirer = require("inquirer");
var fs = require("node-fs");
var lineReader = require("line-reader");
var BasicCard = require("./basiccard.js");
var ClozeCard = require("./clozecard.js");

var choice = [
	{
    type: "list",
    message: "Which flashcard game would you like to play with?",
    choices: ["Basic Flashcard", "Cloze-Deleted Flashcard"],
    name: "command"
	}
];
var count = 0;

inquirer.prompt(choice).then(function(user) {
	fs.readFile("questions.txt", "utf8", function(error, data) {
		var questions = data.split("\n");
		if (user.command === "Basic Flashcard") {
			function basicFlashcard() {
				selectQuestion = questions[count];
				var quest = new BasicCard(selectQuestion);
				console.log(quest.back);
				console.log(quest.front);
//				function holdUp1() {
//					console.log(quest.front);
//				};
//				setTimeout (holdUp1, 500);
//				inquirer.prompt([
//					{
//						type: "input",
//						name: " ",						
//						message: quest.front
//					},
//					]).then(function (answer) {
//						if (user.name === " ") {
//							console.log("How about it?");
//						}
//					});
			};
			while (count < 10) {
				console.log(count);
//				function holdUp2() {
//					console.log(quest.front);
//					basicFlashcard();
//				};
//				setTimeout (holdUp2, 500);
				basicFlashcard();
				count++;					
			};
		}	
		else {
			function clozeFlashcard() {
				selectQuestion = questions[count];
				var quest = new ClozeCard(selectQuestion);
				console.log(quest.partialText);
				console.log(quest.clozeDeletion);
				console.log(quest.fullText);				
			};
			while (count < 10) {
				console.log(count);
//				function holdUp2() {
//					console.log(quest.front);
//				};
//				setTimeout (holdUp2, 3000);
				clozeFlashcard();
				count++;
			};
		}
	});

});








