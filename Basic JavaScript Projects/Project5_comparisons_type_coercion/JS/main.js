document.write(typeof(5), "<br>"); // data type
const value1 = "5"; // string
const value2 = 9; // number
let sum = value1 + value2; // adding them forces number to be a string

console.log(sum); // put answer in console
document.write(sum, "<br>"); // write answer
document.write(2E310, "<br>"); // infinity
document.write(-3E310, "<br>"); // negative infinity
document.write(1 > 2, "<br>"); // false
document.write(1 < 2, "<br>"); // true
document.write(1 == 1, "<br>"); // true
document.write(1 == 2, "<br>"); // false
X = 10; // assign number
Y = 10; // assign identical number
document.write(X === Y, "<br>"); // they are equal types and values
Y = "Ten"; // change to different type and value
document.write(X === Y, "<br>"); // not equal
Y = "10"; // change to different type same value
document.write(X === Y, "<br>"); // not equal
Y = 11; // change to same type different value
document.write(X === Y, "<br>"); // not equal
document.write(1 == 1 && 2 == 2, "<br>"); // AND true
document.write(1 == 1 && 2 == 3, "<br>"); // AND false
document.write(1 == 1 || 2 == 3, "<br>"); // OR true
document.write(1 == 2 || 2 == 3, "<br>"); // OR false
document.write(2 != 1, "<br>"); // NOT true 
document.write(1 != 1, "<br>"); // NOT false