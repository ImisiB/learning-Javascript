      // PART ONE: FOR LOOPS

// for(let i = 0; i < 5; i++){
//   console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//   console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }


      // PART TWO: WHILE LOOPS

// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;

// while(i < 5){
//   console.log('in loop: ', i);
//   i++;
// }

// let i = 0;
// while(i < names.length){
//   console.log(names[i]);
//   i++;
// }

      // DO WHILE LOOPS

// let i = 3;
// do{
//   console.log('val of i is ', i);
//   i++;
// } while(i < 5);


      // PART THREE: IF STATEMENTS

// const age = 25;

// if(age > 20){
//   console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 3){
//   console.log("thats's a lot of ninjas")
// }

// const password = 'p@ss';

// if(password.length >= 12){
//   console.log('that password is mighty strong')
// } else if(password.length >= 8){
//   console.log('that password is long enough!');
// } else{
//   console.log('password is not long enough')
// }




      // PART FOUR: LOGICAL OPERATORS - OR || AND &&
// const password = 'p@ss12';

// if(password.length >= 12 && password.includes('@')){
//   console.log('that password is mighty strong')
// } else if(password.length >= 8 || password.includes('@') && password.length >= 5){
//   console.log('that password is strong enough!');
// } else{
//   console.log('password is not long enough')
// }


      // PART FOUR: LOGICAL NOT (!)

// let user = false

// if(!user){
//   console.log('You must be logged in to continue')
// }

// console.log(true);
// console.log(false);



      // PART FOUR: BREAK AND CONTINUE

// const scores = [60, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){

//   if(scores[i] === 0){
//     continue;
//   }


//   console.log('your score: ', scores[i]);

//   if(scores[i] === 100){
//     console.log('congrats, you got the top score!');
//     break;
//   }
// }



      // PART FIVE: SWITCH STATEMENTS
// const grade = 'C';

// switch(grade){
//   case 'A':
//     console.log('you got A!');
//     break;
//   case 'B':
//     console.log('you got B!');
//     break;
//   case 'C':
//     console.log('you got C!');
//     break;
//   case 'D':
//     console.log('you got D!');
//     break;
//   case 'E':
//     console.log('you got E!');
//     break;
//   default:
//     console.log('not a valid grade');
//     break;
// }




      // PART SIX: VARIABLES & BLOCK SCOPE
// const age = 30;

// if(true){
//   const age = 40;
//   const name = 'shaun';
//   console.log('inside 1st block: ', age, name);

//   if(true){
//     const age = 50;
//     console.log('inside 2nd code block: ', age);
//     var test = 'hello';
//   }
// }

// console.log('outside code block: ', age, name, test);

// Done




