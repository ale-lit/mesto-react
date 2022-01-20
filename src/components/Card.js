function Card({onCardClick, card}) {

  function handleClick() {
    onCardClick(card);
  }  

  return (
    <li className="place">
      <img onClick={handleClick} className="place__photo" title="Увеличить фото" src={card.link} />
      <button type="button" aria-label="Удалить" title="Удалить" className="place__delete"></button>
      <div className="place__info">
        <p className="place__name">{card.name}</p>
        <div className="place__like-group">
          <button type="button" aria-label="Нравится" className="place__like"></button>
          <span className="place__like-num">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;