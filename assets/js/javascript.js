$(document).ready(function() {

    var myGuess = 0;
    var winner = 0;
    var loser = 0;
    var randomNumber = Math.floor(Math.random() * 120) + 19;
    var blueRedCrystal = Math.floor(Math.random() * 12) + 1; 
    var cyanCrystal = Math.floor(Math.random() * 12) + 1; 
    var greenCrystal = Math.floor(Math.random() * 12) + 1; 
    var orangeBlueCrystal = Math.floor(Math.random() * 12) + 1;
    
    console.log(blueRedCrystal);
    console.log(cyanCrystal);
    console.log(greenCrystal);
    console.log(orangeBlueCrystal);

    $("#randomScore").text(randomNumber);
    $("#yourScore").text(myGuess);

    
    function resetGame() {
        randomNumber = Math.floor(Math.random() * 120) + 19;
        $("#randomScore").text(randomNumber);
        myGuess = 0;
        $("#yourScore").text(myGuess); 
        blueRedCrystal = Math.floor(Math.random() * 12) + 1;
        cyanCrystal = Math.floor(Math.random() * 12) + 1;
        greenCrystal = Math.floor(Math.random() * 12) + 1;
        orangeBlueCrystal = Math.floor(Math.random() * 12) + 1;
        
        console.log(blueRedCrystal);
        console.log(cyanCrystal);
        console.log(greenCrystal);
        console.log(orangeBlueCrystal);

    }

    function valueChecker() {
        if (myGuess === randomNumber) {
            winner ++;
            alert("Fill up my cup, Mazel Tov");
            $("#winsScore").text(parseInt(winner));
            setTimeout(resetGame, 2500);
        
        } else if 
            (myGuess > randomNumber) {
            loser ++;
            alert("You Lose! Are you crying? There's no crying in Crystals!");
            $("#lossesScore").text(parseInt(loser));        
            setTimeout(resetGame, 2500);   
        }
    }
		

    $("#crystal1").click(function () {
        blueRedCrystal = parseInt(blueRedCrystal);
        myGuess += blueRedCrystal;
        valueChecker();
        $("#yourScore").text(myGuess);
    });

    $("#crystal2").click(function () {
        cyanCrystal = parseInt(cyanCrystal);
        myGuess += cyanCrystal;
        valueChecker();
        $("#yourScore").text(myGuess);
    });

    $("#crystal3").click(function () {
        greenCrystal = parseInt(greenCrystal);
        myGuess += greenCrystal;
        valueChecker();
        $("#yourScore").text(myGuess);
    });

    $("#crystal4").click(function () {
        orangeBlueCrystal = parseInt(orangeBlueCrystal);
        myGuess += orangeBlueCrystal;
        valueChecker();
        $("#yourScore").text(myGuess);
    });
});