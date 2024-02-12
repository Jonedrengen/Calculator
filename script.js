// javascript file for the calculator app

// the following is code to make the buttons add their numbers to the input field
// the following is code to make the buttons add their numbers to the input field
// the following is code to make the buttons add their numbers to the input field

// getting the input element
var inputField = document.getElementById("inputNumber"); 
console.log(inputField);
// getting all the buttons
var buttons = document.getElementsByClassName("genericButton")
console.log(buttons.length);

// function that add numbers from buttons to the input field
function addNumberToInput(num) {
    inputField.value = (Number(inputField.value) + num).toSting();
    console.log(typeof inputField);
}

// adding a listener to each button
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        // Call the function to add the number to the input field
        addNumberToInput(Number(this.value));
    });
}


