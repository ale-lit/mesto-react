import React, { useState } from 'react';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <>
      <Header />
      <Main
        onCardClick={handleCardClick}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />

      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen}
        name="edit-avatar"
        title="Обновить аватар"
      >
        <div className="popup__field">
          <input
            type="url"
            placeholder="Ссылка на аватар"
            name="link"
            id="input-avatar-source"
            className="popup__input"
            required
          />
          <span
            id="input-avatar-source-error"
            className="popup__input-error"
          ></span>
        </div>
        <input type="submit" value="Сохранить" className="popup__save-button" />
      </PopupWithForm>
      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
        name="edit-profile"
        title="Редактировать профиль"
      >
        <div className="popup__field">
          <input
            type="text"
            placeholder="Имя"
            name="name"
            id="input-name"
            className="popup__input"
            minLength="2"
            maxLength="40"
            required
          />
          <span id="input-name-error" className="popup__input-error"></span>
        </div>
        <div className="popup__field">
          <input
            type="text"
            placeholder="Специализация"
            name="about"
            id="input-about"
            className="popup__input"
            minLength="2"
            maxLength="200"
            required
          />
          <span id="input-about-error" className="popup__input-error"></span>
        </div>
        <input type="submit" value="Сохранить" className="popup__save-button" />
      </PopupWithForm>
      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}
        name="add-place"
        title="Новое место"
      >
        <div className="popup__field">
          <input
            type="text"
            placeholder="Название"
            name="name"
            id="input-place-name"
            className="popup__input"
            minLength="2"
            maxLength="30"
            required
          />
          <span
            id="input-place-name-error"
            className="popup__input-error"
          ></span>
        </div>

        <div className="popup__field">
          <input
            type="url"
            placeholder="Ссылка на картинку"
            name="link"
            id="input-image-source"
            className="popup__input"
            required
          />
          <span
            id="input-image-source-error"
            className="popup__input-error"
          ></span>
        </div>
        <input type="submit" value="Создать" className="popup__save-button" />
      </PopupWithForm>
      <PopupWithForm onClose={closeAllPopups} name="submit" title="Вы уверены?">
        <input type="submit" value="Да" className="popup__save-button" />
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
