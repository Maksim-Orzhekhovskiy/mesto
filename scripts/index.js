import { initialCards, validationConfig } from "./constants.js";
import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";

//EDIT POPUP
const popupEditProfile = document.querySelector('.popup_type_edit-block');
const popupEditButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_change_name');
const jobInput = document.querySelector('.popup__input_change_job');
const formEditProfile = document.querySelector('.popup__form_edit-profile')
const buttonClosePopupProfile = popupEditProfile.querySelector('.popup__close');
//ADD POPUP
const popupAddCard = document.querySelector('.popup_type_add-block');
const popupAddButton = document.querySelector('.profile__add-button');
const cardInputTitle = document.querySelector('.popup__input_add_place-name');
const cardInputImage = document.querySelector('.popup__input_add_place-link');
const formAddCard = document.querySelector('.popup__form_add-card');
const buttonClosePopupCard = popupAddCard.querySelector('.popup__close');
//IMAGE POPUP
const imagePopup = document.querySelector('.popup_type_open-image');
const imageElementPopup = document.querySelector('.popup__image');
const descriptionImagePopup = document.querySelector('.popup__image-description');
const buttonCloseImagePopup = imagePopup.querySelector('.popup__close');
//PROFILE BLOCK
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
//CARDS BLOCK
const cardsContainer = document.querySelector('.cards');
//FORM
const editUserForm = new FormValidator(validationConfig, formEditProfile);
editUserForm.enableValidation();

const addUserForm = new FormValidator(validationConfig, formAddCard);
addUserForm.enableValidation();
//OPEN IMG
const openImagePopup = (name, link) => {
  imageElementPopup.src = link;
  imageElementPopup.alt = name;
  descriptionImagePopup.textContent = name;
  openPopup(imagePopup);
}
//CREATE TEMPLATE
  const createElement = (element) => {
    const cardElement = new Card (element, '.card-template', openImagePopup);
    const card = cardElement.createCard();
    return card;
}
//RENDER CARDS
function renderCards() {
  const cards = initialCards.map(createElement);
  cardsContainer.append(...cards);
}
renderCards();
//ESC CLOSE LOGIC
const handleKeyUp = (event) => {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
//OVERLAY CLICK CLOSE LOGIC
const handleOverlay = (event) => {
  if(event.target === event.currentTarget) {
    closePopup(event.target);
  }
}
//OPEN POPUP LOGIC
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', handleKeyUp);
}
//CLOSE POPUP LOGIC
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', handleKeyUp);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEditProfile);
}
//ADD CARD FUNCTIONAL
function handleCardFormSubmit(event) {
  event.preventDefault();
  const addValue = {
    name: cardInputTitle.value,
    link: cardInputImage.value
  }
  cardsContainer.prepend(createElement(addValue));
  closePopup(popupAddCard);
  event.target.reset();
}

//LISTENERS
popupEditButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupEditProfile);
});
popupAddButton.addEventListener('click', () => {
  openPopup(popupAddCard);
});
buttonClosePopupProfile.addEventListener('click', () => {
  closePopup(popupEditProfile)
});
buttonClosePopupCard.addEventListener('click', () => {
  closePopup(popupAddCard)
});
buttonCloseImagePopup.addEventListener('click', () => {
  closePopup(imagePopup)
});
popupEditProfile.addEventListener('click', handleOverlay);
popupAddCard.addEventListener('click', handleOverlay);
imagePopup.addEventListener('click', handleOverlay);
formEditProfile.addEventListener('submit', handleProfileFormSubmit);
formAddCard.addEventListener('submit', handleCardFormSubmit);

