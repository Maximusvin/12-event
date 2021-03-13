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
