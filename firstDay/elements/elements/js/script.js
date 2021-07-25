'use strict';


// // Методы, которые существуют давно:

// const box = document.getElementById("box");

// console.log(box);

// const btns = document.getElementsByTagName("button"); 
//      // получим псевдомассив, даже если элемент всего один
//      // __proto__: HTMLCollection  - прототипно наследуется от HTMLCollection
// console.log(btns);
// console.log(btns[1]); // получить конкретную кномпку

// // const btns2 = document.getElementsByTagName("button")[1];
// // console.log(btns2);

// const circles = document.getElementsByClassName("circle");
// //  тоже вернет псевдомассив
// console.log(circles);

// // Методы, появившиеся недавно:

// const hearts = document.querySelectorAll(".heart");
// // появляется один метод: forEach
// //но это все еще псевдомассив

// console.log(hearts); //NodeList
// hearts.forEach(item => {console.log(item);});

// const oneHeart = document.querySelector(".heart");
// // тоже принимает селекторы
// // возвращает только один - первый соответствующий запросу элемент со страницы
// console.log(oneHeart);


const box = document.getElementById("box");
const btns = document.getElementsByTagName("button"); 
const circles = document.getElementsByClassName("circle");
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector(".heart");
const wrapper = document.querySelector(".wrapper"); 

// // не всегда необходимо получать доступ к элементу через document.
// // после того как получили wrapper с помощью document можно получать дочерние
// // элементы, обращаясь непосредственно к wrapper, они лежат в нем, а его мы уже получили:
// const wrapper = document.querySelector(".wrapper"); 
// const hearts = wrapper.querySelectorAll(".heart");
// const oneHeart = wrapper.querySelector(".heart");

     // Добавить инлайн стили

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

// box.style.cssText = `background-color: blue; width: 500px`;

// btns[1].style.borderRadius = "100%";
// circles[0].style.backgroundColor = "red";


// добавить стили сразу нескольким элементам, использовать цикл:
// for (let i = 0; i < hearts.length; i++) {
//      hearts[i].style.backgroundColor = "blue";
// }

// hearts.forEach(item => {
//      item.style.backgroundColor = "blue";
// });


     // Методы для работы с элементами страницы

const div = document.createElement("div"); // этот div еще не добавлен на страницу 
// const text = document.createTextNode("I was here");

div.classList.add("black");

// document.body.append(div); // вставит элемент div в конец body

// document.querySelector(".wrapper").append(div); 
// // вставит элемент в конец блока с классом .wrapper 
// wrapper.append(div); // вставит элемент в конец блока с классом .wrapper 
// wrapper.prepend(div); // вставит элемент в начало блока с классом .wrapper 

// hearts[0].before(div);  // вставит div перед элементом hearts[0]
// hearts[0].after(div);  // вставит div после элемента hearts[0]

// circles[0].remove();  // удалит этот элмент

//hearts[0].replaceWith(circles[0]); // заменит элемент hearts[0] элементом circles[0]


     // Устаревшие методы


//wrapper родитель
// wrapper.appendChild(div); //вставит элемент в конец блока с классом .wrapper 
// wrapper.insertBefore(div, hearts[1]); // вставит div перед hearts[1] внутри wrapper

// wrapper.removeChild(hearts[1]); // удалит элемент hearts[1]

// wrapper.replaceChild(circles[0], hearts[0]); // заменит элемент hearts[0] элементом circles[0]
// _______________________________


//  Вставка HTML элементов на страницу

div.innerHTML = "<h1>Hello world!</h1>"; // добавит в div элемент <h1></h1>
// div.innerHTML = "Hello world!"; // просто добавит текст элементу div

// div.textContent = "hello"; // может добавить только текст, html структуру уже не сможет
// например введенный пользователем


// Вставить кусочек HTML кода после или перед определенных тегом

// div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");
//вставит непосредственно перед элементом div

div.insertAdjacentHTML("afterbegin", "<section>section</section>"); 
// вставит во внутрь первым

div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>"); 
// вставит внутри в конец

div.insertAdjacentHTML("afterend", "<h3>Hello</h3>"); 
// вставит непосредственно после элемента div


// Навигация по DOM элементам/ data-атрибуты/ преимущество for..of

// основные элементы в DOM дереве






