// To get sum of an array
function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
        // console.log('index', index, 'element', element, 'sum', sum);
    }
    return sum;
}
// const myNumbers = [12, 65, 45, 78, 32, 45, 91 ];
// getSumOfAnArray(myNumbers);
// //print:
// 0 12 12    index 0 element 12 sum 12
// 1 65 77    index 1 element 65 sum 77
// 2 45 122   index 2 element 45 sum 122
// 3 78 200   index 3 element 78 sum 200
// 4 32 232   index 4 element 32 sum 232
// 5 45 277   index 5 element 45 sum 277
// 6 91 368   index 6 element 91 sum 368


// To get all odd number of an array and sum of all odd number of an array
function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 1){
            // console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91 ];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log( 'odd number', oddNumbers); // print: odd number [ 65, 45, 45, 91 ]

const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('odd number sum', oddNumberSum); // print: odd number sum 246
