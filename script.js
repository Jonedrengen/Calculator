// javascript file for the calculator app

// the following is code to make the buttons add their numbers to the input field
// the following is code to make the buttons add their numbers to the input field
// the following is code to make the buttons add their numbers to the input field

// adding an event listener to the document, which means that functions will be called when the document is fully loaded and not before
document.addEventListener('DOMContentLoaded', (event) => {
    // getting the input element
    var inputField = document.getElementById("inputNumber"); 
    // getting all the buttons
    var numberButtons = document.getElementsByClassName("genericButton number");
    console.table({ 'array buttons length': numberButtons.length, 'buttons type': typeof numberButtons });
    console.table({ 'events': event });
    // function that add numbers from buttons to the input field
    function addNumberToInput(num) {
        inputField.value = 0; // reset the input field to 0
        inputField.value = (Number(inputField.value) + num).toString(); // add the number from the button to the input field
    }

    // adding a listener to each button
    for (var i = 0; i < numberButtons.length; i++) { // loop through all the buttons, start from 0 and end at the length of the buttons (i < buttons.length) (i++ means increment by 1)
        numberButtons[i].addEventListener('click', function() { // add an event listener to each button, where the event is a click
            addNumberToInput(Number(this.value)); // every click will call the addNumberToInput function
            console.log('value of button added = ' + this.value);
        });
    }
});

