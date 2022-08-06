// 3! = 3*2*1                                                // 6
// 4! = 4*3*2*1                                              // 24 
// 7! = 7*6*5*4*3*2*1  // 1 * 2 * 3 *4 *5 *6 * 7             // 5040
// 9! = 9*8*7*6*5*4*3*2*1  // 1 * 2 * 3 *4 *5 *6 * 7 * 8 * 9 // 362880

function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

const result = factorial(7);
console.log(result); //print: 5040