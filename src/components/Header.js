import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__caja__logo">
          <span className="header__logo">
            <Link to={'/'}>
              <img
                src="https://bucket-dany.s3.amazonaws.com/movies/tv.png"
                alt="logo"
              />
            </Link>
          </span>
          <Link to={'/'}>
            <span className="header__title">
              <p>MovieBox</p>
            </span>
          </Link>
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
          <Link to={'/login'}>
            <span className="header__login">Cerrar sesión</span>
          </Link>
          <img
            src="https://bucket-dany.s3.amazonaws.com/movies/Menu.png"
            alt="logo"
          />
        </div>
      </header>
    </>
  );
}
