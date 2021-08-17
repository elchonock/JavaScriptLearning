// // // Линейный поиск


// // ????? логгирование
// const { isArgumentsObject } = require("util/types");
// const { add } = require("winston");



// // const arrayToSearchIn = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
// let countL = 0;
// function linearSearch(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         countL += 1;
//         if (array[i] == item) {
//             return i;
//         }
//     }
//     return null;
// }


// // Бинарный поиск

// const sortedArrayToSearchIn = [1, 4, 5, 8, 11, 15, 17, 18, 23, 33, 35, 37, 39, 41, 50];
// let countB = 0;
// function binarySearch(array, item) {
//     let low = 0;
//     let high = array.length;
//     let guess;
//     for (let i = 0; low <=high; i++) {
//         countB += 1;
//         guess = Math.trunc((high + low) / 2);
//         if (array[guess] === item) {
//             return guess;
//         } else if (array[guess] < item) {
//             low = guess + 1;
//         } else {
//             high = guess - 1;
//         }
//     }
//     return null;
// }



// // Recursive Binary Search
// const sortedArrayToSearchIn = [1, 4, 5, 8, 11, 15, 17, 18, 23, 33, 35, 37, 39, 41, 50];
// function recursiveBinarySearch(sortedArray, item, start, end) {
//     if (start > end) {return false;}
//     let guess = Math.floor((start + end) / 2);
//     if (item == sortedArray[guess]){
//         return guess;
//     }
//     if (item < sortedArray[guess]) {
//         return recursiveBinarySearch(sortedArray, item, 0, guess - 1);
//     } else {
//         return recursiveBinarySearch(sortedArray, item, guess + 1, end);
//     }  
// }

// console.log(recursiveBinarySearch(sortedArrayToSearchIn, 37, 0, sortedArrayToSearchIn.length));


// // Сортировка Выбором

// let countSS = 0;
// const arrayToSort = [1, 4, 50, 23, 33, 35, 3, 5, 8, 11, 15, 17, 187, 39, 41];

// function selectionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         let indexMin = i;
//         for (let j = i + 1; j < array.length; j++) {
//             countSS++;
//             if (array[j] < array[indexMin]) {
//                 indexMin = j;
//             } 
//         }
//         let tmp = array[i];
//         array[i] = array[indexMin];
//         array[indexMin] = tmp;
//     }
//     return array;
// }
// console.log(selectionSort(arrayToSort));
// console.log(countSS);


// // Сортировка пузырьком
// const arrayToSort = [1, 4, 50, 23, 33, 35, 3, 5, 8, 11, 15, 17, 187, 39, 41];
// let countBbl = 0;

// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         let tmp;
//         for (let j = i+1; j < array.length; j++) {
//             countBbl++;
//             if (array[i] > array[j]) {
//                 tmp = array[i];
//                 array[i] = array[j];
//                 array[j] = tmp;
//             }
//         } 
//     }
//     return array;
// }
// console.log(bubbleSort(arrayToSort));
// console.log(countBbl);


// //Быстрая сортировка

// const arrayToSort = [1, 4, 50, 23, 33, 35, 3, 5, 8, 11, 15, 17, 187, 39, 41];
// let countQS = 0;

// function quickSort(array) {
//     if (array.length <= 1) {
//         return array;
//     }

//     let pivotIndex = Math.floor(array.length / 2);
//     let pivot = array[pivotIndex];
//     let fewer = [];
//     let greater = [];

//     for (let i = 0; i < array.length; i++) {
//         countQS++;
//         if (i === pivotIndex) {
//             continue;            
//         } else if (array[i] < pivot) {
//             fewer.push(array[i]);
//         } else {
//             greater.push(array[i]);
//         }
//     }
//     return [...quickSort(fewer), pivot, ...quickSort(greater)];

// }
// console.log(quickSort(arrayToSort));
// console.log(countQS);



        // Графы. Поиск в ширину
