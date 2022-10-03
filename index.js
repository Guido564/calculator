const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');
const clear = document.querySelector('.clear');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalKey = document.querySelector('.equal');
let result = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';

equalKey.addEventListener('click', () => {
    if (firstNumber == '') {
        input.value = 'Nothingness!'
    } else if (operator == '') {
        input.value = firstNumber
    } else if (secondNumber == '') {
        input.value = 'You are doing it wrong!'
    } else {
        doMath()
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
        if (operator != '') {
            doMath()
            operator = op.id
        } else {
            if (firstNumber == '') {
                firstNumber += op.id;
            } else {
                operator += op.id;
            }
        }
    })
})

clear.addEventListener('click', () => {
    input.value = '';
    result = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
})

buttons.forEach((button) => {
        button.addEventListener('click', () => {
            input.value += button.id;
            result = input.value;
        })
})

function doMath() {
    result = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
    firstNumber = result;
    input.value = result;
    operator = '';
    secondNumber = '';
}

function operate(a, b, operator) {
    switch(operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default:
            return 'Valores incorrectos';
    }
}

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
    if(a == 0 || b == 0) {
        return '¯\\_(ツ)_/¯'
    } else {
        return a / b;
    }
}