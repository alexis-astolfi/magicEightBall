$(document).ready(function() {

    var magicEightBall = {};
    
    magicEightBall.listOfAnswers = ["yes", "no", "maybe so", "unlikely", "unsure, ask again later", "keep wishing"];
    
    magicEightBall.askQuestion = function(question) {
    $("#8ball").effect("shake");
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    $("#answer").fadeIn(4000);
    magicEightBall.randomNumber = Math.random();
    
    magicEightBall.randomAnswerNumber = magicEightBall.randomNumber * magicEightBall.listOfAnswers.length;
    
    magicEightBall.randomAnswerIndex = Math.floor(magicEightBall.randomAnswerNumber);
    
    magicEightBall.randomAnswer = magicEightBall.listOfAnswers[magicEightBall.randomAnswerIndex];
    
    $("#answer").text(magicEightBall.randomAnswer);
    console.log(question);
    console.log(magicEightBall.randomAnswer);
    };
    
    $("#answer").hide(magicEightBall.randomAnswer);
        
    var onClick = function() {
        $("#answer").hide(magicEightBall.randomAnswer);
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
        setTimeout(function() {
        var question = prompt("Ask me anything");
        magicEightBall.askQuestion(question);
        }, 500);
    };
    
    
    $("#questionButton").click(onClick);
    
    });
    
    
    
                
    