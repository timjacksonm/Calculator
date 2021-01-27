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
function keyboardSupportAdd() {
    //Calls functions from global data variable
    document.addEventListener('keydown', data.numOne);
    document.addEventListener('keydown', data.numTwo);
    document.addEventListener('keydown', data.numThree);
    document.addEventListener('keydown', data.numFour);
    document.addEventListener('keydown', data.numFive);
    document.addEventListener('keydown', data.numSix);
    document.addEventListener('keydown', data.numSeven);
    document.addEventListener('keydown', data.numEight);
    document.addEventListener('keydown', data.numNine);
    document.addEventListener('keydown', data.numZero);

    document.addEventListener('keydown', data.addV);
    document.addEventListener('keydown', data.subtractV);
    document.addEventListener('keydown', data.multiplyV);
    document.addEventListener('keydown', data.divideV);

    document.addEventListener('keydown', data.decimalV);
    document.addEventListener('keydown', data.percentageB);
    document.addEventListener('keydown', data.equalsB);
    document.addEventListener('keydown', data.clearBackspace);
};
function keyboardSuportRemove() {
    document.removeEventListener('keydown', data.numOne);
    document.removeEventListener('keydown', data.numTwo);
    document.removeEventListener('keydown', data.numThree);
    document.removeEventListener('keydown', data.numFour);
    document.removeEventListener('keydown', data.numFive);
    document.removeEventListener('keydown', data.numSix);
    document.removeEventListener('keydown', data.numSeven);
    document.removeEventListener('keydown', data.numEight);
    document.removeEventListener('keydown', data.numNine);
    document.removeEventListener('keydown', data.numZero);

    document.removeEventListener('keydown', data.addV);
    document.removeEventListener('keydown', data.subtractV);
    document.removeEventListener('keydown', data.multiplyV);
    document.removeEventListener('keydown', data.divideV);

    document.removeEventListener('keydown', data.decimalV);
    document.removeEventListener('keydown', data.percentageB);
    document.removeEventListener('keydown', data.equalsB);
    document.removeEventListener('keydown', data.clearBackspace);
}
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
    addV.addEventListener('click', () => { logDataArray(addV.textContent, addV.getAttribute('value')), screenShowOpt()});
    const subtractV = document.querySelector('#subtract');
    subtractV.addEventListener('click', () => { logDataArray(subtractV.textContent, subtractV.getAttribute('value')), screenShowOpt()});
    const multiplyV = document.querySelector('#multiply');
    multiplyV.addEventListener('click', () => { logDataArray(multiplyV.textContent, multiplyV.getAttribute('value')), screenShowOpt()});
    const divideV = document.querySelector('#divide');
    divideV.addEventListener('click', () => { logDataArray(divideV.textContent, divideV.getAttribute('value')), screenShowOpt()});

    const decimalV = document.querySelector('#decimal');
    decimalV.addEventListener('click', () => { logDataArray(decimalV.textContent), updateScreenText()});
    const percentageB = document.querySelector('#percent');
    percentageB.addEventListener('click', () => { percentageButton()});
    const equalsB = document.querySelector('#equals');
    equalsB.addEventListener('click', () => { equalsKeyPress()});
    
    const allClear = document.querySelector('#allClear');
    allClear.addEventListener('click', ()  => allClearPress());
    const clearBackspace = document.querySelector('#clear');
    clearBackspace.addEventListener('click', () => clearPress());
    const changePlusNegative = document.querySelector('#changePlusNegative')
    changePlusNegative.addEventListener('click', () => plusNegativeButton());

    const powerB = document.querySelector('#powerButton');
    powerB.addEventListener('click', () => { turnOnScreen();});
};
function logDataArray() {
    const selectButtons = document.querySelector('#buttonContainer').querySelectorAll('button');
    //The first part to this If statment is for intigers only.
    if (data.intigerCompare.includes(arguments[0])) {
        if (data.operatorInput.includes('nothing')) {
            if (data.intigerCompare[10] == arguments[0]) { // First Decimal before operatorInput
                selectButtons[5].disabled = true;
                data.numBeforeOp.push(arguments[0]);
            }else {
            data.numBeforeOp.push(arguments[0]); // First number of equation.
            }
        } else { // Below this line starts if operatorInput includes an operator.
            if (data.result.length === 0) {
                if (data.intigerCompare[10] == arguments[0]) { // First Decimal after operatorInput
                    selectButtons[5].disabled = true;
                    data.numAfterOp.push(arguments[0]);
                }else {
                    data.numAfterOp.push(arguments[0]); // Second number of equation.
                }
            } else {
                if (data.numAfterOp.length >= 1 && data.numBeforeOp != data.result) { //This line runs if 2+2=4 and then press 2 with no operator. so we start the equation from the beginning
                    allClearPress();
                    data.numBeforeOp.push(arguments[0]);
                    if (selectButtons[5].disabled){selectButtons[5].disabled = false;};

                }else if (data.numAfterOp.length >= 1 && data.numBeforeOp == data.result) { //This line runs if its 2+2=4+ more than one intiger
                    data.numAfterOp.push(arguments[0]);
                    if (data.intigerCompare[10] == arguments[0]){selectButtons[5].disabled = true;};

                }else {
                data.numAfterOp.push(arguments[0]); //This line runs if 2+2=4 + a single
                if (data.intigerCompare[10] == arguments[0]){selectButtons[5].disabled = true;};
                }
            }
        } 
    //This second part of this if statment below is for operators only.
    } else if (data.operatorInput.includes('nothing') || data.numAfterOp.length == 0) {
        data.operatorInput.pop();
        data.operatorInput = Array.from(arguments[1] || arguments[0]); // same as below.
        if (selectButtons[5].disabled) {selectButtons[5].disabled = false;};

    } else { //This line runs when we already have a beforeOp intiger / operatorInput / afterOp intiger. Calculates problem before moving onto next.
        equalsKeyPress();
        data.operatorInput = Array.from(arguments[1] || arguments[0]); // Two arguments why? allButtons() needs a second argument for multiply & divide to work. text value won't work with javascript.
        data.numBeforeOp = data.result;
        data.numAfterOp = [];
        if (selectButtons[5].disabled) {selectButtons[5].disabled = false;};
    };
};
function turnOnScreen() {
    const selectBackgroundColor = document.querySelector('#screen');
    let powerOn = new Audio('./graphics/529929__vishwajay__boop-852-mhz.wav');
    let powerOff = new Audio('./graphics/529930__vishwajay__boop-741-mhz.wav');

    if (selectBackgroundColor.getAttribute('class') === 'textSize screenStyle') {
        keyboardSuportRemove();
        selectBackgroundColor.classList.remove('screenStyle')
        powerOff.play();
        allClearPress();
        disableButtons(true);
    }else {
        keyboardSupportAdd();
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

    let num1 = data.numBeforeOp;
    let num2 = data.numAfterOp;

    if(data.numBeforeOp.length >= 2){num1 = data.numBeforeOp.join('')};

    if(data.numAfterOp.length >= 2){num2 = data.numAfterOp.join('')};

    if(data.operatorInput == '+' || '-' || '*' || '/' ){
        if(data.numAfterOp.length == 0){
        data.copyText = [];
        }
    }

    data.copyText = num1 + data.operatorInput;

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
        copyText: [],
        numOne: key => { if(key.key == "1"){logDataArray("1"); updateScreenText();}},
        numTwo: key => {if(key.key == "2"){logDataArray("2"); updateScreenText();}},
        numThree: key => {if(key.key == "3"){logDataArray("3"); updateScreenText()}},
        numFour: key => {if(key.key == "4"){logDataArray("4"); updateScreenText()}},
        numFive: key => {if(key.key == "5"){logDataArray("5"); updateScreenText();}},
        numSix: key => {if(key.key == "6"){logDataArray("6"); updateScreenText();}},
        numSeven: key => {if(key.key == "7"){logDataArray("7"); updateScreenText();}},
        numEight: key => {if(key.key == "8"){logDataArray("8"); updateScreenText();}},
        numNine: key => {if(key.key == "9"){logDataArray("9"); updateScreenText();}},
        numZero: key => {if(key.key == "0"){logDataArray("0"); updateScreenText();}},
        addV: key => {if(key.key == "+"){logDataArray("+"); screenShowOpt();}},
        subtractV: key => {if(key.key == "-"){logDataArray("-"); screenShowOpt();}},
        multiplyV: key => {if(key.key == "*"){logDataArray("*"); screenShowOpt()}},
        divideV: key => {if(key.key == "/"){logDataArray("/"); screenShowOpt();}},
        decimalV: key => {if(key.key == "."){logDataArray("."), updateScreenText()}},
        percentageB: key => {if(key.key == "%"){percentageButton()}},
        equalsB: key => {if(key.key == "=" || key.key == "Enter"){(equalsKeyPress())}},
        clearBackspace: key => {if(key.key == "Backspace"){clearPress();}},
    };

    const selectButtons = document.querySelector('#buttonContainer').querySelectorAll('button');

    if (selectButtons[5].disabled){selectButtons[5].disabled = false;};
        
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
    numOne: key => { if(key.key == "1"){logDataArray("1"); updateScreenText();}},
    numTwo: key => {if(key.key == "2"){logDataArray("2"); updateScreenText();}},
    numThree: key => {if(key.key == "3"){logDataArray("3"); updateScreenText()}},
    numFour: key => {if(key.key == "4"){logDataArray("4"); updateScreenText()}},
    numFive: key => {if(key.key == "5"){logDataArray("5"); updateScreenText();}},
    numSix: key => {if(key.key == "6"){logDataArray("6"); updateScreenText();}},
    numSeven: key => {if(key.key == "7"){logDataArray("7"); updateScreenText();}},
    numEight: key => {if(key.key == "8"){logDataArray("8"); updateScreenText();}},
    numNine: key => {if(key.key == "9"){logDataArray("9"); updateScreenText();}},
    numZero: key => {if(key.key == "0"){logDataArray("0"); updateScreenText();}},
    addV: key => {if(key.key == "+"){logDataArray("+"); screenShowOpt();}},
    subtractV: key => {if(key.key == "-"){logDataArray("-"); screenShowOpt();}},
    multiplyV: key => {if(key.key == "*"){logDataArray("*"); screenShowOpt()}},
    divideV: key => {if(key.key == "/"){logDataArray("/"); screenShowOpt();}},
    decimalV: key => {if(key.key == "."){logDataArray("."), updateScreenText()}},
    percentageB: key => {if(key.key == "%"){percentageButton()}},
    equalsB: key => {if(key.key == "=" || key.key == "Enter"){(equalsKeyPress())}},
    clearBackspace: key => {if(key.key == "Backspace"){clearPress();}},
};
