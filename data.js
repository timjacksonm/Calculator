const add = (a, b) => a+b;

const subtract = (a, b) => a-b;

const multiply = (a, b) => a*b;

const divide = (a, b) => a/b;

function operate(operator, a, b){
    const num1 = Number(a);
    const num2 = Number(b);

    const screenDialog = document.querySelector('#text');

    if(arguments[0] == '+'){
        data.result = add(num1,num2);
       }else if (arguments[0] == '-') {
           data.result = subtract(num1,num2);
       }else if(arguments[0] == '*') {
           data.result = multiply(num1,num2);
       }else if(arguments[0] == '/') {
           if (data.numAfterOp == '0') {
           accessDenied();
           } else
           data.result = divide(num1,num2);
       }
    screenDialog.textContent = data.result;
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
    if (data.intigerCompare.includes(arguments[0])) {
        if (data.operatorinput.includes('nothing')) {
            data.numBeforeOp.push(arguments[0]);
        } else if (data.operatorCompare.includes(data.operatorinput[0])) {
            if (data.result.length === 0) {
                data.numAfterOp.push(arguments[0]);
            } else {
                data.numAfterOp.push(arguments[0]);
            }
        } 
 
    } else if (data.operatorinput.includes('nothing')) {
        data.operatorinput = Array.from(arguments[1]);

    } else {
        equalsKeyPress();
        data.operatorinput = Array.from(arguments[1]);
        data.numBeforeOp = data.result;
        data.numAfterOp = [];
    }
};
function turnOnScreen() {
    const selectBackgroundColor = document.querySelector('#screen');

    selectBackgroundColor.getAttribute('class') === 'textSize screenStyle' ?
        selectBackgroundColor.classList.remove('screenStyle') :
        selectBackgroundColor.classList.add('screenStyle');
}
function accessDenied() {
    let audio = new Audio('./graphics/dennis_nedry_ahahah.mp3');
    audio.play();
    data.result = "Access Denied";
}
function updateScreenText () {
    const screenDialog = document.querySelector('#text');

    let num1 = data.numBeforeOp;
    let num2 = data.numAfterOp;

    data.numBeforeOp.length >= 2 ?
    num1 = data.numBeforeOp.join('') :
    false;

    data.numAfterOp.length >= 2 ?
    num2 = data.numAfterOp.join('') :
    false;

    data.operatorinput.includes('nothing') ?
    screenDialog.textContent = num1 :
    screenDialog.textContent = num2;
}
function screenShowOpt() {
    const screenDialog = document.querySelector('#text');

    screenDialog.textContent = data.operatorinput;
}
function equalsKeyPress() {
    let num1 = data.numBeforeOp;
    let num2 = data.numAfterOp;

    data.numBeforeOp.length >= 2 ?
    num1 = data.numBeforeOp.join('') :
    false;

    data.numAfterOp.length >= 2 ?
    num2 = data.numAfterOp.join('') :
    false;

    
operate(data.operatorinput, num1, num2);
}
function allClearPress() {
    const screenDialog = document.querySelector('#text');

    data = {
        intigerCompare: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        operatorCompare: ['+', '-', '*', '/'],
        numBeforeOp: [],
        operatorinput: ['nothing'],
        numAfterOp: [],
        result: '',
    }

    screenDialog.textContent = '';
}
// function clearPress() {
//     numBeforeOp = [];
//     numAfterOp = [];
// } doesn't do anything yet
allButtons();
let data = {
    intigerCompare: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    operatorCompare: ['+', '-', '*', '/'],
    numBeforeOp: [],
    operatorinput: ['nothing'],
    numAfterOp: [],
    result: '',
}
