
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

//			for ( i=0 ; i < questions.length ; i++ ) {
			function basicFlashcard() {
				selectQuestion = questions[count];
				var quest = new BasicCard(selectQuestion);
				console.log(quest.front);
//				console.log(quest.back);
				inquirer.prompt([
					{
						type: "input",
						name: "answer",						
						message: quest.front
					},
				]).then(function (data) {
					console.log("");
					console.log(quest.back);
					count++;
					while (count < 10) {
						basicFlashcard();
					};
				});
			};
			basicFlashcard();			
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








