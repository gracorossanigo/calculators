function add(a, b){
    return a + b;
}
const subtract = function (a, b){
    return a - b;
}
const multiply = function (a, b){
    return a * b;
}
const divide = function (a, b){
    return a / b;
}
function operate(operator, a, b){
    return operator(Number(a), Number(b));
}   
const printToScreen = function (value) {
    document.getElementById('visor').querySelector('h1').textContent = `${value}`
}
const parseDisplayValue = function(displayValue){
    splitArray = displayValue.split(' ');
    return splitArray;
}
const calculate = function (displayValue){
    splitArray = parseDisplayValue(displayValue);
    for (i = 0; i < splitArray.length; i++){
        if (operators.includes(splitArray[i])){
            switch (splitArray[i]){
                case '+': printToScreen( operate(add, splitArray[i-1], splitArray[i+1]));
// TODO: ADD THE REST OF THE OPERATORS
// AND THE OTHER FUNCTIONALITIES OF THE EQUALS SIGN
            }
        }

    }
}

const clear = function (){
    displayValue = ''
    printToScreen(displayValue);
}
let displayValue = '';
let splitArray = [];
let result = '';
const operators = ['+', '-', 'X', '/', '=', '<']
const buttons = document.querySelectorAll('.button');
buttons.forEach((button)=>{
    button.addEventListener('click', () => {
        let buttonValue = document.getElementById(button.id).querySelector('h1').textContent;
        switch (buttonValue) {
            case '<': displayValue = displayValue.slice(0, -1);
                        printToScreen(displayValue);
            break;
            case '=':  calculate(displayValue);
            break;
            case 'AC': clear();
            break;
        }
        if (operators.includes(buttonValue) && operators.includes(displayValue.charAt(displayValue.length - 2)) ||
                                                                                           buttonValue === 'AC' ||
                                                                                            buttonValue === '<' ||
                                                                                            buttonValue === '=' ||
                                                      operators.includes(buttonValue) && displayValue.length < 1){

        } else if (operators.includes(buttonValue)) {
            buttonValue = ` ${buttonValue} `;
            displayValue = displayValue + buttonValue;
            printToScreen(displayValue);
        } else {
            displayValue = displayValue + buttonValue;
            printToScreen(displayValue);
        }

    })
})
//TODO: distinguish operators from numbers -
//TODO:





/* const container = document.querySelector('#main-container');
const visor = container.querySelector('#visor');
const keyboard = container.querySelector('#keyboard');
const out = visor.querySelector('h1');
const ac = keyboard.querySelector('#ac');
const parenthesis = keyboard.querySelector('#()');
const percentage = keyboard.querySelector('#%');
const division = keyboard.querySelector('#/');
const seven = keyboard.querySelector('#7');
const eight = keyboard.querySelector('#8');
const nine = keyboard.querySelector('#9');
const x = keyboard.querySelector('#x');
const four = keyboard.querySelector('#4');
const five = keyboard.querySelector('#5');
const six = keyboard.querySelector('#6');
const minus = keyboard.querySelector('#-');
const one = keyboard.querySelector('#one');
const two = keyboard.querySelector('#two');
const three = keyboard.querySelector('#three');
const plus = keyboard.querySelector('#+');
const zero = keyboard.querySelector('#0');
const dot = keyboard.querySelector('#.');
const back = keyboard.querySelector('#<=');
const equals = keyboard.querySelector('#=');

ac = keyboard.addEventListener('click', ()=>{
    
});
parenthesis .addEventListener('click', ()=>{

})
percentage.addEventListener('click', ()=>{

})
division.addEventListener('click', ()=>{

})

seven .addEventListener('click', ()=>{

})
eight .addEventListener('click', ()=>{

})
nine .addEventListener('click', ()=>{

})
x .addEventListener('click', ()=>{

})
four .addEventListener('click', ()=>{

})
five .addEventListener('click', ()=>{

})
six .addEventListener('click', ()=>{

})
minus .addEventListener('click', ()=>{

})
one.addEventListener('click', ()=>{

})
two .addEventListener('click', ()=>{

})
three.addEventListener('click', ()=>{

})
plus .addEventListener('click', ()=>{

})
zero .addEventListener('click', ()=>{

})
dot .addEventListener('click', ()=>{

})
back .addEventListener('click', ()=>{

})
equals.addEventListener('click', ()=>{

})
*/