import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupSubmit = this._popup.querySelector('.popup__submit');
  };

  load(loading) {
    if (loading) {
      this._popupSubmit.textContent = 'Обновляем...'
    } else {
      this._popupSubmit.textContent = 'Да';
    }
  };

  handleFormSubmit(func) {
    this._handleFormSubmit = func;
  };

  setEventListeners() {
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
    super.setEventListeners();
  };
}


