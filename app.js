//Завдання "Зміна кольору": Створіть блок, який змінює свій фоновий колір кожні 3 секунди. Використовуйте setInterval для зміни кольору.
// const boxRef = document.querySelector(".box")
// const colors = ["blue", "yellow", "black", "red", "orange"]
// let count =  0 
// const id = setInterval(()=> {
//     boxRef.style.background = colors[count]
//     count += 1
    
//     if(count === colors.length) {
//         count = 0
//         boxRef.style.background = "orange"
//         // clearInterval(id)
//         // boxRef.style.background = "pink"
//     }
// }, 3000)







//Завдання "Зміна тексту": Створіть текст, який циклічно змінюється між кількома заданими значеннями. Використовуйте setInterval для зміни тексту кожні 2 секунди.

// const textRef = document.querySelector(".text");
// let count = 0;

// function stringArray(text) {
//   const string = text.split(" ");
//   const id = setInterval(() => {
//     textRef.textContent = string[count];
//     count += 1;

//     if (count > string.length) {
//     count = 0
//     clearInterval(id);
//     textRef.textContent = "Текст закінчився"
//     }
//   }, 1000);
// }

// stringArray("Lorem ipsum dolor sit amet");














//Створити повідомлення “Операція проведена успішно”. Це повідомлення повинно з’являтися при запуску скрипта (додаючи клас), зникати через 3000 мс та при кліку на нього. Не забуваємо чистити таймер після

const spanRef = document.querySelector("span");
spanRef.classList.add("text");
setInterval(() => {
  spanRef.classList.replace("text", "is-hidden");
}, 3000);

spanRef.addEventListener("click", () => {
  spanRef.classList.replace("text", "is-hidden");
});
























