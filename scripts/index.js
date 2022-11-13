let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');
let popupCloseButton = document.querySelector('.popup__close');
let popupOpenButton = document.querySelector('.profile__edit-button');

// POPUP OPEN-CLOSE

popupOpenButton.addEventListener('click', function() {
  formElement.classList.add('popup_opened');
});

popupCloseButton.addEventListener('click', function() {
  formElement.classList.remove('popup_opened');
});

//CHANGE PROFILE INFO

function formSubmitHandler (evt) {
  evt.preventDefault();

  let profileTitle = document.querySelector('.profile__title');
  profileTitle.textContent = nameInput.value;

  let profileSubtitle = document.querySelector('.profile__subtitle');
  profileSubtitle.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
