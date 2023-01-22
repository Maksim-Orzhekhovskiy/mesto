import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  open (cardTitleElement, cardImageElement) {
    const descriptionImagePopup = this._popup.querySelector('.popup__image-description');
    const imgElementPopup = this._popup.querySelector('.popup__image');

    imgElementPopup.src = cardImageElement;
    imgElementPopup.alt = cardTitleElement;
    descriptionImagePopup.textContent = cardTitleElement;
    super.open();
  }
}



