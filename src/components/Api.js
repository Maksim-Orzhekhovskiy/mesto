export class Api {
  constructor(options) {
    this._options = options;
    this._baseUrl = this._options.baseUrl;
    this._headers = this._options.headers;
  };

  getInitialCards = () => {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Тут чет это: Ошибка ${res.status} - ${res.statusText}`))
  };

  getUserData = () => {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Тут чет это: Ошибка ${res.status} - ${res.statusText}`));
  };

  editAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Тут чет это: Ошибка ${res.status} - ${res.statusText}`));
  };

  editProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Тут чет это: Ошибка ${res.status} - ${res.statusText}`));
  };

  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Тут чет это: Ошибка ${res.status} - ${res.statusText}`));
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Тут чет это: Ошибка ${res.status} - ${res.statusText}`));
  };

  addCardLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Тут чет это: Ошибка ${res.status} - ${res.statusText}`));
  }

  deleteCardLike(data) {
    return fetch(`${this._baseUrl}/cards/likes/${data}`, {
      method: "DELETE",
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Тут чет это: Ошибка ${res.status} - ${res.statusText}`));
  };
};
