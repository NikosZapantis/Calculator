function clearScreen() {

    document.getElementById("result").value = "";
}

function backspace() {

    event.preventDefault();
    var currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

let decimalPressed = false;

//TODO: Division by 0 cannot be done - Cannot accept 2 operators in a row
function display(value) {

    const input = document.getElementById("result");
    const currentValue = input.value;
    const lastChar = currentValue[currentValue.length - 1];
  
    //Prevention from spamming 0's
    if (value === "0" && (currentValue === "" || currentValue === "0")) {

        return;
    }

    //Prevention from starting with an operator
    if (currentValue === "" && (value === "+" || value === "-" || value === "*" || value === "/")) {

        return;
    }

    //Prevention of getting two operators in a row
    if ((value === "+" || value === "-" || value === "*" || value === "/") && (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/")) {

        return;
    }

    // Case that there is an operator before a float number and adding a zero before the .
    if (value === '.' && (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/')) {

        input.value = currentValue + '0' + value;
    }else if (value === '.' && currentValue === '') {  //Case that this is the first number in the display section and adding a zero before the .

        input.value = '0' + value;
    }else {

        input.value = currentValue + value;
    }
}

//?DONE: When input is undefined it shows the undefined message in the display section! FIX

function calculate() {

    event.preventDefault();
    var n1 = document.getElementById("result").value;

    if(n1 === "") {

        document.getElementById("result").value = "";
        return;
    }

    var n2 = eval(n1);
    if (n2 === Infinity) {

        document.getElementById("result").value = "division by 0 isn't possible";
        setTimeout(function(){ document.getElementById("result").value = ""; }, 3000);
        return;
    }

    document.getElementById("result").value = n2;
}

document.addEventListener("keydown", function(event) {

    var keyCode = event.keyCode;
    var keyValue = event.key;
    var validKeys = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/",".", "Enter", "Backspace", "Delete"];
    if (validKeys.includes(keyValue)) {
        if (keyValue === "Enter") {

            calculate();
        } else if (keyValue === "Delete") {

            clearScreen();
        } else if (keyValue === "Backspace") {

            backspace();
        } else {

            display(keyValue);
        }
    }
});
