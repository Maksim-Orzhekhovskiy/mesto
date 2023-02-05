export class Card {
  constructor(initialCard, cardTemplate, handleCardClick) {
    this._name = initialCard.name;
    this._link = initialCard.link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
  };

  _setEventListeners(cardImage, cardLike) {
    cardLike.addEventListener('click', () => {
      this._handleLikeCard(cardLike);
    });
    this._card.querySelector('.card__delete').addEventListener('click', () => {
      this._handleDeleteCard();
    });
    cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  };

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardTemplate).content.querySelector('.card').cloneNode(true);
    return cardTemplate;
  };

  createCard() {
    this._card = this._getTemplate();
    const cardImage = this._card.querySelector('.card__image');
    const cardLike = this._card.querySelector('.card__like');
    this._card.querySelector('.card__title').textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._setEventListeners(cardImage,cardLike);
    return this._card;
  };

  _handleLikeCard(cardLike) {
    cardLike.classList.toggle('card__like_is-active');
  };
  _handleDeleteCard() {
    this._card.remove();
  };
};

