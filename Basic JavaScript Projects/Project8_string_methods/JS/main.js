function full_Sentence() { //concatenate function
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //using concat to add up all the parts
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_method() { //slice function
    var Sentence = "All word and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33); //the numbers define the parameters of the section that will be sliced
    document.getElementById("Slice").innerHTML = Section;
}

function string_method() { //non-string value to string function
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); // the toString() method turns the number into a string value
}

function precision_method() { //precision function
    var Y = 12938.3012987386112; 
    document.getElementById("Precision").innerHTML = Y.toPrecision(10); //the number decides how precise the result will be
}