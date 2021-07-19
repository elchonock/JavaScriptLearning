// // // Линейный поиск

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
//                 array[j] = array[i];
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


