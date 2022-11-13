let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');
let popupCloseButton = document.querySelector('.popup__close');
let popupOpenButton = document.querySelector('.profile__edit-button');

// POPUP OPEN-CLOSE

popupOpenButton.addEventListener('click', function() {
  formElement.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
});

popupCloseButton.addEventListener('click', function() {
  formElement.classList.remove('popup_opened');
});

//CHANGE PROFILE INFO
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
