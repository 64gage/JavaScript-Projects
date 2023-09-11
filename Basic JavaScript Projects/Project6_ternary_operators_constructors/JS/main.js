// ternary operation
function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}
//end ternary operation

// this is thoe constructor function
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}
// end constructor function

// nested function
function counting_function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var starting_point = 0;
        function Plus_one() {starting_point += 1;}
        Plus_one();
        return starting_point;
    }
}
// end nested function