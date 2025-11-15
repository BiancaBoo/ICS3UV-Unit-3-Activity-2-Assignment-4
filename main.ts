/**
 * Author: Bianca Bertinato
 * Version: 1.0.0
 * Date: 2025-11-14
 * This program calculates interest rate
 */

// Input
const initialValueInput = prompt("Enter the initial value:") || "1000";
const interestRateInput = prompt("Enter the interest rate (%):") || "7";

const initialValue = parseFloat(initialValueInput);
const rate = parseFloat(interestRateInput) / 100; 

// Table
console.log(`Year  Initial Value   Interest Gained   Current Value`);
console.log(`------------------------------------------------------`);

// Year 1
const interest1 = initialValue * rate;
const current1 = initialValue + interest1;
console.log(`1     $${initialValue.toFixed(2).padStart(10)}   $${interest1.toFixed(2).padStart(14)}   $${current1.toFixed(2).padStart(13)}`);

// Year 2
const interest2 = current1 * rate;
const current2 = current1 + interest2;
console.log(`2     $${initialValue.toFixed(2).padStart(10)}   $${interest2.toFixed(2).padStart(14)}   $${current2.toFixed(2).padStart(13)}`);

// Year 3
const interest3 = current2 * rate;
const current3 = current2 + interest3;
console.log(`3     $${initialValue.toFixed(2).padStart(10)}   $${interest3.toFixed(2).padStart(14)}   $${current3.toFixed(2).padStart(13)}`);

// Year 4
const interest4 = current3 * rate;
const current4 = current3 + interest4;
console.log(`4     $${initialValue.toFixed(2).padStart(10)}   $${interest4.toFixed(2).padStart(14)}   $${current4.toFixed(2).padStart(13)}`);

// Year 5
const interest5 = current4 * rate;
const current5 = current4 + interest5;
console.log(`5     $${initialValue.toFixed(2).padStart(10)}   $${interest5.toFixed(2).padStart(14)}   $${current5.toFixed(2).padStart(13)}`);

// Year 6
const interest6 = current5 * rate;
const current6 = current5 + interest6;
console.log(`6     $${initialValue.toFixed(2).padStart(10)}   $${interest6.toFixed(2).padStart(14)}   $${current6.toFixed(2).padStart(13)}`);

// Year 7
const interest7 = current6 * rate;
const current7 = current6 + interest7;
console.log(`7     $${initialValue.toFixed(2).padStart(10)}   $${interest7.toFixed(2).padStart(14)}   $${current7.toFixed(2).padStart(13)}`);

// Year 8
const interest8 = current7 * rate;
const current8 = current7 + interest8;
console.log(`8     $${initialValue.toFixed(2).padStart(10)}   $${interest8.toFixed(2).padStart(14)}   $${current8.toFixed(2).padStart(13)}`);

// Year 9
const interest9 = current8 * rate;
const current9 = current8 + interest9;
console.log(`9     $${initialValue.toFixed(2).padStart(10)}   $${interest9.toFixed(2).padStart(14)}   $${current9.toFixed(2).padStart(13)}`);

// Year 10
const interest10 = current9 * rate;
const current10 = current9 + interest10;
console.log(`10    $${initialValue.toFixed(2).padStart(10)}   $${interest10.toFixed(2).padStart(14)}   $${current10.toFixed(2).padStart(13)}`);

console.log("\nDone.");