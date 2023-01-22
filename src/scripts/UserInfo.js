export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector }) {
    this._name = document.querySelector(profileNameSelector);
    this._job = document.querySelector(profileJobSelector);
  };

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      job: this._job.textContent
    }
    return userData;
  };

  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._job.textContent = userData.job;
  };
};
