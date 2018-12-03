const fs = require('fs')

text = fs.readFileSync('./input.txt', 'utf8')
input = text
    .split('\n')
    .map(line => parseInt(line))
    .filter(num => !isNaN(num))

let knownFrequencies = new Set()
let currentFrequency = 0
let index = 0
while(!knownFrequencies.has(currentFrequency)){
    knownFrequencies.add(currentFrequency)
    if(index >= input.length) index = 0
    //console.log('current = %d, number of tries = %d, current index = %d',current, history.size, index)
    currentFrequency += input[index++]
}
console.log('After %d tries, the repeated frequency is: %d', knownFrequencies.size, currentFrequency)