var x = 10; // declare variable
function Add_numbers_1() {
    document.write(20 + x + "<br>"); // write number
}
function Add_numbers_2() {
    document.write(x + 100 + "<br>"); // write number 
}
Add_numbers_1(); // running function
Add_numbers_2(); // running function


function Add_numbers_3() {
    var xy = 10; // declare variable
    document.write(20 + xy + "<br>"); // write number
}
function Add_numbers_4() {
    document.write(xy + 100 + "<br>"); // write number
}
Add_numbers_3(); // running function
Add_numbers_4(); // running function

function Add_numbers_5() {
    var xy = 10; // declare variable
    console.log(20 + xy); // log number
}
function Add_numbers_6() {
    console.log(xy + 100); // log number
}
Add_numbers_5(); // running function
Add_numbers_6(); // running function

// if statement code start
function get_Date() {
    if (new Date().getHours() < 18) { // check conditions
        document.getElementById("Greeting").innerHTML = "How are you today?"; 
    }
}
// if statement code end

//original if, else if, else statement start
function Secret_Comparison() {
    var userInput, Secret_Number;
    userInput = document.getElementById("userInput").value; // gets user's input
    Secret_Number = 13;  // this is the secret number
    if (userInput == Secret_Number) { // checks if guess is equal
        document.getElementById("Hint").innerHTML = "You got it!";
    }
    else if (userInput < Secret_Number) { // checks if guess is low
        document.getElementById("Hint").innerHTML = "Your guess is too low.";
    }
    else if (userInput > Secret_Number) { // checks if guess is high
        document.getElementById("Hint").innerHTML = "Your guess is too high.";
    }
    else { // makes sure that user can't mess up the code with a weird input
        document.getElementById("Hint").innerHTML = "Please enter a valid number.";
    }
}
// end original code

// time of day function
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { //checks for morning
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { //checks for afternoon
        Reply = "It is afternoon."
    }
    else { // anything other than morning or afternoon
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; 
}
// end time of day function