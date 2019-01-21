

function play() {
  var startingBet = document.getElementById("betInput").value;
  var money = startingBet;
  var dice1;
  var dice2;
  var diceRoll;
  var rollsBeforeBroke = 0;
  var maxWinnings = 0;
  var rollsAtMax = 0;


  if(money <= 0){
  		alert("Starting bet needs to be greater than $0");

} else{

     while (money > 0) {
       rollsBeforeBroke++;
       dice1 = Math.floor(Math.random() * 6) + 1;
       dice2 = Math.floor(Math.random() * 6) + 1;
       diceRoll = dice1 + dice2;

     if(diceRoll != 7) {
       money --;
    } else{
      money += 4;

      if(money > maxWinnings) {
        maxWinnings = maxWinnings + money;
        rollsBeforeBroke = rollsAtMax;
      }
    }

   }
 document.getElementById("results").style.display = "block";
 document.getElementById("money").innerText = startingBet;
 document.getElementById("rollsBeforeBroke").innerText = rollsBeforeBroke;
 document.getElementById("maxWinnings").innerText = maxWinnings;
 document.getElementById("rollsAtMax").innerText = rollsAtMax;
 return false;
}
}
