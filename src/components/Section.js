export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  };

  renderItems() {
    this._renderItems.forEach(this._renderer);
  }

  addItem(element) {
    this._container.prepend(element);
  }
}


