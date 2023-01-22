export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this)
  };

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.close();
    }
  };

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEscClose);
  };

  close() {
       this._popup.classList.remove('popup_opened');
       document.removeEventListener('keyup', this._handleEscClose);
  };

  setEventListeners() {
    const popupCloseButton = this._popup.querySelector('.popup__close');

    popupCloseButton.addEventListener('click', () => {this.close()});

    this._popup.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      };
    });
  };
}
