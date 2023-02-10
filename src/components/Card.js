export class Card {
  constructor(data, cardTemplate, handleCardClick, handleDeleteBasket, userId, handleAddCardLike, handleRemoveLike) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._id = data._id;

    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._handleDeleteBasket = handleDeleteBasket;
    this._handleAddCardLike = handleAddCardLike;
    this._handleRemoveLike = handleRemoveLike;
  };

  _setEventListeners() {
    this._like.addEventListener('click', () => {
      if (!this._like.classList.contains('card__like_is-active')) {
        this._handleAddCardLike(this._id);
      } else {
        this._handleRemoveLike(this._id);
      }
    });

    this._cardDeleteButton.addEventListener('click', () => this._handleDeleteBasket(this._id));

    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  };

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardTemplate).content.querySelector('.card').cloneNode(true);
    return cardTemplate;
  };

  createCard() {
    this._card = this._getTemplate();
    this._image = this._card.querySelector('.card__image');
    this._like = this._card.querySelector('.card__like');
    this._cardDeleteButton = this._card.querySelector('.card__delete');
    this._cardLikeCounter = this._card.querySelector('.card__like-counter');

    this._card.querySelector('.card__title').textContent = this._name;
    this._cardLikeCounter.textContent = this._likes.length;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._checkLike();
    this._removeDeleteButton();
    this._setEventListeners();

    return this._card;
  };

  handleLikeCard() {
    this._like.classList.toggle('card__like_is-active');
  };

  _checkLike() {
    if (this._likes.some((user) => {
      return this._userId === user._id;
    })) {
      this._like.classList.add('card__like_is-active');
    }
  };

  deleteCard() {
    this._card.remove();
    this._card = null;
  };

  _removeDeleteButton() {
    if (this._ownerId !== this._userId) this._cardDeleteButton.remove();
  };

  updateLikesCounter(data) {
    this._likes = data.likes;
    this._cardLikeCounter.textContent = this._likes.length;
    this.handleLikeCard()
  }
};


