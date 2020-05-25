"use strict"
const form = document.querySelector("form");
const calculateResult = document.getElementById("calculateResult");
const tipAmount = document.getElementById("tip-amount");
const alert = document.getElementById("alert-container");
const alertButton = document.getElementById("alertButton");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const bill = document.getElementById("bill").value;
    const servicePercent = document.getElementById("servicePercent").value;
    const peopleCount = document.getElementById("peopleCount").value;

    if(!Number(bill) || !Number(servicePercent) || !Number(peopleCount)){
        alert.style.display="block"
        return;
    }
    const sum = ( Number(servicePercent)/100 * Number(bill) ) / Number(peopleCount).toFixed(2);

    calculateResult.innerText = currencyFormat(sum);
    tipAmount.style.display="block"; 

 });

 alertButton.addEventListener("click",function(){
    alert.style.display="none";
 });

 function currencyFormat(num) {
    return '$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }