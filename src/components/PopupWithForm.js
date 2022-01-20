function PopupWithForm({isOpen, onClose, name, title, children}) {
  return (
    <div className={`popup popup_type_${isOpen ? name + " popup_opened" : name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form name={name} action="/" method="post" className="popup__form" id="editProfile" noValidate>
          {children}          
        </form>
        <button onClick={onClose} type="button" className="popup__close-button" aria-label="Закрыть" title="Закрыть"></button>
      </div>
    </div>
  );
}

export default PopupWithForm;