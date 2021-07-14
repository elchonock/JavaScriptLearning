"use strict";

// FUNCTIONS

// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }
// showFirstMessage("Hello!");
// console.log(num);


// console.log(calc(7, 7));
// function calc(a, b) {
//     return a + b;

// }

// console.log(calc(2, 7));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
//     console.log("hello");
// };
// logger();


// const otherCalc = (a, b) => a + b;

// const anotherCalc = (a, b) => {
//     console.log(a + b);
//     return a + b;
// };


// console.log(otherCalc(5, 4));

// console.log(anotherCalc(7, 4));

// let sayHi = (question, yes, no) => (confirm(question)) ? yes(): no();

// sayHi(
//     "Are you reached 18 years old?",
//     () => {alert("Welcome");},
//     () => {alert("You are not allowed here!");}
// );

// function first() {
//     //do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);  //500миллисекунд
//     // setTimeout(function() {
//     //     console.log(2);
//     // }, 1000);  
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`I'm learning: ${lang}`);
//     callback();
// }

// let done = () => console.log("I've fineshed this lesson");

// learnJS("JavaScript", done);
// learnJS("Python", done);


// // Замыкание
// function createCounter() {
//     let counter = 0;
//     const myFunction = function() {
//     counter = counter + 1;
//     return counter;
//     };
//     return myFunction;
// }

// const increment = createCounter();   
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('example increment', c1, c2, c3);

