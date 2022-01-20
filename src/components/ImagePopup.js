function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image-preview${props.card ? " popup_opened" : ""}`}>
      <div className="popup__container popup__container_type_image-preview">
        <figure className="popup__figure">
          <img src={`${props.card ? props.card.link : "#"}`} alt={props.card.name} className="popup__image" />
          <figcaption className="popup__figcaption">{props.card.name}</figcaption>
        </figure>
        <button onClick={props.onClose} type="button" className="popup__close-button" aria-label="Закрыть" title="Закрыть"></button>
      </div>
    </div>
  );
}

export default ImagePopup;