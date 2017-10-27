    var text = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  	var win = 0;
  	var wrong = 0;
  	var life = 9;
  	var guessedletter = []
  	var usersguess =""
  	// var computerguess = text[Math.foor(Math.random()*text.length)];

  	document.onkeyup = function(event){
  		usersguess=event.key;
   var computerguess = text[Math.floor(Math.random() * text.length)];

// Display



document.getElementById("guessedletter").innerHTML = "you guessed" + ":" + usersguess;
        
document.getElementById("life").innerHTML = "life" + " " + life;
        
document.getElementById("computerguess1").innerHTML = "I guessed: " + computerguess;

console.log(computerguess)
        
  	if (usersguess === computerguess)

  	{
  		win++;
  		alert("you are corrected, the letter is" + " " + computerguess);
  		guessedletter = [];
  		computerguess = text[Math.floor(Math.random() * text.length)];
        document.getElementById("win").innerHTML = "Score: " + " " +win ;
        reset();

  	}

  	else if (usersguess !== computerguess)
  	{
  		wrong++;
  		life--;
        console.log(life)
        document.getElementById("lose").innerHTML = "lose" +" "+ wrong;
        document.getElementById("guesswrong").innerHTML = "You Guess Wrong";
        document.getElementById("life").innerHTML = "life" + " " + life;
        
  	}

    if (life === 0) 
  	{
        reset();
  		computerguess = text[Math.floor(Math.random() * text.length)];
  		alert("You have lost" +"!!" + "Click OK to continue");

  	}

  	if (life > 0)
  	{
  		guessedletter.push(usersguess);
  	}
        
    
  	}
    
    reset()

function reset() {
        win = 0;
  		wrong = 0;
        life = 9;
    
}