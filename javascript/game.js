var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var win = 0;
var lose = 0;
var guesses = 9;

var userguess, correctedletter, computerguess;

// setup listen to key
document.onkeyup = function(event) {
  var guess = event.key;


//condition and setup function 

  	if(userguess === computerguess)
  	{
  		win();
  	}

  	else if(userguess - 1 === 0)
  	{
  		lose();
  	}

  	else 
  	{
  		fail(guess);
  	}

  display ();
  resetGame();


  function display()

  {
  	var winP = document.getElementByid ("win");
  	var loseP = document.getElementByid('loses')
  	var guessleftP = document.getElementByid("guessleft")
  	var letterguessed = document.getElementByid("guessed")

  	winP.innerHTML = win;
  	loseP.innterHTML = lose;
  	guessleftP.innerHTML = userguess;
  	letterguessed.innerHTML = guessedletter.join",";

  }


//define the situation for each function
  function win()

  {
  	win++;
  	win = 10;
  	resetGame()
  }

  function lose()
  {
  	lose ++;
  	lose = 10
  	resetGame()
  }

  function fail()

  {
  	userguess--;
  	guessedletter.push(letter);
  }

  function reset()
  {
  	usergess = 10;
  	guessedletter =[];
  	computerguess = letter[Math.floor(Math.random() * letter.length)];

  }

}