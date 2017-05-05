 
function ClozeCard (package) {
	this.package = package;
	this.backEndText = this.package.split(",")[1].slice(4).slice(0, -1);
	this.fullText = (this.package.split(",")[0] + this.backEndText);
	this.deletionText = this.package.split(",")[0];
	this.partialText = ("..." + this.backEndText);
	this.print = function() {
		console.log(this.fullText);
		console.log(this.deletionText);
		console.log(this.partialText);
	};
}

module.exports = ClozeCard;