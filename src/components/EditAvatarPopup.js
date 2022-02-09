import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ onClose, isOpen, onUpdateAvatar }) {

const avatarUrl = React.useRef('');

function handleSubmit(e) {
  e.preventDefault();

  onUpdateAvatar({
    avatar: avatarUrl.current.value,
  });
} 

return (
  <PopupWithForm
    onClose={onClose}
    isOpen={isOpen}
    onSubmit={handleSubmit}
    name="edit-avatar"
    title="Обновить аватар"
  >
    <div className="popup__field">
      <input
        ref={avatarUrl}
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
  </PopupWithForm>
  );
}

export default EditAvatarPopup;