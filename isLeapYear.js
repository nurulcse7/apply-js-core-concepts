// function isLeapYear (year){
//     const remainder = year % 4;
//     if(remainder === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// To get "Leap year"
function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    return false;
}
const isMyYearLeapYear = isLeapYear(1933);
console.log('My year:', isMyYearLeapYear); // print: My year: false

const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year:', isHerYearLeapYear)  // print: Her year: true



// another alternative System "Leap year"
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016)); // print: true
console.log(leapyear(2000)); // print: true
console.log(leapyear(1700)); // print: false
console.log(leapyear(1800)); // print: false
console.log(leapyear(100)); // print: false
console.log(leapyear(400)); // print: true
