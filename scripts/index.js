let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input_change_name');
let jobInput = document.querySelector('.popup__input_change_job');
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

// ADD CARDS
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
const elementList = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content.querySelector('.elements__element')

createElement = (item) => {
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.elements__title')
  const cardImage = card.querySelector('.elements__image')
  cardImage.src = item.link
  cardTitle.textContent = item.name

  return card;
}

const addCard = (item, elementList) => {
  const element = createElement(item)
  elementList.append(element);
}

initialCards.forEach = (item) => {
  addCard(item, elementList)
}




