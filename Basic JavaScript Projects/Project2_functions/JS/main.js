//this function changes the text in a button
function My_First_Function() { //naming function
    var str = "This is the button text!"; //declaring variable and assigning string
    document.getElementById("Button_Text").innerHTML = str; //targetting HTML element and replacing content
}

//This function changes a string into another string
function myFunction() { // naming function
    var sentence = "I am learning"; //declaring variable and assigning string
    sentence += " a lot from this book!"; //adding more to the string
    document.getElementById("Concatenate").innerHTML = sentence; //targeting an HTML element and replacing the content with our string
}