// граф - абстрактная структура, представляет собой множество вершин и набор ребер их соединяющих
// ребра бывают однонаправленные и двунаправленные

// Очередь - FIFO -first in first out
// Стек - LIFO - last in first out

// // Задача: дойти от вершины А до вершины G за минимальное кол-во шагов, если такой путь имеется

// let counter = 0;
// const graph = {};
// graph.a = ['b', 'c'];
// graph.b = ['f'];
// graph.c = ['d', 'e'];
// graph.d = ['f'];
// graph.e = ['f'];
// graph.f = ['g'];
// function breadthSearch(graph, start, end) {
//     let queue = [];
//     queue.push(start);
//     while(queue.length > 0){
//         counter++;
//         const current = queue.shift();
//         if (!graph[current]){
//             graph[current] = [];
//         }
//         if (graph[current].includes(end)){
//             return true;
//         } else {
//                 queue = [...queue, ...graph[current]];
//             }
//     }  
//     return false;
// }
// console.log(breadthSearch(graph, "a", "g"));
// console.log(counter);



  //  Алгоритм Дейкстры - для поиска кратчайшего пути в графе
  // учитывается вес (длина пройденного ребра)


// const graph = {};
// graph.a = {b:2, c:1};
// graph.b = {f:7};
// graph.c = {d:5, e:2};
// graph.d = {f:2};
// graph.e = {f:1};
// graph.f = {g:1};
// graph.g = {};

// function shortPath(graph, start, end) {
//     const costs = {};  // тут будут храниться кратчайшие пути
//     const processed = [];  // уже проверенные узлы
//     let neighbors = {}; // соседние вершины рассматриваемого узла
//     Object.keys(graph).forEach(node => {
//         if(node !== start){
//             let value = graph[start][node];
//             costs[node] = value || 1000000000;
//         }
//     });
    // let node = findNodeLowestCost(costs, processed);
    // while (node) {
    //     const cost = costs[node];
    //     neighbors = graph[node];
    //     Object.keys(neighbors).forEach(neighbor => {
    //         let newCost = cost + neighbors[neighbor];
    //         if (newCost < costs[neighbor]) {
    //             costs[neighbor] = newCost;

    //         }
    //     });
//         processed.push(node);
//         node = findNodeLowestCost(costs, processed);
//     }
//     return costs;
// }


// function findNodeLowestCost(costs, processed) {
//     let lowestCost = 1000000000;
//     let lowestNode;
//     Object.keys(costs).forEach(node => {
//         let cost = costs[node];
//         if (cost < lowestCost && !processed.includes(node)){
//             lowestCost = cost;
//             lowestNode = node;
//         }
//     });
//     return lowestNode;
    
// }


// console.log(shortPath(graph, "a", "g"));



    // // Рекурсивный обход дерева n-размерности


// v - value    c - childs

// const tree = [
//     {
//         v: 5,
//         c: [
//             {
//                 v:10,
//                 c: [
//                     {
//                         v:11,
//                     }
//                 ]
//             },
//             {
//                 v:7,
//                 c: [
//                     {
//                         v:5,
//                         c: [
//                             {
//                                 v:1
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         v: 5,
//         c: [
//             {
//                 v:10
//             },
//             {
//                 v:15
//             }
//         ]
//     }
// ];


// const recursive = tree => {
//     let sum = 0;
//     tree.forEach(node =>{
//         sum += node.v;
//         if (!node.c){
//             return node.v;
//         }
//         sum += recursive(node.c);
//     });
//     return sum;
// };

// console.log(recursive(tree));


// const iteration = (tree) => {
//     if (!tree.length){
//         return "tree is empty";
//     }
//     let sum = 0;
//     let stack = [];
//     tree.forEach(node => stack.push(node));
//     while(stack.length){
//         const node = stack.pop();
//         sum += node.v;
//         if (node.c){
//             node.c.forEach(child => stack.push(child));
//         }
//     }
//     return sum;

