// CHANGE THEME
function changeTheme() {
  // Add / Remove Mod Classes
  document.querySelector('.root').classList.toggle('root_theme_light');
  document.querySelector('.header__logo').classList.toggle('header__logo_theme_light');
  document.querySelector('.profile__edit-button').classList.toggle('profile__edit-button_theme_light');

  // Select All Actual Place Blocks
  const placeElement = document.querySelectorAll('.place');
  placeElement.forEach(element => {
    element.classList.toggle('place_theme_light');
  });
}

export {changeTheme};