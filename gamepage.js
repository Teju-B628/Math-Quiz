var player1name = localStorage.getItem ("player1name");
    player2name = localStorage.getItem ("player2name");

var player1score = 0;
    player2score = 0;
    document.getElementById("player1name").innerHTML = player1name + ":" ; 
    document.getElementById("player2name").innerHTML = player2name + ":" ;
    document.getElementById("player1score").innerHTML = player1score + ":" ;
    document.getElementById("player2score").innerHTML = player2score + ":" ;
    document.getElementById("questionTurn").innerHTML = "Question Turn: " + player1name;
    document.getElementById("answerTurn").innerHTML = "Answer Turn: " + player2name;