
module.exports = BasicCard;

function BasicCard (front, back) {
  this.front = front;
  this.back = back;
}

var firstPresident = new BasicCard("Who was the first President of the United States?", "George Washington");
