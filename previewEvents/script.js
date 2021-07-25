"use strict";

const btn = document.querySelector("#btn");
const overlay = document.querySelector(".overlay");
// 1)
//onclick="alert('click')"

// 2)

// btn.onclick = function () {
//     alert('click');
// };


// 3)
// btn.addEventListener('click', () => {
//     alert("click");
// });

// btn.addEventListener('click', (event) => {
//     // console.log(event.target);
//     // console.log(event.type);
//     event.target.remove();    
//     // console.log("Hover!");
// });


// let i = 0;
const deleteElement = (event) => {
    console.log(event.currentTarget);
    console.log(event.type);
    // i++;
    // if (i == 1) {btn.removeEventListener('click', deleteElement);}
    // // event.target.remove();    
};


// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


// Отмена стандартного поведения

const link = document.querySelector('a');
link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);
});


// применить один и тот же обработчик событий сразу к нескольким элементам
// // ________________________
// // так делать нельзя, потому что в переменной btns лежит псевдомассив, 
// // а у него нет методов, только forEach
// const btns = document.querySelectorAll("button");
// btns.addEventListener('click', deleteElement); 
// // ________________________
// чтобы сработало: 
const btns = document.querySelectorAll("button");
btns.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true}); 
});




