import './index.css';
import { initialCards, validationConfig } from "../scripts/constants.js";
import { FormValidator } from "../scripts/FormValidator.js";
import { Card } from "../scripts/Card.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { UserInfo } from "../scripts/UserInfo.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { Section } from "../scripts/Section.js";

//EDIT POPUP
const popupEditButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_change_name');
const jobInput = document.querySelector('.popup__input_change_job');
const formEditProfile = document.querySelector('.popup__form_edit-profile')
//ADD POPUP
const popupAddButton = document.querySelector('.profile__add-button');
const formAddCard = document.querySelector('.popup__form_add-card');
//CARDS BLOCK
const cardsContainer = document.querySelector('.cards');
//FORM
const editUserForm = new FormValidator(validationConfig, formEditProfile);
editUserForm.enableValidation();

const addUserForm = new FormValidator(validationConfig, formAddCard);
addUserForm.enableValidation();

const popupWithImage = new PopupWithImage('.popup_type_open-image')
popupWithImage.setEventListeners();

const openImagePopup = (cardTitleElement, cardImageElement) => {
  popupWithImage.open(cardTitleElement, cardImageElement);
};

const profileSelectors = {
  profileNameSelector: '.profile__title',
  profileJobSelector: '.profile__subtitle'
};

const userInfo = new UserInfo(profileSelectors);

const popupEditProfile = new PopupWithForm({
  handleFormSubmit: (userData) => {
    userInfo.setUserInfo(userData);
  }
}, '.popup_type_edit-block');
popupEditProfile.setEventListeners();

//CREATE ELEMENT
const createElement = (element) => {
  const cardElement = new Card (element, '.card-template', openImagePopup);
  const card = cardElement.createCard();
  return card;
};

const popupAddCard = new PopupWithForm({
  handleFormSubmit: (placeData) => {
    const newCard = createElement(placeData)
    console.log(placeData)
    cardSection.addItem(newCard)

  }
}, '.popup_type_add-block');
popupAddCard.setEventListeners();

const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    cardSection.addItem(createElement(item));
  }
}, cardsContainer)
cardSection.renderItems();

popupEditButton.addEventListener('click', () => {
  popupEditProfile.open();
  const inputValues = userInfo.getUserInfo();
  nameInput.value = inputValues.name;
  jobInput.value = inputValues.job;
});

popupAddButton.addEventListener('click', () => {
  popupAddCard.open();
  addUserForm.toggleButtonState()
});
