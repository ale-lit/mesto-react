function PopupWithForm(props) {
  return (
    <>
    <div className={`popup popup_type_${props.isOpen ? props.name + " popup_opened" : props.name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        {/* <form name="{props.name}" action="/" method="post" className="popup__form" id="editProfile" novalidate>

          {props.children}

          <div className="popup__field">
            <input type="text" placeholder="Имя" name="name" id="input-name" className="popup__input" minlength="2" maxlength="40" required />
            <span id="input-name-error" className="popup__input-error"></span>
          </div>
          <div className="popup__field">
            <input type="text" placeholder="Специализация" name="about" id="input-about" className="popup__input" minlength="2" maxlength="200" required />
            <span id="input-about-error" className="popup__input-error"></span>
          </div>
          <input type="submit" value="Сохранить" className="popup__save-button" />
        </form> */}
        <button onClick={props.onClose} type="button" className="popup__close-button" aria-label="Закрыть" title="Закрыть"></button>
      </div>
    </div>
{/*     
  <div className="popup popup_type_edit-profile">
      <div className="popup__container">
        <h2 className="popup__title">{props.title}Редактировать профиль</h2>
        <form name="profile-form" action="/" method="post" className="popup__form" id="{props.name}editProfile" novalidate>
          <div className="popup__field">
            <input type="text" placeholder="Имя" name="name" id="input-name" className="popup__input" minlength="2" maxlength="40" required />
            <span id="input-name-error" className="popup__input-error"></span>
          </div>
          <div className="popup__field">
            <input type="text" placeholder="Специализация" name="about" id="input-about" className="popup__input" minlength="2" maxlength="200" required />
            <span id="input-about-error" className="popup__input-error"></span>
          </div>
          <input type="submit" value="Сохранить" className="popup__save-button" />
        </form>
        <button type="button" className="popup__close-button" aria-label="Закрыть" title="Закрыть"></button>
      </div>
    </div>

    <div className="popup popup_type_add-place">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form name="place-form" action="/" method="post" className="popup__form" id="addCard" novalidate>
            <div className="popup__field">
              <input type="text" placeholder="Название" name="name" id="input-place-name" className="popup__input" minlength="2" maxlength="30" required />
              <span id="input-place-name-error" className="popup__input-error"></span>
            </div>

            <div className="popup__field">
              <input type="url" placeholder="Ссылка на картинку" name="link" id="input-image-source" className="popup__input" required />
              <span id="input-image-source-error" className="popup__input-error"></span>
            </div>
            <input type="submit" value="Создать" className="popup__save-button" />
          </form>
          <button type="button" className="popup__close-button" aria-label="Закрыть" title="Закрыть"></button>
        </div>
      </div>
      
      <div className="popup popup_type_edit-avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="place-form" action="/" method="post" className="popup__form" id="editAvatar" novalidate>
            <div className="popup__field">
              <input type="url" placeholder="Ссылка на аватар" name="link" id="input-avatar-source" className="popup__input" required />
              <span id="input-avatar-source-error" className="popup__input-error"></span>
            </div>
            <input type="submit" value="Сохранить" className="popup__save-button" />
          </form>
          <button type="button" className="popup__close-button" aria-label="Закрыть" title="Закрыть"></button>
        </div>
      </div>
      
      <div className="popup popup_type_submit">
        <div className="popup__container">
          <h2 className="popup__title popup__title_noform">Вы уверены?</h2>
          <form name="place-form" action="/" method="post" className="popup__form" id="submit" novalidate>
            <input type="submit" value="Да" className="popup__save-button" />
          </form>
          <button type="button" className="popup__close-button" aria-label="Закрыть" title="Закрыть"></button>
        </div>
      </div> */}
      </>
  );
}

export default PopupWithForm;