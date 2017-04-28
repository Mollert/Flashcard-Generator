
module.exports = ClozeCard;

function ClozeCard (text, cloze) {
  this.cloze = cloze;
  this.partial = partial;
  this.fullText = text;
  this.error = function() {
    console.log("This doesn't work", "oops");
  };
}

var firstPresidentCloze = new ClozeCard("Who was the first President of the United States?", "George Washington");
