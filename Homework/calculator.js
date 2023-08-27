const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let firstNumber, operator, secondNumber;

rl.question('Please type first number: ', (num1) => {
  firstNumber = parseFloat(num1);
  rl.question('Please type operator: ', (op) => {
    operator = op;
    rl.question('Please type second number: ', (num2) => {
      secondNumber = parseFloat(num2);
      rl.close();
      
      let result;
      switch (operator) {
        case '+':
          result = firstNumber + secondNumber;
          break;
        case '-':
          result = firstNumber - secondNumber;
          break;
        case '*':
          result = firstNumber * secondNumber;
          break;
        case '/':
          result = firstNumber / secondNumber;
          break;
        default:
          console.log('Invalid operator');
          return;
      }
      
      console.log(`Result is ${result}`);
    });
  });
});
