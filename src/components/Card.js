function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
    <li className="place">
      <img onClick={handleClick} className="place__photo" title="Увеличить фото" src={props.card.link} />
      <button type="button" aria-label="Удалить" title="Удалить" className="place__delete"></button>
      <div className="place__info">
        <p className="place__name">{props.card.name}</p>
        <div className="place__like-group">
          <button type="button" aria-label="Нравится" className="place__like"></button>
          <span className="place__like-num">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;