 
function ClozeCard (package) {
	this.package = package;
	this.backEndText = this.package.split(",")[1].slice(4);
	this.fullText = (this.package.split(",")[0] + this.backEndText);
	this.clozeDeletion = this.package.split(",")[0];
	this.partialText = ("..." + this.backEndText);
	this.print = function() {
		console.log(this.fullText);
		console.log(this.clozeDeletion);
		console.log(this.partialText);
	};
}

var test = new ClozeCard("John Glenn,What was the name of the first American in space?");

//console.log(test.fullText);
//console.log(test.clozeDeletion);
//console.log(test.partialText);
//test.print();

module.exports = ClozeCard;

