// javascript file for the calculator app

// the following is code to make the buttons add their numbers to the input field
// the following is code to make the buttons add their numbers to the input field
// the following is code to make the buttons add their numbers to the input field

// adding an event listener to the document, which means that functions will be called when the document is fully loaded and not before
document.addEventListener('DOMContentLoaded', (event) => {
    // getting the input element
    var inputField = document.getElementById("inputNumber"); 
    // getting all the numbered buttons
    var numberButtons = document.getElementsByClassName("genericButton number");
    console.table({ 'array buttons length': numberButtons.length, 'buttons type': typeof numberButtons });

    var plusButton = document.getElementsByClassName("blueButton +")
    console.log("plusButton = " + plusButton[0].value); // plusButton[0] is the first element in the array of plusButton

    // function that add numbers from buttons to the input field
    function addNumberToInput(num) {
        inputField.value = 0; // reset the input field to 0
        inputField.value = (Number(inputField.value) + num).toString(); // add the number from the button to the input field
    }

    // creating variables for the current number and the next operation
    var storedNumber = null;
    var nextOperation = null;
    // function takes first number and stores it and resets the input field
    function handleAdditionButtonClick() {
        storedNumber = Number(inputField.value); // store number pressed before the operation
        console.log("current number = " + storedNumber);
        nextOperation = "addition"; // set the next operation to addition
        console.log("next operation = " + nextOperation);
        inputField.value = 0; // reset input field
    }

    // adding listener to addition button
    document.getElementsByClassName("blueButton +")[0].addEventListener("click", handleAdditionButtonClick); // exstracting first index of the collection (getElementsByClassName returns collection of html elements)

    // Function to handle the click event for the "=" button
    function handleEqualsButtonClick() {
        // Perform the next operation
        if (nextOperation === "addition") {
            inputField.value = storedNumber + Number(inputField.value);
            console.log(inputField.value)
        }    

        // Reset
        storedNumberNumber = null;
        nextOperation = null;
    }
    // Add the event listener to the "=" button
    document.getElementsByClassName("genericButton =")[0].addEventListener('click', handleEqualsButtonClick);

    // adding a listener to each button
    for (var i = 0; i < numberButtons.length; i++) { // loop through all the buttons, start from 0 and end at the length of the buttons (i < buttons.length) (i++ means increment by 1)
        numberButtons[i].addEventListener('click', function() { // add an event listener to each button, where the event is a click
            addNumberToInput(Number(this.value)); // every click will call the addNumberToInput function
            console.log('value of button added = ' + this.value);
        });
    }
});




