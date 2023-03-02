function clearScreen() {

    document.getElementById("result").value = "";
}

function display(value) {

    document.getElementById("result").value += value;
}

function calculate() {

    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

document.addEventListener("keydown", function(event) {

    var keyCode = event.keyCode;
    var keyValue = event.key;
    var validKeys = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/",".", "Enter", "Backspace", "Delete"];
    if (validKeys.includes(keyValue)) {
        if (keyValue === "Enter") {
            calculate();
        } else if (keyValue === "Backspace" || keyValue === "Delete") {
            clearScreen();
        } else {
            display(keyValue);
        }
    }
});