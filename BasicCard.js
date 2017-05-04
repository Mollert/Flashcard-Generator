
function BasicCard (package) {
	this.package = package;
	this.front = this.package.split(",")[0];
	this.back = this.package.split(",")[1];
	this.print = function() {
		console.log(this.front);
		console.log(this.back);
	};
}

var test = new BasicCard("South Dakota,What is the state were Mount Rushmore is located?");

//console.log(test.front);
//console.log(test.back);
//test.print();

module.exports = BasicCard;
