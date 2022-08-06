// const myInches = 12;
// const myFeet = myInches /12;
// console.log(myFeet); //print: 1

// const dataInches = 144;
// const dadaFeet = dataInches / 12;
// console.log('data feet', dadaFeet); //print: data feet 12

// const dadiInches = 60;
// const dadiFeet = dadiInches / 12;
// console.log('dadiFeet', dadiFeet); //print: dadiFeet 5

// To get inchToFeet using function
function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet); //print: 12

const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);
console.log('nana feet', nanaFeet); //print: nana feet 14

