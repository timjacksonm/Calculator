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
