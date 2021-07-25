"use strict";

// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);


// console.log(document.body.childNodes); // все узлы, которые являются детьми у body
// псевдоколлекция
// console.log(document.body.firstChild); // перый узел-ребенок body
// console.log(document.body.lastChild); // последний узел-ребенок body


// // Команды, позволяющие получить родителя, соседей и детей

// console.log(document.querySelector("#current").parentNode); 
// // позволяет получить прямого родителя
// console.log(document.querySelector("#current").parentNode.parentNode); 
// // получить следующего выше по иерархии родителя


// // Новое в HTML5 - data-атрибуты
// // получить data-атрибут в коде:
// console.log(document.querySelector("[data-current='3']").nextSibling);
// // текстовый узел
// console.log(document.querySelector("[data-current='3']").nextSibling.nextSibling);
// // слудующий элемент

// // то же самое с previousSibling , чтобы получить элемент нужно прописать метод дважды,
// // потому что этот метод вернет предыдущий соседний узел, а узел это и текст между тегами
// console.log(document.querySelector("[data-current='3']").previousSibling);
// console.log(document.querySelector("[data-current='3']").previousSibling.previousSibling);
// // все эти методы получают ноды(узлы)


// // у этих команд есть Aналоги, которые позволяют получить сразу ЭЛЕМЕНТ

// console.log(document.querySelector("[data-current='3']").nextElementSibling);
// // тоже самое что ..nextSibling.nextSibling;
// console.log(document.querySelector("[data-current='3']").previousElementSibling);
// // тоже что и ..previousSibling.previousSibling);

// console.log(document.querySelector("#current").parentElement);

 
// console.log(document.body.firstElementChild); 
// console.log(document.body.lastElementChild); 

// создать вручную функционал для того, чтобы из document.body.childNodes;
// получить элементы, а не узлы (избавиться от текстовых нод) :

// console.log(document.body.childNodes); // не можем использовать forEach
// нужно использовать for..of

for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue;
    }
    console.log(node);
}



