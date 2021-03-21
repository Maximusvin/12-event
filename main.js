// 1. Створити сторінку на якій будемо відображати базовий текст в span
// ("Очікую на ввід даних").
// При натисканні alt + A, замість спана зявиться інпут з аналогічним текстом,
// який тепер ви зможете відредагувати.
// Далі коли ви натисните shift + S дані збережуться і знов будуть відображатись як span.

let task1Ref = document.querySelector(".task1");
let inputRef = null;

document.addEventListener("keydown", (e) => {
  if (e.altKey && e.code == "KeyA") {
    const input = document.createElement("input");
    input.classList.add("input");
    input.setAttribute("placeholder", "Очікую на ввід даних");
    task1Ref.replaceWith(input);
    input.focus();
    inputRef = document.querySelector(".input");
  }

  if (e.shiftKey && e.code == "KeyS" && inputRef) {
    const inputValue = inputRef.value;
    const span = document.createElement("span");
    span.classList.add("task1");
    inputRef.replaceWith(span);
    span.textContent = inputValue;
    task1Ref = document.querySelector(".task1");
    if (!task1Ref.textContent.length) {
      span.textContent = "Очікую на ввід даних";
    }
  }
});

// ==========================

// 2. Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px,
// виводити лог ми векористовуємо мобільну версію,
// при більшому розмірі сторінки - що ми використовуємо десктоп версію.

const task2Ref = document.querySelector(".task2");

window.addEventListener("resize", () => {
  if (innerWidth < 600) {
    task2Ref.textContent = "Ви використовуєте мобільну версію";
  }
  if (innerWidth > 600) {
    task2Ref.textContent = "Ви використовуєте десктопну версію";
  }
});

// 3. Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено.
const inputRef3 = document.querySelector(".t3");

inputRef3.addEventListener("blur", () => {
  const message = inputRef3.value;

  if (message.trim()) {
    inputRef3.value = "";
    alert(`Ви ввели: ${message}`);
  } else {
    alert("Введіть текст в поле");
  }
});

// 4. При натисканні на кнопку альт+ о виводити модальне вікно на екран, альт + с - закривати.

const modalRef = document.querySelector(".backdrop");

document.addEventListener("keydown", (e) => {
  if (e.altKey && e.code == "KeyO") {
    modalRef.classList.add("active");
  }

  if (e.altKey && e.code == "KeyC") {
    modalRef.classList.remove("active");
  }
});

// 5. Створити модальне відкно аналог Алерта але з гарним дизайном.
// по кліку на кнопку зявляється модальне вікно по центрі екрану(центрування елемента).
// В модальному вікні має бути текст та кнопка закрити.

const btnRef = document.querySelector("#btn");
const modalRef2 = document.querySelector(".backdrop2");

btnRef.addEventListener("click", () => {
  modalRef2.classList.add("active");
});

modalRef2.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    modalRef2.classList.remove("active");
  }
});
