// Exercise 1

let favNum = 14;
let guess = window.prompt(
  "Guess my favorite number, it's a whole number between 1 and 20."
);
if (guess < 14) {
  alert(`Sorry, your guess is too low.`);
} else if (guess > 14) {
  alert(`Sorry, your guess is too high.`);
} else {
  alert(`Congratulations! My favorite number is ${favNum}.`);
}

// Exercise 2

let favSport = window.prompt(`What's your favorite sport?`);
switch (favSport.toLocaleLowerCase()) {
	case 'hockey':
		console.log("Hockey is a great sport.");
		break;
	case 'football':
		console.log("Football is a great sport.");
		break;
	case 'soccer':
		console.log("Soccer is a great sport.");
		break;
	case 'basketball':
		console.log(`Basketball is a great sport`);
		break;
	case 'baseball':
		console.log("Baseball is my favorite sport too.");
		break;
	default:
		console.log("Your favorite is not among the top favorites or you have no favorite.");
}
