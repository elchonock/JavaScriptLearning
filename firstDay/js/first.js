"use strict";

// let a = 15;
// console.log(a);



// const x = Number.MAX_SAFE_INTEGER;
// console.log(x);
// console.log(x+1);
// console.log(x+3);
// console.log(typeof(x));
// const y = 9007199254740991n;
// console.log(y);
// console.log(typeof(y));

// const z = BigInt(123);
// console.log(z);
// console.log(typeof(z));

// console.log(1234567890123456789 * 123);
// console.log(-5/0);
// console.log("str" * 7);

// const persone = `Alex`;
// console.log(persone);

// const bool = true;

// // console.log(something);

// let und;
// console.log(und);

// const objj = {
//     name: "John",
//     age: 25,
//     isMarried: true
// };

// // console.log(objj.name);
// // console.log(objj["name"]);

// let arrOfImages = ['plum.png', 'orange.jpg', 7, 'cherry.bmp', objj];
// console.log(arrOfImages[4]);

// console.log(typeof(arrOfImages));
// console.log(typeof(objj));

// alert("Hello World!");
// const result = confirm("Вам есть 18 лет?!");
// if (result == true) {alert("Welcome")}
// else {alert("Permission denied.")};

// const answer = +prompt("Сколько Вам лет?", "");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt("How old are you?", "");
// answers[1] = prompt("What is your name?", "");
// answers[2] = prompt("Do you have a cat?", "");

// document.write(answers);

// console.log(answers);
// console.log(typeof(answers));
// console.log(typeof(console.log));
// console.log(typeof(null));

// const name = prompt("Input your name", "");
// console.log(`Hello ${name}`);

// const category = 'toys';

// console.log(`https://someurl.com/${category}/7`);
// console.log('https://someurl.com/' + category);

// const user = "Alex";

// alert(`Hello, ${user}!`);

// console.log("function" + " is object" );
// console.log(4 + +" 5" );


// let incr = 10;
// let decr = 10;

// console.log(`incr was ${incr} and decr was ${decr}`);

// incr++;
// decr--;

// console.log(`now incr is ${incr} and decr is ${decr}`);

// ++incr;
// --decr;

// console.log(`now incr is ${incr} and decr is ${decr}`);

// let incr = 10;
// let decr = 10;

// console.log(`incr was ${incr} and decr was ${decr}`);

// console.log(`now incr is ${incr++} and decr is ${decr--}`);
// console.log(`now incr is ${++incr} and decr is ${--decr}`);

// console.log(4%2);

// console.log(2*4 == 8);
// console.log(2*4 === 8);

// console.log(2*4 == "8");
// console.log(2*4 === "8");

// && - and
// || - or

// const isChecjed = true;
// const isClosed = true;

// console.log(isChecjed && isClosed);
// console.log(isChecjed || isClosed);

// const wasChecjed = true;
// const wasClosed = false;

// console.log(wasChecjed && wasClosed);
// console.log(wasChecjed || wasClosed);

// const willChecjed = false;
// const willClosed = false;

// console.log(willChecjed && willClosed);
// console.log(willChecjed || willClosed);
// console.log(willChecjed || !willClosed);

// console.log(2 + 2 * 2 === 8);
// console.log(2 + 2 * 2 != 8);

// console.log(typeof alert);

// let htmlAllCollection = document.all;
// console.log(htmlAllCollection);

// let id = Symbol("id");

// let user = {
//     name: "Alex",
//     age: 17,
//     salary: 35000,
//     [id]: "работник номер 1"    
// }; 

// console.log(user.name, user.age, user.salary, user[id]);


// let answer = prompt("number?", "");
// if (answer == 0) {
//     alert(0);
// }
// else if (answer > 0) {
//     alert("1");}
// else  {
//     alert("-1");
// };


// let a = 2, b = 3;

// let result = (a + b < 4) ? "not enaugh" : "enaugh";

// console.log(result);


// let login = "sdfghj";

// let message = 
//     (login == "сотр") ? "Hi" : 
//     (login == "dirr") ? "Good day" : 
//     (login == "") ? "no login" : "";

// console.log(message);

// let age = 13;
// if (!((age >= 14) && (age <= 90))) {
//     console.log(`age is ${age}`);}
// else {console.log("invalid");
// }

// let age = prompt("age?", "");
// alert(!((age >= 14) && (age <= 90)));

// let age = 25;
// if (age < 14 || age > 90) {
//     console.log(`age is ${age}`);}
// else {console.log("invalid");
// }


let login = prompt("enter the login", "");
let password;
if (login == "Админ") {
    password = prompt("enter the password", ""); 
    if (password == "Я главный"){
        alert("Hello!");
    }
    else if (password == null) {
        alert("Canceled");
    }
    else {alert("wrong password");}}
else if ( login == null || (login.length == 0)) {alert("Canceled");}
else {alert("I don't know you");}




