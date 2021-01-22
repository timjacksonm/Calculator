const add = (a, b) => a+b;

const subtract = (a, b) => a-b;

const multiply = (a, b) => a*b;

const divide = (a, b) => a/b;

function operate(operator, a, b){
    const num1 = Number(a);
    const num2 = Number(b);

    const screenDialog = document.querySelector('#text');

    if(operator === '+'){
        screenDialog.textContent = add(num1,num2);
       }else if(operator === '-') {
        screenDialog.textContent = subtract(num1,num2);
       }else if(operator === '*') {
        screenDialog.textContent = multiply(num1,num2);
       }else if(operator === '/') {
        screenDialog.textContent = divide(num1,num2);
       }
};

function allButtons() {
    const numOne = document.querySelector('#one');
    numOne.addEventListener('click', () => { logDataArray(numOne.textContent), updateScreenText()});
    const numTwo = document.querySelector('#two');
    numTwo.addEventListener('click', () => { logDataArray(numTwo.textContent), updateScreenText()});
    const numThree = document.querySelector('#three');
    numThree.addEventListener('click', () => { logDataArray(numThree.textContent), updateScreenText()});
    const numFour = document.querySelector('#four');
    numFour.addEventListener('click', () => { logDataArray(numFour.textContent), updateScreenText()});
    const numFive = document.querySelector('#five');
    numFive.addEventListener('click', () => { logDataArray(numFive.textContent), updateScreenText()});
    const numSix = document.querySelector('#six');
    numSix.addEventListener('click', () => { logDataArray(numSix.textContent), updateScreenText()});
    const numSeven = document.querySelector('#seven');
    numSeven.addEventListener('click', () => { logDataArray(numSeven.textContent), updateScreenText()});
    const numEight = document.querySelector('#eight');
    numEight.addEventListener('click', () => { logDataArray(numEight.textContent), updateScreenText()});
    const numNine = document.querySelector('#nine');
    numNine.addEventListener('click', () => { logDataArray(numNine.textContent), updateScreenText()});
    const numZero = document.querySelector('#zero');
    numZero.addEventListener('click', () => { logDataArray(numZero.textContent), updateScreenText()});
    const addV = document.querySelector('#add');
    addV.addEventListener('click', () => { logDataArray(addV.textContent, addV.getAttribute('value')), screenShowOpt()});// passing two arguements because my textContent won't work on operate() for division and multiply ex (5 'X' 5 =NAN, but 5 '*' 5 =25)
    const subtractV = document.querySelector('#subtract');
    subtractV.addEventListener('click', () => { logDataArray(subtractV.textContent, subtractV.getAttribute('value')), screenShowOpt()});// add and subtract I just added values to aswell even though it wasn't really needed.
    const multiplyV = document.querySelector('#multiply');
    multiplyV.addEventListener('click', () => { logDataArray(multiplyV.textContent, multiplyV.getAttribute('value')), screenShowOpt()}); // the logDataArray() function populates the screen with arg[0] and the if statement uses arg[1]
    const divideV = document.querySelector('#divide');
    divideV.addEventListener('click', () => { logDataArray(divideV.textContent, divideV.getAttribute('value')), screenShowOpt()}); // --^

    const powerB = document.querySelector('#powerButton');
    powerB.addEventListener('click', () => { turnOnScreen()});

    const equalsB = document.querySelector('#equals');
    equalsB.addEventListener('click', () => { equalsKeyPress()});


}
function logDataArray() {
    // const screenDialog = document.querySelector('#text');
    // screenDialog.textContent = arguments[0];

    let intiger = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let operator = ['+', '-', '*', '/']

    if(intiger.includes(Number(arguments[0]))) {
        if(operateInput.includes('nothing')) {
            numBeforeOp.push(arguments[0]);
        }else
        numAfterOp.push(arguments[0]);
    }else if(operator.includes(arguments[1])) {
        operateInput.pop();
        operateInput.push(arguments[1]);
    }
}
function turnOnScreen() {
    const selectBackroundColor = document.querySelector('#screen');

    selectBackroundColor.classList.add('screenStyle');

}
function updateScreenText () {
    const screenDialog = document.querySelector('#text');

    if(operateInput.includes('nothing')) {
    screenDialog.textContent = numBeforeOp.join('');
    }else
    screenDialog.textContent = numAfterOp.join(''); // can shorten since its boolean true false
}
function screenShowOpt() {
    const screenDialog = document.querySelector('#text');

    screenDialog.textContent = operateInput;
}
allButtons();
let numBeforeOp = [];
let operateInput = ['nothing'];
let numAfterOp = [];

function equalsKeyPress() {
    let numPassA = numBeforeOp.join('');
    let numPassB = numAfterOp.join('');

operate(operateInput[0], numPassA, numPassB);
}

