import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor ({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._popupSubmit = this._popup.querySelector('.popup__submit');
    this._popupSubmitText = this._popupSubmit.textContent;
  };

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  };

  setEventListeners() {
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  };

  close() {
    this._popupForm.reset();
    super.close();
  };

  load(loading) {
    if (loading) {
      this._popupSubmit.textContent = 'Сохранение...'
    } else {
      this._popupSubmit.textContent = this._popupSubmitText;
    }
  }
}
