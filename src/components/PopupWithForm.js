function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.isOpen ? props.name + " popup_opened" : props.name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form name="{props.name}" action="/" method="post" className="popup__form" id="editProfile" noValidate>
          {props.children}          
        </form>
        <button onClick={props.onClose} type="button" className="popup__close-button" aria-label="Закрыть" title="Закрыть"></button>
      </div>
    </div>
  );
}

export default PopupWithForm;