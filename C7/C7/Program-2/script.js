let operator = prompt('Tell me your operator ( +, -, *, /) ')
firstNumber  = prompt ('Tell me your first number:')
secondNumber = prompt ('Tell me your second number:')
let result = Number(firstNumber) + operator + Number(secondNumber) 

if (operator === '+'){
    result = firstNumber + secondNumber;
}
else if(operator === '-'){
    result = firstNumber - secondNumber;
}
else if (operator === '*') {
    result = firstNumber * secondNumber;
}
else if (operator === '/'){
    result = firstNumber / secondNumber;
}

console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
