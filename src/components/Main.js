import React, { useState, useEffect } from 'react';
import Card from './Card';
import {api} from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);
  
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getAllNeededData()
      .then(([cards]) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  } 

  function handleCardDelete(id) {
    api.deleteCard(id).then((card) => {
      console.log(card);
      // ДОДЕЛАТЬ !
    });
  }

  return (
    <main>
      <section className="profile root__container">
        <div onClick={onEditAvatar} className="profile__avatar-container">
          <img alt="Аватар пользователя" className="profile__avatar" src={currentUser.avatar} />
        </div>
        <div className="profile__info">
          <div className="profile__info-inner">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button onClick={onEditProfile} type="button" aria-label="Редактировать профиль" className="profile__edit-button"></button>
          </div>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button onClick={onAddPlace} type="button" aria-label="Добавить новое место" className="profile__add-button" title="Добавить новое место"></button>
      </section>

      <section className="photo-grid root__container">
        <ul className="places">
          {cards.map((card, i) => (
            <Card onCardLike={handleCardLike} onCardDelete={handleCardDelete} onCardClick={onCardClick} card={card} key={card._id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;