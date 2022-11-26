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
const cardTemplate = document.querySelector('.template').content.querySelector('.elements__element')

createElement = (item) => {
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.elements__title')
  const cardImage = card.querySelector('.elements__image')
  cardImage.src = item.link
  cardTitle.textContent = item.name

  return card;
}

const addCard = (item, container) => {
  const element = createElement(item)
  container.append(element);
}

initialCards.forEach = (item) => {
  renderCard(item, elementList)
}

