function clearScreen() {

    document.getElementById("result").value = "";
}

function backspace() {

    event.preventDefault();
    var currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

let decimalPressed = false;

//?DONE todo: Division by 0 cannot be done - Cannot accept 2 operators in a row
//?DONE todo: Add sqrt and power at the calc
//?DONE todo: autocomple 0 if starting with / or * operator so the evaluation is (0 / or *) a number
//?DONE todo: add spaces before and after an operator

function display(value) {

    const input = document.getElementById("result");
    const currentValue = input.value;
    const lastChar = currentValue[currentValue.length - 1];

    //Prevention from spamming 0's && Prevention from starting with a + operator
    if ((value === "0" && (currentValue === "")) || (currentValue === "" && (value === "+")) || (currentValue != "" && (value === "√")) 
        || (lastChar === " " && (value === "+" || value === "-" || value === "*" || value === "/")) || (lastChar === " " && (value === "^2"))) {

        return;
    }
    
    //Prevention of getting two operators in a row
    if ((value === "+" || value === "-" || value === "*" || value === "/" || value === "√" || value === "^2") &&
        (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" ||
            lastChar === "^2" || (currentValue.endsWith("^2")) || (currentValue.startsWith("√")))) {

        return;
    }

    // Case that there is an operator before a float number and adding a zero before the . && Case of trying to multiply or divide or power 0 with something
    if ((value === "." && (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/")) 
        || (currentValue === "" && (value === "*" || value === "/" || value === "^2"))) {

        input.value = currentValue + "0" + value;
    }else if (value === "." && currentValue === "") {  //Case that this is the first number in the display section and adding a zero before the .

        input.value = "0" + value;
    }else if(currentValue != "" && (value === "+" || value === "-" || value === "*" || value === "/")) { //Adding spaces between op and num

        input.value = currentValue + " " + value + " ";
    }else if (value === "." && lastChar === " ") { //After a space is added lastChar is " " so I have to add a 0 before the floating point
    
        input.value = currentValue + "0" + value;
    }else {
        
        input.value = currentValue + value;
    }
    
}

//?DONE todo: When input is undefined it shows the undefined message in the display section! FIX

function calculate() {

    event.preventDefault();
    var n1 = document.getElementById("result").value;

    if(n1 === "") {

        document.getElementById("result").value = "";
        return;
    }

    if (n1.includes("√")) {

        var number = n1.slice(1);
        if (isNaN(parseFloat(number))) {

            document.getElementById("result").value = "Invalid input";
            return;
        }

        var result = Math.sqrt(parseFloat(number));
        document.getElementById("result").value = result;
        return;
    }

    if (n1.includes("^2")) {

        var number = n1.slice(0, -2);
        var result = Math.pow(number, 2);
        document.getElementById("result").value = result;
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


//?DONE todo: Add event.keycode so it is responsive with keyboard

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


function switchTheme() {

    var element = document.body;
    element.classList.toggle("light-mode");
}
