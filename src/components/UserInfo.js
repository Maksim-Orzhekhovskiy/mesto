export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector }) {
    this._name = document.querySelector(profileNameSelector);
    this._job = document.querySelector(profileJobSelector);
    this._avatar = document.querySelector(profileAvatarSelector);
  };

  getUserInfo() {
    const userData = {
      profileNameSelector: this._name.textContent,
      profileJobSelector: this._job.textContent,
      profileAvatarSelector: this._avatar.src
    }
    return userData;
  };

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._job.textContent = data.about;
    this._avatar.src = data.avatar;
  };
};
