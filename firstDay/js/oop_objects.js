// "use strict";

// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red",
//     },
//     makeTest: function() {
//         console.log("Test");
//     },
// };

// console.log(Object.keys(options).length);
// options.makeTest();


// console.log(options.name);
// delete options.name;
// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Property ${i} has value ${options[key][i]}`);
//             // counter++;
//         }
//     } else {
//         console.log(`Property ${key} has value ${options[key]}`);
//         // counter++;
//     }
//     counter++;
// }
// console.log(counter);

// // for ..of..  не работает для объекта, потому что он не iterable
// for (let char of options) { // error options is not iterable    
//     console.log(`Property ${char} has value ${options[char]}`);
// }


// // Деструктуризация объектов

// const {border, bg} = options.colors;
// console.log(border);


// Массивы и псевдомассивы

// const arr = [1, 2, 3, 5, 8];

// arr[99] = 0;
// console.log(arr.length); //100
// console.log(arr);  // [ 1, 2, 3, 5, 8, <94 empty items>, 0 ]

// arr.pop(); //удаляет последний элеммент массива
// arr.push(10); // добавляет элемент в конец массива

// // используются редко в реальной практике:
// arr.shift(); // удаляет первый элемент
// arr.unshift(46); // добавляет элемент в начало

// for (let i = 0; i < arr.length;i++){
//     console.log(arr[i]);
// }


//преимущество перед forEach-можно использовать break, continue
// for (let value of arr){ 
     //     console.log(value);
// }

// const arr = [1, 2, 3, 5, 8];
// for (let value in arr){ 
//          console.log(value);
// }


// const arr = [1, 2, 3, 5, 8];
// // метод forEach может принимать  функцию, у которой может быть 3 аргумента 
// // (элемент, индекс, массив) 
// // нет возможности использовать break и continue
// // просто перебирает массив
// arr.forEach(function(item, i, arr){ //применит (callback)функцию к каждому элементу массива
//     console.log(`${i}: ${item} in ${arr}`);    
// }); 

// //Методы трансформации массивов:
// // метод map в конце возвращает новый массив
// // метод filter в конце возвращает новый отфильтрованный массив
// // arr.reduce arr.every/some


// const strProducts = prompt("", "");
// const arrProducts = strProducts.split(","); 

// arrProducts.sort();

// console.log(arrProducts);
// console.log(arrProducts.join(";"));

// const digi = [1, 8, 16, 24, 7];

// // эта функция позволяет отсортировать массив с числами правильно:
// function compareNum(a, b) { 
//     return a - b;
// }

// digi.sort(compareNum); // сортирует все как строки,сначала сравнивает первый знак, потом если равны второй..

// console.log(digi);


// Псевдомассив - структур, которая просто хранит данные по порядку, 
//не имеет методов


// // Деструктурирующее присваивание 
// let user = {
//   name: "John",
//   years: 30
// };

// let {name, years: age, isAdmin = false} = user;
// console.log(name);
// console.log(age);
// console.log(isAdmin);


// // Максимальная зарплата

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250,
// };

// function topSalary(obj={}){
//     let maxVal = 0;
//     let maxName = null;
//     for (let [key, value] of Object.entries(obj)){
//         if (maxVal < value) {
//             maxVal = value;
//             maxName = key;
//         }
//     }
//     return maxName;
// }
// console.log(topSalary(salaries));


// function Accumulator(startingValue) {
//      this.value = startingValue;
//      this.read = function() {
//           this.value += +prompt("num?", "");          
//      };     
// }

// let accum = new Accumulator(5);
// accum.read();
// accum.read();
// alert(accum.value);

// Copy


// поверхностное копирование
// function copy(mainObj) {
//      let objCopy = {};
//      for (let key in mainObj) {
//           objCopy[key] = mainObj[key];
//      }
//      return objCopy;
// }

// const numbers = {
//      a: 2,
//      b: 5,
//      c: {
//           x: 7,
//           y: 4,
//      },
// };

// // const newNumbers = copy(numbers);
// // newNumbers.a = 11;
// // newNumbers.c.x = 10;

// // console.log(newNumbers);
// // console.log(numbers);


// // object.assign

// const add = {
//      d: 17,
//      e: 20,
// };


// // console.log(Object.assign(numbers, add)); // (куда, откуда)
// const objClone = Object.assign({}, add); // (куда, откуда)
// // console.log(numbers);
// console.log(add);
// console.log(objClone);
// objClone.d = 75;
// console.log(objClone);
// console.log(add);


// // Копия массива

// const oldArray = ["a", "b", "x"];
// const newArray = oldArray.slice();

// newArray[0] = "I'm a copy";
// console.log(newArray);
// console.log(oldArray);


// // Оператор разворота Spread (...) - разворачивает структуру на отдельные значения
// // нужно просто поставить троеточие перед переменной

// const video = ["youtube", "vimeo", "rutube"];
// const blogs = ["wordpress", "lifejournal", "blogger"];
// const internet = [...video, ...blogs, "vk", "inst"];
// console.log(internet);


// function log(a, b, c) {
//      console.log(a);
//      console.log(b);
//      console.log(c);
// }

// const num = [2, 5, 7];
// log(...num);


// const array = ["a", "b"];
// const newArr = [...array];
// newArr[2] = "c";
// newArr[0] = "S";
// console.log(array);
// console.log(newArr);


// const q = {
//      one: 1,
//      two: 2,
// };

// const newObj = {...q};

// newObj.one = 17;
// console.log(q);
// console.log(newObj);


// ООП 
// Прототипно-ориентированное наследование

// let str = "some";
// let strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);

// console.log(str);
// console.log(strObj);

// console.dir([1, 2, 3]);


// const soldier = {
//      health: 400,
//      armor: 100,
//      sayHello: function() {
//           console.log(`Hello`);          
//      },
// };

// const john = {
//      health: 100,
// };


// // устаревший формат
// john.__proto__ = soldier;


// Актуальный формат

// Object.setPrototypeOf(john, soldier);  // когда уже есть объект john наследуем его от soldier
// const john = Object.create(soldier); // стразу и создаем и наследуем

// console.log(john.armor);
// console.log(john);
// john.sayHello();

// console.log(Object.getPrototypeOf(john));

// Object.create - 
// Object.setPrototypeOf(where, from) - 
// Object.getPrototypeOf(obj)


// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// // Array.prototype.unshift.apply(arr1, arr2); 
// // arr1.unshift(...arr2);
// arr1 = [...arr2, ...arr1];
// console.log(arr1);




