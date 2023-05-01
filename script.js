/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Olivia Gavin
      Date: 05/01/2023  

      Filename: project02-04.js
 */
 
// const variable declarations
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

//event handlers 
document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;

// function to add the total cost
function calcTotal() {
   let cost = 0;
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

   // add the cost of the chicken
   cost += buyChicken ? CHICKEN_PRICE : 0;

   // add the cots of the halibut
   cost += buyHalibut ? HALIBUT_PRICE : 0;

   // add the cost of the burger
   cost += buyBurger ? BURGER_PRICE : 0;

   //add the cost of the salmon
   cost += buySalmon ? SALAD_PRICE : 0;

   //add the cost of the salad
   cost += buySalad ? SALAD_PRICE : 0;

   // setting food total value
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
   
   // Adding the tax
   let tax = cost * SALES_TAX;

   // setting food tax
   document.getElementById("foodTax").innerHTML = formatCurrency(tax);

   let totalCost = cost + tax;

   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}


// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
