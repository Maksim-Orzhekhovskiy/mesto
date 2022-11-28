//POPUP
const popupElements = document.querySelector('.popup');
//EDIT POPUP
const editPopup = document.querySelector('.popup_type_edit-block');
const popupEditButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_change_name');
const jobInput = document.querySelector('.popup__input_change_job');
const editForm = document.querySelector('.popup__form_edit-profile')
const editPopupCloseButton = editPopup.querySelector('.popup__close');
//ADD POPUP
const addPopup = document.querySelector('.popup_type_add-block');
const popupAddButton = document.querySelector('.profile__add-button');
const cardTitle = document.querySelector('.popup__input_add_place-name');
const cardImage = document.querySelector('.popup__input_add_place-link');
const addForm = document.querySelector('.popup__form_add-card');
const addPopupCloseButton = addPopup.querySelector('.popup__close');
//IMAGE POPUP
const imagePopup = document.querySelector('.popup_type_open-image');
const imgPopupContainer =  document.querySelector('.popup__image-container');
const imageElementPopup = document.querySelector('.popup__image');
const descriptionImagePopup = document.querySelector('.popup__image-description');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close');
//PROFILE BLOCK
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
//CARDS BLOCK
const cardsContainer = document.querySelector('.cards');
//CARD
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
//CREATE TEMPLATE
createElement = (cardElement) => {
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const cardDeleteButton = card.querySelector('.card__delete');
  const cardLikeButton = card.querySelector('.card__like');

  cardTitle.textContent = cardElement.name
  cardImage.src = cardElement.link

  cardImage.addEventListener('click', function (event) {
    openImagePopup(event)
  })
  cardLikeButton.addEventListener('click', function (event) {
    likeCard(event)
  })
  cardDeleteButton.addEventListener('click', function (event) {
    deleteCard(event)
  })

  return card;
}
//RENDER CARDS
function renderCards() {
  const cards = initialCards.map((initialCard) => {
    return createElement(initialCard)
  })
  cardsContainer.append(...cards)
}
renderCards()
//ADD RENDER CARDS
function addRenderCards() {
  const cards = initialCards.map((initialCard) => {
    return createElement(initialCard)
  })
  cardsContainer.prepend(cards)
}
//IN CARD FUNCTIONAL
function deleteCard (event) {
  event.target.closest('.card').remove()
}
function likeCard (event) {
  event.target.classList.toggle('card__like_is-active');
}
//OPEN POPUP LOGIC
function openPopup(popup) {
  popup.classList.add('popup_opened')
}
//CLOSE POPUP LOGIC
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
//EDIT PROFILE FUNCTIONAL
const editProfile = () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function editProfileSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(editPopup);
}
//IMAGE BLOCK
function openImagePopup(event) {
  imageElementPopup.src = event.target.src;
  imageElementPopup.alt = event.target.closest('.card').querySelector('.card__title').textContent;
  descriptionImagePopup.textContent = event.target.closest('.card').querySelector('.card__title').textContent;
  openPopup(imagePopup);
}

function addCardSubmit(event) {
  event.preventDefault();
  const addElement = {
    name: cardTitle.value,
    link: cardImage.value
  };
  addInputCardElement(addElement, cardsContainer);
  closePopup();
  event.target.reset();
}

//LISTENERS
popupEditButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(editPopup)
})
popupAddButton.addEventListener('click', () => {
  openPopup(addPopup)
})
editPopupCloseButton.addEventListener('click', () => {
  closePopup(editPopup)
})
addPopupCloseButton.addEventListener('click', () => {
  closePopup(addPopup)
})
imagePopupCloseButton.addEventListener('click', () => {
  closePopup(imagePopup)
})
editForm.addEventListener('submit', editProfileSubmit);
addForm.addEventListener('submit', addCardSubmit);

