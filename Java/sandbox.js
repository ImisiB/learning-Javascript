// // strings
// console.log("hello, world");
// let email = "mario@thenetninja.co.uk";

// // string concatenation
// let firstName = "Brandon";
// let lastName = "Sanderson";
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// //  characters
// console.log(fullName[2]);

// // string length
// console.log(fullName.length);

// // string methods getting
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf("@");
// console.log(index);
// console.log();
// console.log();
// console.log();
// console.log("Chapter 2");

// // Common  String Methods

// let email = "mario@thenetninja.co.uk";

// let result = email.lastIndexOf("n");

// let result = email.slice(2,5);

// let result = email.substr(4,10);

// let result = email.replace('m', 'w');

// let result = email.replace('n', 'w');

// console.log(result);




// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// // Math operators +, -, *, /, **, %

// console.log(10 / 2);
// let result = radius % 3;

// let result = pi * radius**2;

// // order of operation - B I D M A S

// let result = 5 * (10-3)**2;

// console.log(result);

// let likes = 10;

// likes = likes + 1;
// likes++;
// likes--;

// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;

// console.log(likes);

// // NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);




// //template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;


// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// // template strings way
// let result =  `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// //Creating html templates
let html = `
  <h2>${title}</h2>
  <p> By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;
console.log(html);
