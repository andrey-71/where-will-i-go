let popup = document.querySelector(".popup");
let popupOn = document.querySelector(".header__help");
let popupOff = document.querySelector(".popup__close");
let popupForm = popup.querySelector(".popup__form");

// Открытие/закрытие POPUP
function togglePopup() {
  popup.classList.toggle("popup_active");

}

popupOn.addEventListener("click", togglePopup);
popupOff.addEventListener("click", togglePopup);

// Отправка формы
function saveProfileData(evt) {
  evt.preventDefault();

  togglePopup();
}

popupForm.addEventListener("submit", saveProfileData);
