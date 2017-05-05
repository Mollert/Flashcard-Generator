
function BasicCard (package) {
	this.package = package;
	this.front = this.package.split(",")[0];
	this.back = this.package.split(",")[1];
	this.print = function() {
		console.log(this.front);
		console.log(this.back);
	};
}

module.exports = BasicCard;