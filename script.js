const firstNum=parseInt(prompt("Please enter the first number:"));
const secondNum=parseInt(prompt("Please enter second number:"));
const thirdNum=parseInt(prompt("Please enter third number:"));
//console.log("Hello World!!");

let maxNum=firstNum;

if(secondNum>maxNum){
  maxNum=secondNum;
}
if(thirdNum>maxNum){
  maxNum=thirdNum;
}

/*if(firstNum>=secondNum && firstNum>=thirdNum){
  maxNum=firstNum;
}
else if(secondNum>=firstNum && secondNum >=thirdNum){
  maxNum=secondNum;
}
else{
  maxNum=thirdNum;
}
*/


//console.log("The largest number you entered is "+maxNum);
alert("The largest number you entered is "+maxNum);