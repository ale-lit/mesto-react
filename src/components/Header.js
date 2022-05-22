function Header({ changeTheme, theme }) {
    return (
        <header className="header root__container">
            <div
                className={`header__logo ${
                    theme === "light" ? "header__logo_theme_light" : ""
                }`}
                onClick={changeTheme}
            ></div>
        </header>
    );
}

export default Header;