// };


// const emptyTree = [];
// console.log(iteration(emptyTree));


//     // Алгоритм кеширования

// function cashFunc(fn) {
//     const cash ={};    // Хранит результаты кеширования
//     return function(n) {
//         if (cash[n]) {
//             console.log("from cash", cash[n]);
//             return cash[n];
//         }
//         let result = fn(n);
//         console.log("func", result);
//         cash[n] = result;
//         return result;
        
//     };
    
// }

// function factorial(n) {
//     let result = 1;
//     while(n != 1){
//         result *= n;
//         n--;
//     }
//     return result;    
// }

// const cashFact = cashFunc(factorial);

// cashFact(5);
// cashFact(4);
// cashFact(4);
// cashFact(3);
// cashFact(7);
// cashFact(5);

// console.log(11111111111111111 === 11111111111111113);


//         // Связанные списки



// class Node {
//     constructor(value) {
//         this.value = value;   // значение узла
//         this.next = null;   // хранит ссылку на след элемент в списке
//     }
// }

// class LinkedList{
//     constructor() {
//         this.size = 0;  // хранит размер самого списка
//         this.root = null;  // корневой элемент
//     }
    
//     add(value) {   // Реализуем функцию,  с помощью которой будем добавлять в этот список значения
//         if (this.size === 0) {
//             this.root = new Node(value);
//             this.size += 1;
//             return true;
//         }
//         let node = this.root;
//         while(node.next) {
//             node = node.next;
//         }
//         let newNode = new Node(value);
//         node.next = newNode;
//         this.size += 1;
//     }

//     getSize(){
//         console.log(this.size);
//     }
//     print(){
//         let result = [];
//         let node = this.root;
//         while (node){
//             result.push(node.value);
//             node = node.next;
//         }
//         console.log(result);
//     }
// }



// const list = new LinkedList();
// list.add(5);
// list.add(7);
// list.add(1);
// list.add(2);
// list.add(14);

// list.print();
// list.getSize();



        // // Бинарное дерево поиска


// class BinaryTree {
//     constructor() {
//         this.root = null;

//     }

//     add(value) {
//         if (!this.root) {
//             this.root = new TreeNode(value);
//         } else {
//             let node = this.root;
//             let newNode = new TreeNode(value);
//             while (node){
//                 if (value > node.value) {
//                     if (!node.right){
//                         break;
//                     }
//                     node = node.right;

//                 } else {
//                     if (!node.left){
//                         break;
//                     }
//                     node = node.left;
//                 }
//             }
//             if (value > node.value) {
//                 node.right = newNode;
//             } else {
//                 node.left = newNode;
//             }
//         }

//     }
//     print(root = this.root) {
//         if (!root) {
//             return true;
//         }
//         console.log(root.value);
//         this.print(root.left);
//         this.print(root.right);


//     }
// }

// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;  // ссылка на элемент в левой части дерева
//         this.right = null;  // в правой части
//     }
// }


// const tree = new BinaryTree();
// tree.add(5);
// tree.add(4);
// tree.add(7);
// tree.add(6);
// tree.add(1);

// tree.print();


 
        // // Структуры SET(множество, уникальные значения) и MAP(словарь, key: value)
        // map - добавить и извлечь данные за const
        

// В JS:

const map = new Map(); // как ключ можно хранить еще и объекты
map.set("name", "elele");   // метод set добавляет значение в объект
const obj = {
    id:5,
};
console.log(map.get("name"));    // получить значение по ключу
map.set(obj, "elele");   // с обычным объектом такое сделать нельзя(объект как ключ)
console.log(map.get(obj)); 


const set = new Set();
set.add(5);
set.add(5);
set.add(7);
set.add(5);
set.add(7);
set.add(4);
set.add(5);
set.add(1);

console.log(set);







