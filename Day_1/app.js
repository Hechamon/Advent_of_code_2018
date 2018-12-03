const fs = require('fs')

text = fs.readFileSync('./input.txt', 'utf8')
result = text
    .split('\n')
    .map(line => parseInt(line))
    .filter(num => !isNaN(num))
    .reduce((sum, next) => sum + next, 0)
console.log(result.toString())