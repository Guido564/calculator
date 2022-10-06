const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');
const clear = document.querySelector('.clear');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalKey = document.querySelector('.equal');
const lastIndex = document.querySelector('.last-index');
const github = document.querySelector('.github');
const float = document.querySelector('.float');

let result = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';
input.value = '';

float.addEventListener('click', floatNumber)

function floatNumber() {
    if (!operator) {
        if (!firstNumber.toString().includes('.')) {
            if (firstNumber.toString() === '') {
                firstNumber = '0.';
                input.value = '0.';
            } else {
                firstNumber += '.';
                input.value += '.';
            }
        }
    } else {
        if (!secondNumber.includes('.')) {
            if (secondNumber === '') {
                secondNumber = '0.';
                input.value += '0.';
            } else {
                secondNumber += '.';
                input.value += '.';
            }
        }
    }
}

github.addEventListener('click', () => {
    input.value = 'Guido564 :)       ';
})

lastIndex.addEventListener('click', () => {
    if (operator && secondNumber != '') {
        secondNumber = secondNumber.slice(0, -1);
    } else if (operator && secondNumber == '') {
        operator = operator.slice(0, -1);
    } else if (firstNumber) {
        firstNumber = firstNumber.toString().slice(0, -1);
    }

    result = result.slice(0, -1); 
    input.value = result;
})

equalKey.addEventListener('click', () => {
    if (firstNumber === '') {
        console.log('Nothing is going to happen boy');
    } else if (operator == '') {
        input.value = firstNumber;
    } else if (secondNumber == '') {
        console.log('Still nothing');
    } else {
        doMath();
    }
}) 

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (operator == '') {
            firstNumber += number.id;
        } else {
            secondNumber += number.id;
        }
    }) 
})

operators.forEach((op) => {
    op.addEventListener('click', () => {
        let comp = result.toString().charAt(result.length-1);
        if(comp == '/' || comp == '+' || comp == '%' || comp == '*' || comp == '-') {
            result = result.slice(0, -1); 
            input.value = result;
            operator = op.id;
        } else if (operator != '') {
            doMath();
            operator = op.id;
        } else {
            if (firstNumber === '') {
                input.value = 0;
                firstNumber = 0;
                operator = op.id;
            } else {
                operator += op.id;
            }
        }
    })
})

clear.addEventListener('click', () => {
    firstNumber = '';
    input.value = firstNumber;
    result = '';
    secondNumber = '';
    operator = '';
})

buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.id != '.') {
                input.value += button.id;
                result = input.value;
            }
        })
})


function doMath() {
    result = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
    firstNumber = result;
    input.value = result;
    operator = '';
    secondNumber = '';
}

//funcion principal a correr
function operate(a, b, operator) {
    switch(operator) {
        case '+':
            a = add(a, b);
            return Math.round(a * 100)/100
            ;
            break;
        case '-':
            a = subtract(a, b)
            return Math.round(a * 100)/100;
            break;
        case '*':
            a = multiply(a, b)
            return Math.round(a * 100)/100;
            break;
        case '/':
            a = divide(a, b)
            return Math.round(a * 100)/100;
            break;
        case '%':
            a = remainder(a, b)
            return Math.round(a * 100)/100;
        default:
            return 'Unexpected';
    }
}

//Operaciones basicas que corre la calculadora
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b == 0) {
        return '¯\\_(ツ)_/¯       '
    } else {
        return a / b;
    }
}

function remainder(a, b) {
    if(b == 0) {
        return 'ಠ_ಠ             '
    } else {
        return a % b;
    }
}