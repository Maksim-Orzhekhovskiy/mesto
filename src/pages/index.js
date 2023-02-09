import './index.css';
import { validationConfig } from "../utils/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { Api } from "../components/Api.js";

//Поиск в DOM
const popupEditButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_change_name');
const jobInput = document.querySelector('.popup__input_change_job');
const formEditProfile = document.querySelector('.popup__form_edit-profile');
const formChangeAvatar = document.querySelector('.popup__form_change-avatar')
const popupAddButton = document.querySelector('.profile__add-button');
const formAddCard = document.querySelector('.popup__form_add-card');
const popupEditAvatarButton = document.querySelector('.profile__avatar-edit-button');

// Подключение Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '3a939233-02b1-4b5c-aee2-f215c7cde9ac',
    'Content-Type': 'application/json'
  }
})

let userId;

Promise.all([api.getInitialCards(), api.getUserData()])
  .then(([initialCards, userData]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    cardSection.renderItems(initialCards.reverse());
  })
  .catch((err) => {
    console.log(`Ошибочка: ${err}`);
  });

// Экземпляр класса формы с картинками
const popupWithImage = new PopupWithImage('.popup_type_open-image')
popupWithImage.setEventListeners();

const openImagePopup = (cardTitleElement, cardImageElement) => {
  popupWithImage.open(cardTitleElement, cardImageElement);
};

// Экземпляр класса с информацией о пользователе
const profileSelectors = {
  profileNameSelector: '.profile__title',
  profileJobSelector: '.profile__subtitle',
  profileAvatarSelector: '.profile__avatar'
};
const userInfo = new UserInfo(profileSelectors);

// Форма редактирования профиля
const popupEditProfile = new PopupWithForm({
  handleFormSubmit: (userData) => {
    popupEditProfile.load(true);
    api.editProfile(userData)
      .then((userData) => {
        userInfo.setUserInfo(userData);
      })
      .finally(() => {
        popupEditProfile.load(false);
      })
  }
},'.popup_type_edit-block');
popupEditProfile.setEventListeners();

//Форма редактирования аватара
const popupEditAvatar = new PopupWithForm({
  handleFormSubmit: (userData) => {
    popupEditAvatar.load(true);
    api.editAvatar(userData)
      .then((userData) => {
        userInfo.setUserInfo(userData);
      })
      .finally(() => {
        popupEditAvatar.load(false);
      })
  }
},'.popup_type_change-avatar');
popupEditAvatar.setEventListeners();

//Создание карточки
const createElement = (data) => {
  const handleDeleteCard = (id) => {
    api.deleteCard(id)
      .then(() => {
        cardElement.deleteCard()
      })
  };
  const handleAddLike = (id) => {
    api.addCardLike(id)
      .then(() => {
        cardElement.handleLikeCard();
      })
  };
  const removeLike =(id) => {
    api.deleteCardLike(id)
      .then(() => {
        cardElement.handleLikeCard();
      })
  };

  const cardElement = new Card (
    {...data },
    '.card-template',
    openImagePopup,
    handleDeleteCard,
    userId,
    handleAddLike,
    removeLike
    );
  const card = cardElement.createCard();

  return card;
};

//Форма создания карточки
const popupAddCard = new PopupWithForm({
  handleFormSubmit: (userData) => {
    popupAddCard.load(true);
    const newCard = createElement(userData)
    api.addNewCard(userData)
      .then(cardSection.addItem(newCard))
      .finally(() => {
        popupAddCard.load(false);
      });
  }
}, '.popup_type_add-block');
popupAddCard.setEventListeners();

//Экземпляр класса с секцией карточек
const cardSection = new Section({
  renderer: (item) => {
    cardSection.addItem(createElement(item));
  }
}, '.cards')

// Валидация форм
const editUserValidator = new FormValidator(validationConfig, formEditProfile);
editUserValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig, formAddCard);
addCardValidator.enableValidation();

const changeAvatarValidator = new FormValidator(validationConfig, formChangeAvatar);
changeAvatarValidator.enableValidation();
//Слушатели на кнопки
popupEditButton.addEventListener('click', () => {
  popupEditProfile.open();
  const data = userInfo.getUserInfo();
  nameInput.value = data.profileNameSelector;
  jobInput.value = data.profileJobSelector;
});

popupEditAvatarButton.addEventListener('click', () => {
  changeAvatarValidator.toggleButtonState();
  popupEditAvatar.open();
});

popupAddButton.addEventListener('click', () => {
  addCardValidator.toggleButtonState();
  popupAddCard.open();
});
