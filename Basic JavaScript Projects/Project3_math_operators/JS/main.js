function addition(a,b) {
    var total = a + b;
    document.getElementById("Math").innerHTML = total;
}

function subtraction(a,b) {
    var total = a - b;
    document.getElementById("Math2").innerHTML = total;
}

function multiplication(a,b) {
    var total = a * b;
    document.getElementById("Math3").innerHTML = total;
}

function division(a,b) {
    var total = a / b;
    document.getElementById("Math4").innerHTML = total;
}

function multiOps(a,b,c,d) {
    var total = (a + b) * c / d;
    document.getElementById("Math5").innerHTML = total;
}

function modulus(a,b) {
    var total = a % b
    document.getElementById("Math6").innerHTML = total;
}

function negation(a) {
    var total = a * -1
    document.getElementById("Math7").innerHTML = total;
}

function increment(a) {
    a++;
    document.getElementById("Math8").innerHTML = a;
}

function decrement(a) {
    a--;
    document.getElementById("Math9").innerHTML = a;
}

function random(a,b) {
    var rand = (Math.random(a) * b);
    rand = rand - (rand % 1);
    document.getElementById("Math10").innerHTML = rand;
}