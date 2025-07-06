      // // PART ONE: FUNCTION DECLARATION
// function greet(){
//   console.log('Hello there');
// }

// // FUNCTION EXPRESSION
// const speak = function(){
//   console.log('Good day!');
// };

// // greet();
// // greet();
// // greet();

// speak();
// speak();
// speak();












      // // PART TWO: ARGUMENTS & PARAMETERS

// const speak = function(name = 'luigi', time = 'night'){
//   console.log(`good ${time} ${name} `);
// };


// speak();
// speak('shaun');


      // // PART THREE: RETURNING VALUES

// const speak = function(name = 'luigi', time = 'night'){
//   console.log(`good ${time} ${name} `);
// };

// const calcArea = function(radius){
//   return 3.14 * radius**2;
  
// };

// const area = calcArea(5);
// console.log(area);







      // // PART FOUR: REGULAR FUNCTION
// const calcArea = function(radius){
//   return 3.14 * radius**2;
// };

// // ARROW FUNCTIONS
// const calcArea = radius => 3.14 * radius**2;
// const area = calcArea(5);
// console.log('area is', area);

// // PRACTICE ARROW FUNCTIONS

// const greet = function(){
//   return 'hello, world';
// };

// const greet = () => 'hello, world';
// const result = greet()
// console.log(result);


// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total
// }

// const bill = (products, tax) => {
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total
// }

// console.log(bill([10,15,30], 0.2));











      // // PART FIVE
// const name = 'shaun';

// // functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);







      //  // PART SIX: CALLBACK & FOREACH

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} `)
}

people.forEach((person, index) => {
  console.log(index, person);
});
