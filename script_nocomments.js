
document.addEventListener('DOMContentLoaded', (event) => {
    var inputField = document.getElementById("inputNumber"); 
    var numberButtons = document.getElementsByClassName("genericButton number");
    console.table({ 'array buttons length': numberButtons.length, 'buttons type': typeof numberButtons });

    var plusButton = document.getElementsByClassName("blueButton +")
    console.log("plusButton = " + plusButton[0].value); 

    function addNumberToInput(num) {
        inputField.value = 0; 
        inputField.value = (Number(inputField.value) + num).toString();
    }

    for (var i = 0; i < numberButtons.length; i++) { 
        numberButtons[i].addEventListener('click', function() { 
            addNumberToInput(Number(this.value));
            console.log('value of button added = ' + this.value);
        });
    }
});