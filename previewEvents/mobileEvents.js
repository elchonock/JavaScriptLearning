"use strict";

// Events на мобильных устройствах

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener("DOMContentLoaded", () => {

 const box = document.querySelector(".box");

 box.addEventListener("touchstart", (event) => {
     event.preventDefault();
    //  console.log("start");
    //  console.log(event.targetTouches);
 });

 box.addEventListener("touchmove", (event) => {
     event.preventDefault();
     console.log(event.targetTouches[0].pageX);
 });

 box.addEventListener("touchend", (event) => {
     event.preventDefault();
    //  console.log("end");
    //  console.log(event.changedTouches);
 });



 box.style = "background: lightblue; width: 500px";

// при работе с сенсорными устройствами 
// есть дополнительное свойство у объекта события
//то есть у event есть дополнительная плюшка

// 3 главных свойства при работе с сенсорными устройствами:
// 1. touches - можно узнать сколько пальцев прикоснулось к экрану объект TouchList {0: Touch, 1: Touch, 2: Touch, 3: Touch, length: 4}
// 0: Touch {identifier: 0, target: div.overlay, screenX: 690, screenY: 174, clientX: 213.42222595214844, …}
// 1: Touch {identifier: 1, target: button#btn, screenX: 592, screenY: 178, clientX: 71.14073944091797, …}
// 2: Touch {identifier: 2, target: div.box, screenX: 598, screenY: 268, clientX: 79.85185241699219, …}
// 3: Touch {identifier: 3, target: div.box, screenX: 834, screenY: 225, clientX: 422.4888916015625, …}
// length: 4
// __proto__: TouchList


// 2. targetTouches

// 3. changedTouches

// Свайп, щепотка


});





