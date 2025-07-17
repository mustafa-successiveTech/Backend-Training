const fs = require('fs');
const path = require('path');
const { add, sub, mult, div } = require('./lib/math');

const num1 = 20;
const num2 = 5;

const results = [
    ['Operation', 'Operand1', 'Operand2', 'Result'],
    ['Addition', num1, num2, add(num1, num2)],
    ['Subtraction', num1, num2, sub(num1, num2)],
    ['Multiplication', num1, num2, mult(num1, num2)],
    ['Division', num1, num2, div(num1, num2)]
];

const csvData = results.map(row => row.join(',')).join('\n');

const filePath = path.join(__dirname, 'results.csv');

fs.writeFileSync(filePath, csvData, 'utf8');

console.log(`Results saved to ${filePath}`);
