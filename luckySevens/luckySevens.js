

function play() {
  var startingBet = document.getElementById("betInput").value;
  var money = startingBet;
  var dice1;
  var dice2;
  var rollsAtMax = 0;
  var rollsBeforeBroke = 0;
  var maxWinnings = 0;



  if(money <= 0){
  		alert("Starting bet needs to be greater than $0");

} else{

     while (money > 0) {
       rollsBeforeBroke++;
       dice1 = Math.floor(Math.random() * 6) + 1;
       dice2 = Math.floor(Math.random() * 6) + 1;

    if(dice1 + dice2 != 7) {
       money = money - 1;
   }else {
       money = money + 4;

    if(money > maxWinnings) {
        maxWinnings = maxWinnings + money;
        rollsAtMax = rollsBeforeBroke;
      }
    }

   }
 document.getElementById("results").style.display = "block";
 document.getElementById("money").innerText = '$ ' + startingBet;
 document.getElementById("rollsBeforeBroke").innerText = rollsBeforeBroke;
 document.getElementById("maxWinnings").innerText = '$ ' + maxWinnings;
 document.getElementById("rollsAtMax").innerText = rollsAtMax;
}
return false;
}
