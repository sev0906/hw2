let input = 1
const numbers = [] 
let total = 0
for (let i = 0; input; i+=1) {
    input = prompt('Введите число', 0)
    if(input) {
        numbers.push(Number(input))
    }else if(!isNaN(Number(input))){
        alert("Было введено не число, попробуйте ещё раз")
    }
        input = prompt('Введите число', 0)
    }

console.log(numbers)
