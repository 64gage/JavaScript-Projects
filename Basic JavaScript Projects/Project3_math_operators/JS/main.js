//All of my JavaScript code essentially does the same thing

function addition(a,b) { //First I name the function and set the parameters
    var total = a + b; //Then I create a variable for the solution, and simply write the math operation
    document.getElementById("Math").innerHTML = total;//then I replace a placeholder text with the solution
}

function subtraction(a,b) {
    var total = a - b; //subtraction
    document.getElementById("Math2").innerHTML = total;
}

function multiplication(a,b) {
    var total = a * b; //multiplication
    document.getElementById("Math3").innerHTML = total;
}

function division(a,b) {
    var total = a / b; //division
    document.getElementById("Math4").innerHTML = total;
}

function multiOps(a,b,c,d) {
    var total = (a + b) * c / d; //multiple operations
    document.getElementById("Math5").innerHTML = total;
}

function modulus(a,b) {
    var total = a % b //modulus
    document.getElementById("Math6").innerHTML = total;
}

function negation(a) {
    var total = a * -1 //negation
    document.getElementById("Math7").innerHTML = total;
}

function increment(a) {
    a++; //incrementing
    document.getElementById("Math8").innerHTML = a; //for this one I didn't need a new variable because there's only one operand
}

function decrement(a) {
    a--; //decrementing
    document.getElementById("Math9").innerHTML = a; //same as incrementing
}

function random(a,b) {
    var rand = (Math.random(a) * b); //create variable rand and generate a random number
    rand = rand - (rand % 1); //this code gets rid of everything after the decimal place, because I only wanted whole numbers
    document.getElementById("Math10").innerHTML = rand; //same as usual, variable is just named rand instead of total
}