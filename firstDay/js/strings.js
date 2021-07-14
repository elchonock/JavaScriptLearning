"use strict";

// Property .length
// const str = "test";
// const arr = [1, 2, 7];
// console.log(str.length);
// console.log(arr.length);

// let strS = `Hello`;
// console.log(+strS[1000]);
// console.log(+strS.charAt(1000));


// Methods for..of and for..in
// for (let char of "Hello") {
//     console.log(char);
//   }
// for (let char of strS) {
//     console.log(char);
//   }

// for (const i in strS) {
//     console.log(strS[i]);
// }

// // Methods toLowerCase() and toUpperCase():
// alert( 'Interface'.toUpperCase() ); // INTERFACE
// alert( 'Interface'.toLowerCase() ); // interface
// // Перевести в нижний регистр какой-то конкретный символ:
// alert( 'Interface'[0].toLowerCase() ); // 'i'
// console.log( 'Interface'[0].toLowerCase() ); // 'i'


//  Method str.indexOf(substr, pos) - поиск подстрок

// const mainString = "JavaScript";
// const subString = "va";
// console.log(mainString.indexOf(subString, 0));

// // Трюк в побитовым НЕ ~   (для 32-разрядных целых чисел ~n равно -(n+1)) 
// // if (~str.indexOf(…)) означает «если найдено»
// let str = "Widget";
// if (~str.indexOf("Widget")) {
//   console.log( 'Совпадение есть' ); // работает
// }


// // Methods includes, startsWith, endsWith

// console.log("Widget with id".includes("Widget"));
// console.log("Widget with id".includes("widget"));
// console.log("Widget with id".includes("id", 0));
// console.log("Widget with id".includes("dget", 4));

// alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
// alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"


// // 3 метода для получения подстроки: substring, substr и slice
// // str.slice(start [, end])

// let str = "stringify"; 
// console.log(str.slice(0, 5)); // 'strin', символы от 0 до 5 (не включая 5)
// console.log(str.slice(0, 1));
// console.log(str.slice(2));
// console.log(str.slice(-4, -1));

// let str = "stringify";
// // // для substring эти два примера — одинаковы
// // console.log(str.substring(2, 6)); // "ring"
// // console.log(str.substring(6, 2)); // "ring"
// // console.log(str.slice(2, 6)); // "ring"
// // console.log(str.slice(6, 2)); // "" - empty string
// console.log(str.substring(-6, 2)); // -6 воспринимается как 0

// // str.substr(start [, length])
// let str = "stringify";
// console.log(str.substr(2, 4));
// console.log(str.substr(-4, 2));


// // кодировка  str.codePointAt(pos)  String.fromCodePoint(code)

// const str = "FPpointeRD_Ієё11";
// for (let i in str){
//     console.log(str.codePointAt(i));
// }

// console.log(String.fromCodePoint(90)); // Z)
// let str = '';
// for (let i = 65; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// console.log(str);

// // Также можно добавлять юникодные символы по их кодам, используя \u 
// // с шестнадцатеричным кодом символа:
// // 90 — 5a в шестнадцатеричной системе счисления
// console.log( '\u005a' ); // Z

// // str.localeCompare(str2) возвращает число, которое показывает, 
// // какая строка больше в соответствии с правилами языка:
// // -1 если str меньше str2, 1 если str больше str2, 0, если строки равны.
// console.log('Österreich'.localeCompare('Zealand')); //-1
// console.log('Zealand'.localeCompare('Österreich')); //1
// console.log('Zealand'.localeCompare('Zealand')); //0
// console.log('Іван'.localeCompare('Иван')); //1
// console.log('ivan'.localeCompare('иван')); //1


// // Суррогатные пары 
// //редкие символы записываются двумя 16-битными словами — это также называется «суррогатная пара»
// console.log( '𝒳'.length ); // 2, MATHEMATICAL SCRIPT CAPITAL X
// console.log( '𝒳'); // 2, MATHEMATICAL SCRIPT CAPITAL X
// console.log( '😂'.length ); // 2, FACE WITH TEARS OF JOY
// console.log( '😂'); // 2, FACE WITH TEARS OF JOY


// // Диакритические знаки и нормализация

// console.log('S\u0307');
// console.log('S\u0307\u0323');
// console.log('S\u0307\u0323S\u0307\u0323S\u0307\u0323S\u0307\u0323S\u0307\u0323S\u0307\u0323');

// console.log( 'S\u0307\u0323' == 'S\u0323\u0307' ); // false хотя
// console.log( 'S\u0323\u0307' ); //Ṩ
// console.log( 'S\u0307\u0323' ); //Ṩ

