function dictionary() {
    var Animal = { //declares object
        Species:"Dog",// this section is declaring key-value pairs
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Breed; //this line deletes a key-value pair
    document.getElementById("Dictionary").innerHTML = Animal.Breed; //this would have printed a key value pair, but it's been deleted, so the result is "undefined"
}