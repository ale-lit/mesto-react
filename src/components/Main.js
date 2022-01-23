import React, { useState, useEffect } from 'react';
import Card from './Card';
import {api} from '../utils/api.js';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');  
  
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getAllNeededData()
      .then(([cards, user]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);

        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile root__container">
        <div onClick={onEditAvatar} className="profile__avatar-container">
          <img alt="Аватар пользователя" className="profile__avatar" src={userAvatar} />
        </div>
        <div className="profile__info">
          <div className="profile__info-inner">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={onEditProfile} type="button" aria-label="Редактировать профиль" className="profile__edit-button"></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button onClick={onAddPlace} type="button" aria-label="Добавить новое место" className="profile__add-button" title="Добавить новое место"></button>
      </section>

      <section className="photo-grid root__container">
        <ul className="places">
          {cards.map((card, i) => (
            <Card onCardClick={onCardClick} card={card} key={card._id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;