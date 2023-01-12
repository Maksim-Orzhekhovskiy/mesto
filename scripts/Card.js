export class Card {
  constructor(initialCard, cardTemplate, openImagePopup) {
    this._name = initialCard.name;
    this._link = initialCard.link;
    this._cardTemplate = cardTemplate;
    this.openImagePopup = openImagePopup;
  };

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardTemplate).content.querySelector('.card').cloneNode(true);
    return cardTemplate;
  };

  createCard() {
    this._card = this._getTemplate();
    this._card.querySelector('.card__title').textContent = this._name;
    this._card.querySelector('.card__image').src = this._link;
    this._card.querySelector('.card__image').alt = this._name;
    this._setEventListeners();
    return this._card;
  };

  _handleLikeCard() {
    this._card.querySelector('.card__like').classList.toggle('card__like_is-active');
};
  _handleDeleteCard() {
    this._card = null;
};

  _setEventListeners() {
    this._card.querySelector('.card__like').addEventListener('click', () => {
      this._handleLikeCard();
    });
    this._card.querySelector('.card__delete').addEventListener('click', () => {
      this._card.remove();
    });
    this._card.querySelector('.card__image').addEventListener('click', () => {
      this.openImagePopup(this);
    });
  };
};

