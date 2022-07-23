// variables set up-----------
var display = document.getElementById("display");


// selection of subject-------------
const numberSelected =(issue)=>{
    display.innerHTML =display.innerHTML+issue;
    console.log(display.innerHTML);
}
const calculate =()=>{
    let displayContentReplaced = display.innerHTML.replace("X","*");
    let calculated = eval(displayContentReplaced);
    display.innerHTML=calculated.toFixed(4)
}
const calculateSQRT =()=>{
    let SQRTcalculatedDisplay =Math.sqrt(eval(display.innerHTML));
    display.innerHTML = SQRTcalculatedDisplay.toFixed(6);
} 
const calculatePercent=()=>{
    
}