var dices = new Array(5);
var totalScore = 0;
var gameEnd = 13;
var RollsLeft = 3;

function RollDices() {
  if (RollsLeft != 0) {
  for (var i = 1; i < 6; i++) {
				var dice = document.getElementById("Dice" + i);
        if (dice.value == "NotSelected") {
          var n = Math.floor((Math.random() * 6) + 1)
          if (dice !== null) {
          dice.style.backgroundImage = "url(pictures/"+ n + ".png)";
          dices[i-1] = n;
          };
				};
			};
      UpdateBoard();
      RollsLeft--;
      UpdateInstructions();
    }
}
function UpdateBoard() {
if (document.getElementById('score1').style.color != "red") {
document.getElementById('score1').innerHTML = checkScore(1);
};

if (document.getElementById('score2').style.color != "red") {
document.getElementById('score2').innerHTML = checkScore(2);
};
if (document.getElementById('score3').style.color != "red") {
document.getElementById('score3').innerHTML = checkScore(3);
};
if (document.getElementById('score4').style.color != "red") {
document.getElementById('score4').innerHTML = checkScore(4);
};
if (document.getElementById('score5').style.color != "red") {
document.getElementById('score5').innerHTML = checkScore(5);
};
if (document.getElementById('score6').style.color != "red") {
document.getElementById('score6').innerHTML = checkScore(6);
};
if (document.getElementById('score7').style.color != "red") {
document.getElementById('score7').innerHTML = NrOfKind(3);
};
if (document.getElementById('score8').style.color != "red") {
document.getElementById('score8').innerHTML = NrOfKind(4);
};
if (document.getElementById('score9').style.color != "red") {
document.getElementById('score9').innerHTML = FullHouse();
};
if (document.getElementById('score10').style.color != "red") {
document.getElementById('score10').innerHTML = 0;
}
if (document.getElementById('score11').style.color != "red") {
document.getElementById('score11').innerHTML = 0;
}
Straight();
if (document.getElementById('score12').style.color != "red") {
document.getElementById('score12').innerHTML = Yahtzee();
};
if (document.getElementById('score13').style.color != "red") {
document.getElementById('score13').innerHTML = Chance();
};
}
function checkScore(dots) {
        var score = 0;

        for (i = 0; i < dices.length; i++) {
            if (dices[i] == dots)
                score += dots;
        }
        return score;
};
function NrOfKind(nr) {
        var sum = 0;

        for (var i = 1; i <=6; i++) {
            var count = 0;
            for (var j = 0; j < 5; j++) {
                if (dices[j] == i)
                    count++;

                if (count == nr)
                {
                    for (var k = 0; k < 5; k++) {
                        sum += dices[k];
                    }
                    break;
                }
            }
        }
        if (sum != '0') {
	        if (nr == '3' ) {

	        }
	        else
	        {
	        	sum = sum + 10;
	        }
    	};
        return sum;
};
function Straight()
    {

          var count = 0;
          if(count==3)
          {
              sumSmall = 30;
              if (document.getElementById('score10').style.color != "red")
              {
                document.getElementById('score10').innerHTML = sumSmall;
              };
          }
          if (count >= 4)
          {
              sumSmall = 30;
              sumLarge = 40;

              if (document.getElementById('score11').style.color != "red") {
                document.getElementById('score11').innerHTML = sumLarge;
              };
              if (document.getElementById('score10').style.color != "red") {
                document.getElementById('score10').innerHTML = sumSmall;
              };
          }
    }
    function NrOfKind(nr) {
        var sum = 0;

        for (var i = 1; i <=6; i++) {
            var count = 0;
            for (var j = 0; j < 5; j++) {
                if (dices[j] == i)
                    count++;

                if (count == nr)
                {
                    for (var k = 0; k < 5; k++) {
                        sum += dices[k];
                    }
                    break;
                }
            }
        }
        if (sum != '0') {
	        if (nr == '3' ) {

	        }
	        else
	        {
	        	sum = sum + 10;
	        }
    	};
        return sum;
    };
    function Chance()
    {
        var sum = 0;

        for (var i = 0; i < dices.length; i++) {
            sum += dices[i];
        }

        return sum;
    }

    function Yahtzee() {
        var sum = 0;

        for (var i = 1; i <= 6; i++) {
            var count = 0;
            for (var j = 0; j < 5; j++) {
                if (dices[j] == i)
                    count++;

                if (count == 5) {
                    sum = 50;
                    break;
                }
            }
        }
        return sum;
    };
function FullHouse() {
        var sum = 0;
        var sortedDices = new Array(5);

        for (var i = 0; i < 5; i++) {
            sortedDices[i] = dices[i];
        }

        sortedDices.sort();

        if ((((sortedDices[0] == sortedDices[1]) && (sortedDices[1] == sortedDices[2])) && // Three of a Kind
              (sortedDices[3] == sortedDices[4]) && // Two of a Kind
              (sortedDices[2] != sortedDices[3]))
            ||
             ((sortedDices[0] == sortedDices[1]) && // Two of a Kind
             ((sortedDices[2] == sortedDices[3]) && (sortedDices[3] == sortedDices[4])) && // Three of a Kind
              (sortedDices[1] != sortedDices[2])))
        {
            sum = 25;
        }

        return sum;
    };
  function LockDice(dice) {
    if (dice.value == "NotSelected") {
      dice.style.opacity = 0.3;
      dice.value = "Selected";
    }
    else{
      dice.style.opacity = 1;
      dice.value = "NotSelected";
    }
  }
function SaveScore(score,buttonId) {
    gameEnd -= 1;
    totalScore += parseInt(document.getElementById(score).innerHTML,10);
    document.getElementById(score).style.color = "red";
    document.getElementById('score14').innerHTML = totalScore;
    buttonId.style.display = "none";
    RollsLeft = 3;    
    if (gameEnd == 0) {
      storeScoreDb();
      DisplayWin();
    }
};
function storeScoreDb() {
    var x = new XMLHttpRequest();
     x.open("GET","../Yatze/classes/storeScore.php?score="+totalScore,true);
     x.send();
}
function DisplayWin() {
    document.getElementById('WinMessage').innerHTML = "Your Score :" + totalScore;
    var pop  = document.getElementById("popup");
    pop.style.display = "block";
}
function HidePopup()
{
  var pop  = document.getElementById("popup");
  pop.style.display = "none";
}
function HideOptions() {
  var x = document.getElementById('options');
  x.style.display = "none";
}
function ShowOptions() {
  document.getElementById('options').style.display = "block";
}
function DiceValues() {
  for (var i = 1 ; i < 6; i++) {
    document.getElementById("Dice"+ i).value = "NotSelected";
  }
}
function UpdateInstructions() {
  document.getElementById('Instr').innerHTML = "Rolls Left: " + RollsLeft;
}
function SwitchForm() {
  if (document.getElementsByClassName('loginContainer')[0].style.display != "none") {
    document.getElementsByClassName('loginContainer')[0].style.display = "none"
    document.getElementsByClassName('createAccountContainer')[0].style.display = "block"
  }
  else {
    document.getElementsByClassName('loginContainer')[0].style.display = "block"
    document.getElementsByClassName('createAccountContainer')[0].style.display = "none"

  }
}
