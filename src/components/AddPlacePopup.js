import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ onClose, isOpen, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name="add-place"
      title="Новое место"
    >
      <div className="popup__field">
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="Название"
          name="name"
          id="input-place-name"
          className="popup__input"
          minLength="2"
          maxLength="30"
          required
        />
        <span id="input-place-name-error" className="popup__input-error"></span>
      </div>

      <div className="popup__field">
        <input
          onChange={handleLinkChange}
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
    </PopupWithForm>
  );
}

export default AddPlacePopup;