// Multiplication of all the Numbers (factorial)
// 1 * 2 * 3 * 4 * 5 * 6 * 7
function multiplicationOfNumbers(number){
    let result = 1;
    for(let i = 1; i <= 7; i++){
        result = result * i;
    }
    return result;
}

const result = multiplicationOfNumbers(7)
console.log(result) // print: 5040