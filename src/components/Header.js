function Header({changeTheme}) {
  return (
    <header className="header root__container">
      <div className="header__logo" onClick={changeTheme} title="Переключить стиль"></div>
    </header>
  );
}

export default Header;