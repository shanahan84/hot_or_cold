var randomNumber;
var guess;
var userFeedback;
var previousGuesses;
var alreadyGuessed;
var count;
var $newButton = $('a.new');
var $form = $('form');
var $input = $form.find('#userGuess');
var $feedback = $('#feedback');
var $count = $('#count');
var $guessList = $('#guessList');


$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//Get random number
  	function randomNumber(){
  		randomNumber = Math.floor(Math.random()*100)+1;
  	}

  	$form.submit(function(e){
  		e.preventDefault();
  		getUserGuess();
  	});

  	//User Input
  	function getUserGuess(){
  		guess = $input.val();
  		$input.val('');
  		validInput();
  		feedback();
  	}

  	//Valid input
  	function validInput(){
  		if(guess % 1 != 0){
  			console.log('Enter a Number please');
  		}
  		if(guess > 0) || (guess < 101){
  			console.log('Pick a Number between 0 and 100');
  		}
  	}

  	//Feedback
  	function feedback(){
  		if(randomNumber == guess){
  			console.log('You Guessed It. Select New Game to Start Again!!');
  		}else if(Math.abs(randomNumber - guess) <= 10){
  			console.log('Very Hot');
  		}else if(Math.abs(randomNumber - guess) < 20 && Math.abs(randomNumber - guess) >= 11){
  			console.log('Hot');
  		}else if(Math.abs(randomNumber - guess) < 30 && Math.abs(randomNumber - guess) >= 21){
  			console.log('Warm');
  		}else {
  			console.log('Cold');
  		}
  	}

  	//track guesses
  	function count(){
  		count++;
  	}



});


