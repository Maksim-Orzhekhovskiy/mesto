let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');
let popupCloseButton = document.querySelector('.popup__close');
let popupOpenButton = document.querySelector('.profile__edit-button');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let submitForm = document.querySelector('.popup__content');

// POPUP OPEN-CLOSE

popupOpenButton.addEventListener('click', function() {
  formElement.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});

function closePopup() {
  formElement.classList.remove('popup_opened')};

popupCloseButton.addEventListener('click', closePopup);

//CHANGE PROFILE INFO
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
}

submitForm.addEventListener('submit', formSubmitHandler);
