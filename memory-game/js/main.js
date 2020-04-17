console.log("Up and running!");

let cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png"
},
{
rank: 'king',
suit: 'hearts',
cardImage: "images/king-of-hearts.png"
},
{
rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png"
}];
let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			console.log("You found a match!");
		} else {
			alert("Sorry, try again.");
			console.log("Sorry try again.");
		}
	}	
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId].rank);

	checkForMatch();
}

flipCard(0);

flipCard(2);

console.log(cards[0].cardImage);
console.log(cards[0].suit);
console.log(cards[1].cardImage);
console.log(cards[1].suit);