index.js
console.log("JS4 Assignment");
// #1 => created an array called "Ages", & 1a 
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages:", ages);
let minusAge = ages[ages.length - 1];
console.log("minusAge");
// #1b added new age and repeated steps from part a to keep it dynamic
ages.push(100);
console.log("Ages after pushing a new value", ages);
let minusAgePush = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush);
// #1c made a loop to go through array and add ages and average them
let sumOfAges = 0;
for(let i = 0; i < ages.length; i++){
    console.log(Hello);
  sumOfAges += ages[i]
 console.log("index",i,"sumOfAges",sumOfAges);     
}
console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length;
console.log("Average", average);
// #2 make an array of names
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let totalChars = 0;
// #2a created a loop to go through names and concatenate the number of letters in each name
for(let i = 0; i < names.length; i++) {
console.log(i, "Test");
totalChars += names(i).length
console.log("index:",i,"name",names[i], "totalChars:",
totalChars);
}
let averageName = totalChars / names.length;
console.log("Average of Names:", averageName);
// #2b make a loop to put names together, separated by spaces
let concatNames = " ";
for (let i = 0; i < names.length; i++){
console.log("Test");
concatNames = concatNames.concat(names[i]) + " "
console.log(i, "Names concatenated", concatNames);
}
// #3 created access to the last element
console.log("Last element of ages array:", ages[ages.length - 1]);
// #4 created access to the first element
console.log("First element of ages array:", ages[0]);
// #5 created new array, and made a loop to go through names and add the length of the names
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
console.log(i, "Test");
nameLengths.push(names[i].length)
console.log("Name lengths array:", nameLengths);
}
// #6 made a loop to go through name lengths and add the elements
let charTotal = 0;
for(let i = 0; i < nameLengths.length; i++){
console.log(i, "Test");
charTotal += nameLengths[i];
console.log("CharTotal:", charTotal);
}
// #7 made a function with 2 parameters
function concatWords(word, n){
  console.log("Word Par:", word, "n Par:", n);
 let concat = word.repeat(n);
 console.log(concat);
}
concatWords("Hello", 3);
// #8 made a function to add 2 parameters together
function fullName(firstName,lastName){
  let fullName = firstName + " " + lastName;
  console.log(fullName);
}
fullName("Melinda", "Tolliver");
// #9 made a function and returned it true/false depending on the sum being greater than 100
let numbers = (100, 200, 300, 400)
let numbers2 = (1, 2, 3, 4)

function sumNumbersArray(array){
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    console.log(i, "Test");
    total += array(i);
    console.log("Total", total);
  }
  if (total > 100) {
    console.log("Total", total, true);
    return true
  } else {
    console.log("Total", total, false);
    return false
  }
}
sumNumbersArray(numbers2);
// #10 made a function to add the numbers and return the average
function calculateNumbersAverage(array){
  let total = 0;
  
  for(let i = 0; i < array.length; i++){
    console.log(i, "Test");
    total += array(i)
    console.log("calculate function, totali", total);
  }
  let average = total / array.length
  console.log("Average of numbers:", average);
  return average;
}
calculateNumbersAverage(numbers1);

let numbers3 = (100, 100, 100);
let numbers4 = (100, 100, 99);
// #11 made a function that takes 2 arrays and returns true/false depending on average
function twoAverages(array1,array2){
  console.log("Parameters:", array1, array2);
  let total1 = 0;
  let total2 = 0;
  for (const number of array1){
    total1 += number
    console.log("Current number:" number, "Total1:", total);
  }
  for (const number of array2){
    total2 += number;
    console.log("Current number:", number, "Total2:", total2);
  }
  let average1 = total1 / array1.length;
  let average2 = total2 / array2.length;
  console.log("Average1", averag1, average2);
  if (average1 > average2) {
    console.log(true);
    return true;
  } else if (average1 < average2) {
    return false;
   } else {
    console.log("Numbers are equal");  
    }
}
twoAverages(numbers3, numbers4);
// #12 made a function to determine if we can buy a drink depending on variables
function willBuyDrink(isHotOutside, moneyInPocket){
console.log("Parameters", isHotOutside, moneyInPocket);
let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
console.log("Buy a drink:", buyDrink);
return buyDrink;
}

willBuyDrink(true, 11);

