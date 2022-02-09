import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ onClose, isOpen, onUpdateUser }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescChange(e) {
    setDescription(e.target.value);
  }

  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  } 
  
  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name="edit-profile"
      title="Редактировать профиль"
    >
      <div className="popup__field">
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="Имя"
          name="name"
          id="input-name"
          className="popup__input"
          minLength="2"
          maxLength="40"
          value={name || ''}
          required
        />
        <span id="input-name-error" className="popup__input-error"></span>
      </div>
      <div className="popup__field">
        <input
          onChange={handleDescChange}
          type="text"
          placeholder="Специализация"
          name="about"
          id="input-about"
          className="popup__input"
          minLength="2"
          maxLength="200"
          value={description || ''}
          required
        />
        <span id="input-about-error" className="popup__input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
