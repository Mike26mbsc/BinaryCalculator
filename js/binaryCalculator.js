let inputString = "";
let res = document.getElementById("res");
let operator = " ";
let resultCalc;
/* Parameter 'e' is the click Event */
function action(e) {
  /* Older IE browsers have a srcElement property,
                but other browsers have a 'target' property; 
                Set btn to whichever exists. */

  function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }
  var btn = e.target || e.srcElement;
  if (btn.id == "btnSum") {
    operator = document.getElementById(btn.id).innerHTML;
    console.log("operator: " + operator);
  }
  if (btn.id == "btnSub") {
    operator = document.getElementById(btn.id).innerHTML;
    console.log("operator: " + operator);
  }
  if (btn.id == "btnMul") {
    operator = document.getElementById(btn.id).innerHTML;
    console.log("operator: " + operator);
  }
  if (btn.id == "btnDiv") {
    operator = document.getElementById(btn.id).innerHTML;
    console.log("operator: " + operator);
  }
  if (btn.id == "btnClr") {
    console.log("clear button was clicked");
    res.innerHTML = "";
    inputString = "";
    operator = " ";
  } else if (btn.id == "btnEql") {
	  console.log('line 37 equal button clicked');
    if (operator != " ") {
	    console.log('line 39 operator is not blank');
      let myArr = inputString.split(operator);
      console.log("line 41 operand array: " + myArr);
      let operand1 = parseInt(myArr[0], 2);
      let operand2 = parseInt(myArr[1], 2);
      if(operator == '+'){
        console.log('operator is addition');
        resultCalc = operand1 + operand2;
      }    
      if(operator == '-'){
        console.log('operation is subtraction');
        resultCalc = operand1 - operand2;
      }    
      if(operator == '*'){
        console.log('operator is multiplication');
        resultCalc = operand1 * operand2;
      }    
      if(operator == '/'){
        console.log('operator is division');
        resultCalc = operand1 / operand2;
      }    
      console.log(dec2bin(operand1) + " " + dec2bin(operand2));
      console.log(resultCalc);
      console.log(dec2bin(resultCalc));
      res.innerHTML = dec2bin(resultCalc);
    } else {
      res.innerHTML = inputString;
      console.log(parseInt(inputString, 2));
      console.log(dec2bin(parseInt(inputString, 2)));
    }
  } else {
    /* Get the clicked element's innerHTML */
    let buttonInput = document.getElementById(btn.id).innerHTML;
    inputString += buttonInput;
    res.innerHTML = inputString;
  }
}

/* Add a click event listener that calls action(e) when clicked */
document.getElementById("btn1").addEventListener("click", action);
document.getElementById("btn0").addEventListener("click", action);
document.getElementById("btnClr").addEventListener("click", action);
document.getElementById("btnEql").addEventListener("click", action);
document.getElementById("btnSum").addEventListener("click", action);
document.getElementById("btnSub").addEventListener("click", action);
document.getElementById("btnMul").addEventListener("click", action);
document.getElementById("btnDiv").addEventListener("click", action);
document.addEventListener('keyup', function(event){
	if (event.keyCode === 96) {
        document.getElementById("btn0").click();
	}
	if (event.keyCode === 97) {
        document.getElementById("btn1").click();
        }
	if (event.keyCode === 46 || event.keyCode === 8) {
        document.getElementById("btnClr").click();
	}
	if (event.keyCode === 13) {
        document.getElementById("btnEql").click();
        }
	if (event.keyCode === 107) {
        document.getElementById("btnSum").click();
        }
	if (event.keyCode === 109) {
        document.getElementById("btnSub").click();
        }
	if (event.keyCode === 106) {
        document.getElementById("btnMul").click();
        }
	if (event.keyCode === 111) {
        document.getElementById("btnDiv").click();
        }

})
