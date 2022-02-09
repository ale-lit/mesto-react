function PopupWithForm({isOpen, onClose, name, title, onSubmit, children}) {
  return (
    <div className={`popup popup_type_${isOpen ? name + " popup_opened" : name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form name={name} className="popup__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="popup__save-button">
            {name === 'add-place' ? 'Создать' : 'Сохранить'}
          </button>
        </form>
        <button onClick={onClose} type="button" className="popup__close-button" aria-label="Закрыть" title="Закрыть"></button>
      </div>
    </div>
  );
}

export default PopupWithForm;