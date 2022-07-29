var Num = document.querySelector("#display");
var num1 = "";
var num2 = "";
var op = "";

function press(element) {
    num1 += element;
    Num.innerHTML = num1;
    console.log(num1);
}

function setOP(element) {
    op = element;
    num2 = num1;
    num1 = "";
    Num.innerHTML = num2;
    console.log(op);
}

function clr() {
    num1 = "";
    num2 = "";
    op = "";
}

function calculate(element) {
    if (op == "+") {
        result = parseInt(num1) + parseInt(num2);
    }
    if (op == "-") {
        result = parseInt(num1) - parseInt(num2);
    }
    if (op == "*") {
        result = parseInt(num1) * parseInt(num2);
    }
    if (op == "/") {
        result = parseInt(num1) / parseInt(num2);
    }
    Num.innerHTML = result;
    console.log(result);
    num1 = "";
    num2 = "";
    op = "";
}