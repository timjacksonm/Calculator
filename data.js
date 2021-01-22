const add = (a, b) => a+b;

const subtract = (a, b) => a-b;

const multiply = (a, b) => a*b;

const divide = (a, b) => a/b;

function operate(operator, a, b){
    const num1 = a;
    const num2 = b;

    if(operator === '+'){
        return add(num1,num2);
       }else if(operator === '-') {
        return subtract(num1,num2);
       }else if(operator === '*') {
        return multiply(num1,num2);
       }else if(operator === '/') {
        return divide(num1,num2);
       }
};

function allButtons() {
    const numOne = document.querySelector('#one');
    numOne.addEventListener('click', () => { screenDialog(numOne.textContent)});
    const numTwo = document.querySelector('#two');
    numTwo.addEventListener('click', () => { screenDialog(numTwo.textContent)});
    const numThree = document.querySelector('#three');
    numThree.addEventListener('click', () => { screenDialog(numThree.textContent)});
    const numFour = document.querySelector('#four');
    numFour.addEventListener('click', () => { screenDialog(numFour.textContent)});
    const numFive = document.querySelector('#five');
    numFive.addEventListener('click', () => { screenDialog(numFive.textContent)});
    const numSix = document.querySelector('#six');
    numSix.addEventListener('click', () => { screenDialog(numSix.textContent)});
    const numSeven = document.querySelector('#seven');
    numSeven.addEventListener('click', () => { screenDialog(numSeven.textContent)});
    const numEight = document.querySelector('#eight');
    numEight.addEventListener('click', () => { screenDialog(numEight.textContent)});
    const numNine = document.querySelector('#nine');
    numNine.addEventListener('click', () => { screenDialog(numNine.textContent)});
    const numZero = document.querySelector('#zero');
    numZero.addEventListener('click', () => { screenDialog(numZero.textContent)});
    const addV = document.querySelector('#add');
    addV.addEventListener('click', () => { screenDialog(addV.textContent)});
    const subtractV = document.querySelector('#subtract');
    subtractV.addEventListener('click', () => { screenDialog(subtractV.textContent)});
    const multiplyV = document.querySelector('#multiply');
    multiplyV.addEventListener('click', () => { screenDialog(multiplyV.textContent)});
    const divideV = document.querySelector('#divide');
    divideV.addEventListener('click', () => { screenDialog(divideV.textContent)});

    const powerB = document.querySelector('#powerButton');
    powerB.addEventListener('click', () => { turnOnScreen()});
}
function screenDialog() {
    let argArray = Array.from(arguments); // stop point for the night
    console.log(argArray)
    results = argArray[0].toString();
    const screenDialog = document.querySelector('#text');

    screenDialog.textContent = results;
}
function turnOnScreen() {
    const selectBackroundColor = document.querySelector('#screen');

    selectBackroundColor.classList.add('screenStyle');

}
allButtons();


