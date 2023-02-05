export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  };

  renderItems(initialCards) {
    initialCards.forEach(this._renderer);
  }

  addItem(element) {
    this._container.prepend(element);
  }
}


