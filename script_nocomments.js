
document.addEventListener('DOMContentLoaded', (event) => {
    var inputField = document.getElementById("inputNumber");
    var numberButtons = document.getElementsByClassName("genericButton number");
    console.table({ 'array buttons length': numberButtons.length, 'buttons type': typeof numberButtons });

    function addNumberToInput(num) {
        if (inputField.value === "0") {
            inputField.value = num.toString();
        } else {
            inputField.value += num.toString();
        }
    }

    var storedNumber = null;
    var nextOperation = null;
    function AdditionButtonClick() {
        storedNumber = Number(inputField.value);
        console.log("current number = " + storedNumber);
        nextOperation = "addition";
        console.log("next operation = " + nextOperation);
        inputField.value = 0;
    }

    document.getElementsByClassName("blueButton +")[0].addEventListener("click", AdditionButtonClick);

    function EqualsButtonClick() {
        if (nextOperation === "addition") {
            inputField.value = storedNumber + Number(inputField.value);
            console.log(inputField.value)
        }    

        storedNumberNumber = null;
        nextOperation = null;
    }
    document.getElementsByClassName("genericButton =")[0].addEventListener('click', EqualsButtonClick);

    for (var i = 0; i < numberButtons.length; i++) {
        numberButtons[i].addEventListener('click', function() {
            addNumberToInput(Number(this.value));
        });
    }
});