import { Popup } from "../components/Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._descriptionImagePopup = this._popup.querySelector('.popup__image-description');
    this._imgElementPopup = this._popup.querySelector('.popup__image');
  }

  open (cardTitleElement, cardImageElement) {

    this._imgElementPopup.src = cardImageElement;
    this._imgElementPopup.alt = cardTitleElement;
    this._descriptionImagePopup.textContent = cardTitleElement;
    super.open();
  }
}



