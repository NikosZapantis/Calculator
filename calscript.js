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

    //Checking all the cases here, such as prevention from 0's spamming, not accepting double operators etc.
    
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
