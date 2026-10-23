"use strict";
// ПЗ 29, 90 минут. Подготовка и обработчик уже есть.
// Ваша задача — дописать 4 небольших участка с пометкой TODO.
// Сначала создайте форму в index.html, иначе form пока равен null.

const form = document.querySelector("#login-form");

if (form) {
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const emailError = document.querySelector("#email-error");
  const passwordError = document.querySelector("#password-error");
  const formStatus = document.querySelector("#form-status");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Не перезагружаем страницу.

    // Перед каждой проверкой очищаем старые сообщения.
    emailError.textContent = "";
    passwordError.textContent = "";
    formStatus.textContent = "";
    formStatus.classList.remove("form-status--success");
    emailInput.setAttribute("aria-invalid", "false");
    passwordInput.setAttribute("aria-invalid", "false");

    // TODO 1. Получите значения полей:
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // TODO 2. Проверьте email:
    if (email === "") {
      emailError.textContent = "Введите электронную почту.";
      emailInput.setAttribute("aria-invalid", "true");
    } else if (!emailInput.checkValidity()) {
      emailError.textContent = "Неверный формат email.";
      emailInput.setAttribute("aria-invalid", "true");
    }

    // TODO 3. Проверьте пароль:
    if (password.length < 8) {
      passwordError.textContent = "Пароль: минимум 8 символов.";
      passwordInput.setAttribute("aria-invalid", "true");
    }

    // TODO 4. Если оба сообщения об ошибках пустые, покажите успех:
    if (emailError.textContent === "" && passwordError.textContent === "") {
      formStatus.textContent = "Данные корректны. Учебная проверка пройдена.";
      formStatus.classList.add("form-status--success");
    }
  });
}
