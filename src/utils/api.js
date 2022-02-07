class Api {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkApiResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Произошла ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, { headers: this.headers })
      .then(this._checkApiResponse);
  }

  postCard(name, link) {
    return fetch(`${this.baseUrl}/cards`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      })
      .then(res => this._checkApiResponse(res));
  }

  deleteCard(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: this.headers
      })
      .then(res => this._checkApiResponse(res));
  }

  changeLikeCardStatus(id, isLiked) {
    if(isLiked) {
      return fetch(`${this.baseUrl}/cards/${id}/likes`, {
        method: 'PUT',
        headers: this.headers
      })
      .then(res => this._checkApiResponse(res));
    } else {
      return fetch(`${this.baseUrl}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: this.headers
      })
      .then(res => this._checkApiResponse(res));
    }
  }

  // addLike(id) {
  //   return fetch(`${this.baseUrl}/cards/${id}/likes`, {
  //     method: 'PUT',
  //     headers: this.headers
  //   })
  //   .then(res => this._checkApiResponse(res));
  // }

  // delLike(id) {
  //   return fetch(`${this.baseUrl}/cards/${id}/likes`, {
  //     method: 'DELETE',
  //     headers: this.headers
  //   })
  //   .then(res => this._checkApiResponse(res));
  // }

  changeAvatar(link) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: link
      })
    })
    .then(res => this._checkApiResponse(res));
  }

  editUserInfo(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then(res => this._checkApiResponse(res));
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, { headers: this.headers })
    .then(res => this._checkApiResponse(res));
  }

  getAllNeededData() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()])
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-33',
  headers: {
    authorization: 'f5c43062-fa6e-4cd2-82d1-ae866fc3359c',
    'Content-Type': 'application/json'
  }
});