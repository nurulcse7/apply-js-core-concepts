// Factorial (Multiplication) using while loop (VR 20-8 03.10)
function factorial(number){
    let num = 1;
    let result = 1;
    while(num <= number){
        result = result * num;
        num++;
    }
    return result;
}
const result = factorial(7)
console.log(result) // print: 5040