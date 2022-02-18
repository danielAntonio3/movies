export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__caja__logo">
          <span className="header__logo">
            <img
              src="https://bucket-dany.s3.amazonaws.com/movies/tv.png"
              alt="logo"
            />
          </span>
          <span className="header__title">
            <p>MovieBox</p>
          </span>
        </div>
        <div className="header__caja__busqueda">
          <input
            className="header__input__buscar"
            type="text"
            placeholder="Que quieres ver?"
          />
          <img
            src="https://bucket-dany.s3.amazonaws.com/movies/Icon.png"
            alt="busqueda"
          />
        </div>
        <div className="header__caja__login">
          <span className="header__login">Iniciar Sesión</span>
          <img
            src="https://bucket-dany.s3.amazonaws.com/movies/Menu.png"
            alt="logo"
          />
        </div>
      </header>
    </>
  );
}
