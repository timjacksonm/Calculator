const add = (a, b) => a+b;

const subtract = (a, b) => a-b;

const multiply = (a, b) => a*b;

const divide = (a, b) => a/b;

function operate(operator, a, b){
    const num1 = Number(a);
    const num2 = Number(b);

    const screenDialog = document.querySelector('#text');

    if(operator === '+'){
        result = add(num1,num2);
        screenDialog.textContent = add(num1,num2);
       }else if(operator === '-') {
           result = subtract(num1,num2);
        screenDialog.textContent = subtract(num1,num2);
       }else if(operator === '*') {
           result = multiply(num1,num2);
        screenDialog.textContent = multiply(num1,num2);
       }else if(operator === '/') {
           result = divide(num1,num2);
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

    const allClear = document.querySelector('#allClear');
    allClear.addEventListener('click', ()  => allClearPress());
}
function logDataArray() {
    let intiger = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    
    let box1 = [];
    let box2 = [];

    if (intiger.includes(arguments[0])) {
        if (operateInput.includes('nothing')){
        box1.push(arguments[0]);                //Before operater add subtract divide multiply are called
        numBeforeOp = box1.join('');            //Adds to global array
        } else
            box2.push(arguments[0]);            //if above is false - must be after operaterInput has been chosen.
            numAfterOp = box2.join('');

    } else if(operateInput.includes('nothing')) { // this checks if an operator has already been called before
                operateInput.pop(); // pops out 'nothing' string
                operateInput.push(arguments[1]); // puts in first chosen operator
            
    } else if(result.length === 1) { // if there is something in the operatorInput  is ther also something in result?
                numBeforeOp = result; //if true numBeforeOp will need to = current result
                numAfterOp = []; //numAfterOp needs to be 0 so user can select another number
                operateInput.pop(); // current op removed
                operateInput.push(arguments[1]); // new op added
    } else {
        equalsKeyPress(); // if nothing in result. user may have done 1+1+ <-- added another op to equation.
        numBeforeOp = result; //we evaluate the equation. add result to numBeforeOp
        operateInput.pop(); //remove old op
        operateInput.push(arguments[1]); // put new one in.
        
    }
}
function turnOnScreen() {
    const selectBackgroundColor = document.querySelector('#screen');

    selectBackgroundColor.getAttribute('class') === 'textSize screenStyle' ?
        selectBackgroundColor.classList.remove('screenStyle') :
        selectBackgroundColor.classList.add('screenStyle');
}
function updateScreenText () {
    const screenDialog = document.querySelector('#text');

    operateInput.includes('nothing') ?
    screenDialog.textContent = numBeforeOp :
    screenDialog.textContent = numAfterOp;
}
function screenShowOpt() {
    const screenDialog = document.querySelector('#text');

    screenDialog.textContent = operateInput;
}
function equalsKeyPress() {
operate(operateInput[0], numBeforeOp, numAfterOp);
}
function allClearPress() {
    const screenDialog = document.querySelector('#text');

    numBeforeOp = [];
    operateInput = ['nothing'];
    numAfterOp = [];

    screenDialog.textContent = '';
}
// function clearPress() {
//     numBeforeOp = [];
//     numAfterOp = [];
// } doesn't do anything yet
allButtons();
let numBeforeOp = [];
let operateInput = ['nothing'];
let numAfterOp = [];
let result = [];

