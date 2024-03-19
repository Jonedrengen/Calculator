// javascript file for the calculator app

// the following is code to make the buttons add their numbers to the input field
// the following is code to make the buttons add their numbers to the input field
// the following is code to make the buttons add their numbers to the input field

// adding an event listener to the document, which means that functions will be called when the document is fully loaded and not before
document.addEventListener('DOMContentLoaded', (event) => {
    // getting the input element
    let mainInputNumber = document.getElementById("mainInputNumber"); 
    // getting all the numbered buttons
    let numberButtons = document.getElementsByClassName("genericButton number");
    console.table({ 'array buttons length': numberButtons.length, 'buttons type': typeof numberButtons });

    
    // function that add numbers from buttons to the input field
    function addNumberToInput(num) {
        if (mainInputNumber.value === "0") {
            mainInputNumber.value = num.toString(); // set the input field to the number from the button
        } else {
            mainInputNumber.value += num.toString(); // concatenate the number from the button to the input field
        }
    }

    // creating letiables for the current number and the next operation
    let storedNumber = null;
    let nextOperation = null;
    // function takes first number and stores it and resets the input field
    function additionButtonClick() { // #TODO CAN MAYBE BE 1 FUNCTION FOR ALL OPERATIONS  
        storedNumber = Number(mainInputNumber.value); // store number pressed before the operation
        console.log("current number = " + storedNumber);
        nextOperation = "addition"; // set the next operation to addition
        console.log("next operation = " + nextOperation);
        mainInputNumber.value = 0; // reset input field
    }
     // adding listener to addition button
    document.getElementsByClassName("blueButton addition")[0].addEventListener("click", additionButtonClick);
    
     // same as addition
    function subtractionButtonClick() {   
        storedNumber = Number(mainInputNumber.value); // store number pressed before the operation
        console.log("current number = " + storedNumber);
        nextOperation = "subtraction"; // set the next operation to addition
        console.log("next operation = " + nextOperation);
        mainInputNumber.value = 0; // reset input field
    }
    document.getElementsByClassName("blueButton subtraction")[0].addEventListener("click", subtractionButtonClick);


    // Function to handle the click event for the "=" button
    function EqualsButtonClick() {
        // Perform the next operation
        if (nextOperation === "addition") {
            mainInputNumber.value = storedNumber + Number(mainInputNumber.value);
            console.log(mainInputNumber.value)
        }    
        if (nextOperation === "subtraction") {
            mainInputNumber.value = storedNumber - Number(mainInputNumber.value);
            console.log(mainInputNumber.value)
        }

        // Reset
        storedNumberNumber = null;
        nextOperation = null;
    }

    
    // Add the event listener to the "=" button
    document.getElementsByClassName("genericButton =")[0].addEventListener('click', EqualsButtonClick);

    // adding a listener to each button
    for (let i = 0; i < numberButtons.length; i++) { // loop through all the buttons, start from 0 and end at the length of the buttons (i < buttons.length) (i++ means increment by 1)
        numberButtons[i].addEventListener('click', function() { // add an event listener to each button, where the event is a click
            addNumberToInput(Number(this.value)); // every click will call the addNumberToInput function
        });
    }
});




