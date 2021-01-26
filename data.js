function operate(operator, a, b){
    const add = (a, b) => a+b;
    const subtract = (a, b) => a-b;
    const multiply = (a, b) => a*b;
    const divide = (a, b) => a/b;
    const num1 = Number(a);
    const num2 = Number(b);
    let result = 0;

    const screenDialog = document.querySelector('#text');

    if(arguments[0] == '+'){
        result = add(num1,num2);
        data.result = Number((result).toFixed(2));
       }else if (arguments[0] == '-') {
           result = subtract(num1,num2);
           data.result = Number((result).toFixed(2));
       }else if(arguments[0] == '*') {
           result = multiply(num1,num2);
           data.result = Number((result).toFixed(2));
       }else if(arguments[0] == '/') {
           if (data.numAfterOp == '0') {
           accessDenied();
           } else {
           result = divide(num1,num2);
           data.result = Number((result).toFixed(2));
           }
       };
    screenDialog.textContent = data.result;
};
function allButtons() {
    const numOne = document.querySelector('#one');
    numOne.addEventListener('click', () => { logDataArray(numOne.textContent), updateScreenText()});
    document.addEventListener('keydown', key => { if(key.key == "1"){logDataArray("1"); updateScreenText();}});

    const numTwo = document.querySelector('#two');
    numTwo.addEventListener('click', () => { logDataArray(numTwo.textContent), updateScreenText()});
    document.addEventListener('keydown', key => {if(key.key == "2"){logDataArray("2"); updateScreenText();}});

    const numThree = document.querySelector('#three');
    numThree.addEventListener('click', () => { logDataArray(numThree.textContent), updateScreenText()});
    document.addEventListener('keydown', key => {if(key.key == "3"){logDataArray("3"); updateScreenText()}});

    const numFour = document.querySelector('#four');
    numFour.addEventListener('click', () => { logDataArray(numFour.textContent), updateScreenText()});
    document.addEventListener('keydown', key => {if(key.key == "4"){logDataArray("4"); updateScreenText()}});

    const numFive = document.querySelector('#five');
    numFive.addEventListener('click', () => { logDataArray(numFive.textContent), updateScreenText()});
    document.addEventListener('keydown', key => {if(key.key == "5"){logDataArray("5"); updateScreenText();}});
    
    const numSix = document.querySelector('#six');
    numSix.addEventListener('click', () => { logDataArray(numSix.textContent), updateScreenText()});
    document.addEventListener('keydown', key => {if(key.key == "6"){logDataArray("6"); updateScreenText();}});

    const numSeven = document.querySelector('#seven');
    numSeven.addEventListener('click', () => { logDataArray(numSeven.textContent), updateScreenText()});
    document.addEventListener('keydown', key => {if(key.key == "7"){logDataArray("7"); updateScreenText();}});

    const numEight = document.querySelector('#eight');
    numEight.addEventListener('click', () => { logDataArray(numEight.textContent), updateScreenText()});
    document.addEventListener('keydown', key => {if(key.key == "8"){logDataArray("8"); updateScreenText();}});
    
    const numNine = document.querySelector('#nine');
    numNine.addEventListener('click', () => { logDataArray(numNine.textContent), updateScreenText()});
    document.addEventListener('keydown', key => {if(key.key == "9"){logDataArray("9"); updateScreenText();}});

    const numZero = document.querySelector('#zero');
    numZero.addEventListener('click', () => { logDataArray(numZero.textContent), updateScreenText()});
    document.addEventListener('keydown', key => {if(key.key == "0"){logDataArray("0"); updateScreenText();}});

    const addV = document.querySelector('#add');
    addV.addEventListener('click', () => { logDataArray(addV.textContent, addV.getAttribute('value')), screenShowOpt()});
    document.addEventListener('keydown', key => {if(key.key == "+"){logDataArray(addV.textContent); screenShowOpt();}});

    const subtractV = document.querySelector('#subtract');
    subtractV.addEventListener('click', () => { logDataArray(subtractV.textContent, subtractV.getAttribute('value')), screenShowOpt()});
    document.addEventListener('keydown', key => {if(key.key == "-"){logDataArray(subtractV.textContent); screenShowOpt();}});

    const multiplyV = document.querySelector('#multiply');
    multiplyV.addEventListener('click', () => { logDataArray(multiplyV.textContent, multiplyV.getAttribute('value')), screenShowOpt()});
    document.addEventListener('keydown', key => {if(key.key == "*"){logDataArray(multiplyV.textContent, multiplyV.getAttribute('value')); screenShowOpt()}});

    const divideV = document.querySelector('#divide');
    divideV.addEventListener('click', () => { logDataArray(divideV.textContent, divideV.getAttribute('value')), screenShowOpt()});
    document.addEventListener('keydown', key => {if(key.key == "/"){logDataArray(divideV.textContent, divideV.getAttribute('value')); screenShowOpt();}});

    const decimalV = document.querySelector('#decimal');
    decimalV.addEventListener('click', () => { logDataArray(decimalV.textContent), updateScreenText()});
    document.addEventListener('keydown', key => {if(key.key == "."){logDataArray(decimalV.textContent), updateScreenText()}});
    
    const percentageB = document.querySelector('#percent');
    percentageB.addEventListener('click', () => { percentageButton()});
    document.addEventListener('keydown', key => {if(key.key == "%"){percentageButton()}});

    const powerB = document.querySelector('#powerButton');
    powerB.addEventListener('click', () => { turnOnScreen();});

    const equalsB = document.querySelector('#equals');
    equalsB.addEventListener('click', () => { equalsKeyPress()});
    document.addEventListener('keydown', key => {if(key.key == "=" || key.key == "Enter"){(equalsKeyPress())}});

    const allClear = document.querySelector('#allClear');
    allClear.addEventListener('click', ()  => allClearPress());

    const clearBackspace = document.querySelector('#clear');
    clearBackspace.addEventListener('click', () => clearPress());
    document.addEventListener('keydown', key => {if(key.key == "Backspace"){clearPress();}});

    const changePlusNegative = document.querySelector('#changePlusNegative')
    changePlusNegative.addEventListener('click', () => plusNegativeButton());
};
function logDataArray() {
    //The first part to this If statment is for intigers only.
    if (data.intigerCompare.includes(arguments[0])) {
        if (data.operatorInput.includes('nothing')) {
            data.numBeforeOp.push(arguments[0]); // First number of equation.
        } else { // Below this line starts if operatorInput includes an operator.
            if (data.result.length === 0) {
                data.numAfterOp.push(arguments[0]); // Second number of equation.
            } else {
                if (data.numAfterOp.length >= 1 && data.numBeforeOp != data.result) { //This line runs if 2+2=4 and then press 2 with no operator. so we start the equation from the beginning
                    allClearPress();
                    data.numBeforeOp.push(arguments[0]);
                }else if (data.numAfterOp.length >= 1 && data.numBeforeOp == data.result) { //This line runs if its 2+2=4+ more than one intiger
                    data.numAfterOp.push(arguments[0]);
                }else {
                data.numAfterOp.push(arguments[0]); //This line runs if 2+2=4 + a single
                }
            }
        } 
    //This second part of this if statment below is for operators only.
    } else if (data.operatorInput.includes('nothing')) {
        data.operatorInput = Array.from(arguments[1] || arguments[0]); // same as below.

    } else { //This line runs when we already have a beforeOp intiger / operatorInput / afterOp intiger. Calculates problem before moving onto next.
        equalsKeyPress();
        data.operatorInput = Array.from(arguments[1] || arguments[0]); // Two arguments why? allButtons() needs a second argument for multiply & divide to work. text value won't work with javascript.
        data.numBeforeOp = data.result;
        data.numAfterOp = [];
    };
};
function turnOnScreen() {
    const selectBackgroundColor = document.querySelector('#screen');
    let powerOn = new Audio('./graphics/529929__vishwajay__boop-852-mhz.wav');
    let powerOff = new Audio('./graphics/529930__vishwajay__boop-741-mhz.wav');

    if (selectBackgroundColor.getAttribute('class') === 'textSize screenStyle') {
        selectBackgroundColor.classList.remove('screenStyle')
        powerOff.play();
        allClearPress();
        disableButtons(true);
    }else {
        selectBackgroundColor.classList.add('screenStyle');
        powerOn.play();
        disableButtons(false);
    };
};
function accessDenied() {
    let audio = new Audio('./graphics/dennis_nedry_ahahah.mp3');
    audio.play();
    data.result = "Access Denied";
};
function updateScreenText () {
    const screenDialog = document.querySelector('#text');

    let num1 = data.numBeforeOp;
    let num2 = data.numAfterOp;

    if(data.numBeforeOp.length >= 2){num1 = data.numBeforeOp.join('')};

    if(data.numAfterOp.length >= 2){num2 = data.numAfterOp.join('')};

    data.operatorInput.includes('nothing') ? screenDialog.textContent = num1
    : screenDialog.textContent = data.copyText + num2;
};
function screenShowOpt() {
    const screenDialog = document.querySelector('#text');
    data.copyText = screenDialog.textContent + data.operatorInput;

    screenDialog.textContent = data.copyText;
};
function equalsKeyPress() {
    let num1 = data.numBeforeOp;
    let num2 = data.numAfterOp;

    if(data.numBeforeOp.length >= 2){num1 = data.numBeforeOp.join('')};

    if(data.numAfterOp.length >= 2){num2 = data.numAfterOp.join('')};

    operate(data.operatorInput, num1, num2);
};
function allClearPress() {
    const screenDialog = document.querySelector('#text');

    data = {
        intigerCompare: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'],
        operatorCompare: ['+', '-', '*', '/'],
        numBeforeOp: [],
        operatorInput: ['nothing'],
        numAfterOp: [],
        result: '',
    };

    screenDialog.textContent = '';
};
function disableButtons() {
    selectButtons = document.querySelector('#buttonContainer').querySelectorAll('button');
    selectButtons.forEach((button) => {
        button.disabled = arguments[0];
        }
    );
};
function clearPress() {
    //This function is similar to hitting backspace on keyboard.
    const screenDialog = document.querySelector('#text');

    let num1 = data.numBeforeOp;
    let num2 = data.numAfterOp;

    if(data.numBeforeOp.length >= 2){num1 = data.numBeforeOp.join('')};

    if(data.numAfterOp.length >= 2){num2 = data.numAfterOp.join('')};

    if (data.operatorInput == 'nothing') {
        data.numBeforeOp.pop();
        updateScreenText();
    } else if (data.operatorInput == '+' || '-' || '*' || '/' ) {
        data.numAfterOp.pop();
        updateScreenText();
    }else {
        //do nothing because result is on screen.
    };
};
function plusNegativeButton () {
    let value = '-';

    if (data.operatorInput.includes('nothing')) {
        if (data.numBeforeOp.includes(value)) {
            data.numBeforeOp.splice(0,1);
        } else {
    data.numBeforeOp.unshift(value)
        }
    } else {
        if (data.numAfterOp.includes(value)) {
            data.numAfterOp.splice(0,1)
        } else {
    data.numAfterOp.unshift(value);
        }
    }

    updateScreenText();
};
function percentageButton () {
    let x = 0;
    let y = 0;
    let z = 0;

    if (data.operatorInput.includes('nothing')) {
        data.numBeforeOp = data.numBeforeOp.join('');
        data.numBeforeOp = Array.from((data.numBeforeOp / 100).toString());
    } else if (data.operatorInput.includes('+')) {
        x = Number(data.numAfterOp.join(''));
        y = Number(data.numBeforeOp.join(''));
        z = ( y * ( x / 100));
        data.numAfterOp = Array.from(z.toString());  
    } else if (data.operatorInput.includes('*')) {
        data.numAfterOp = data.numAfterOp.join('');
        data.numAfterOp = Array.from((data.numAfterOp / 100).toString());
    } else if (data.operatorInput.includes('-')) {
        x = Number(data.numAfterOp.join(''));
        y = Number(data.numBeforeOp.join(''));
        z = ( y * ( x / 100));
        data.numAfterOp = Array.from(z.toString());  
    }else if (data.operatorInput.includes('/')) {
        data.numAfterOp = data.numAfterOp.join('');
        data.numAfterOp = Array.from((data.numAfterOp / 100).toString());
    }
    updateScreenText();
};
allButtons();
disableButtons(true);
let data = {
    intigerCompare: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'],
    operatorCompare: ['+', '-', '*', '/'],
    numBeforeOp: [],
    operatorInput: ['nothing'],
    numAfterOp: [],
    result: '',
    copyText: [],
};
