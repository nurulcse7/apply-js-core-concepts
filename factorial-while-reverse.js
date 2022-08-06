// Reverse factorial (Multiplication)  using while loop (VR 20-8)
function factorial(number){
    let i = number;
    let result = 1;
    while( i >= 1){
        result = result * i;
        i--;
    }
    return result;
}

const output = factorial(7);
console.log(output) // print: 5040