// // метод str.normalize() - приводит каждую строку к единому «нормальному» виду

// console.log( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); // true
// console.log( "S\u0307\u0323".normalize().length ); // 1
// console.log( "S\u0307\u0323".normalize() == "\u1e68" ); // true


// //str.trim() — убирает пробелы в начале и конце строки.
// //str.repeat(n) — повторяет строку n раз.

// const str = "   He llo o   ";
// console.log(str);
// console.log(str.trim());
// console.log(str.repeat(5));


// // Сделать первый символ заглавным

// function cFirst(str) {
//     return str[0].toUpperCase() + str.slice(1); 
//     // str[0] если строка пустая вернет undefined, toUpperCase не сработает выдаст ошибку
// }
// console.log(cFirst("alex"));

// let capit = (str)=> str.charAt(0).toUpperCase() + str.slice(1); 
// //str.charAt() - всегда вернет строку, для пустой-пустую, поэтому все сработает хорошо
// console.log(capit("elya"));
// console.log(capit(""));


// // Проверка на спам

// function checkSpam(str) {
//     str = str.toLowerCase();
//     return str.includes("viagra") || str.includes("xxx");
// }

// console.log(checkSpam("viagra"));
// console.log(checkSpam("viAGra"));
// console.log(checkSpam("cat"));
// console.log(checkSpam("XXX"));
// console.log(checkSpam(""));
// console.log(checkSpam("viagra and XXX is in this string"));


// // Усечение строки

// function truncate(str, maxlength) {
//     return (str.length >= maxlength) ?
//     (str.slice(0, +(maxlength-1)) + "…") :
//     str;
// }

// console.log("…".charCodeAt());
// console.log("…".codePointAt());
// console.log(String.fromCodePoint(8230));
// console.log("…".charCodeAt(1));
// console.log(truncate("Всем привет!", 6));
// console.log(truncate("Всем привет!", 3));
// console.log(truncate("Всем привет!", 20));
// console.log(truncate("", 0));
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 5));
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// let testSring = truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
// console.log(testSring.length);


// Выделить число

//Вариант 1

// function extractCurrencyValue(str){
//     const digits = "0123456789";
//     let clearValue = "";
//     for (let char of str){
//         if (digits.includes(char)) {
//             clearValue += char;
//         }
//         else {continue;}
//     }
//     return +clearValue;
// }

// // Вариант 2

// function extractCurrencyValue(str){
//     return +str.slice(1); //правильно,но будет работать только если знак валюты один,стоит первым
// }

// console.log(extractCurrencyValue('$120'));
// console.log(extractCurrencyValue('$120') === 120);
// // Вариант 3

// const re = /\d/;    
// function extractCurrencyValue(str) {
//     let clearValue = "";
//     for (let char of str) {
//         if (re.test(char)) {
//             clearValue += char;
//         continue;
//         } 
//     }
//     return (+clearValue || "invalid value");
// }

// console.log(extractCurrencyValue('$120'));
// console.log(extractCurrencyValue('$120') === 120);
// console.log(extractCurrencyValue('$*1%20'));
// console.log(extractCurrencyValue('$12$0') === 120);
// console.log(extractCurrencyValue('$'));
// console.log(extractCurrencyValue(''));

// //Вариант 4
// function extractCurrencyValue(str) {
//     return (str.match(/\d/g)) ? +str.match(/\d/g).join(''): "lol";
//   }

// console.log(extractCurrencyValue('$120'));
// console.log(extractCurrencyValue(''));
// console.log(extractCurrencyValue('$'));
// console.log(extractCurrencyValue('$120') === 120);

// console.dir(Number);
// const str = "tEst";
// const arr = [1, 2, 4];

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));
// console.log(fruit.indexOf("q"));  // вернет -1 если не найден

// const logg = "Hello world";
// console.log(logg);
// console.log(logg.slice(6));
// console.log(logg.slice(0, 5));
// console.log(logg.slice(-5, -2));

// console.log(logg.substring(9, 5));
// console.log(logg.substring(6));
// console.log(logg.substring(-6)); // воспринимает отрицательное как 0

// console.log(logg.substr(6, 5));  //(pos, length)

// const num = 12.2;     //12
// const num2 = 12.7;   //13
// const num3 = 12.5;  //13
// const num4 = 12.4; //12
// console.log(Math.round(num));
// console.log(Math.round(num2));
// console.log(Math.round(num3));
// console.log(Math.round(num4));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


