import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg'>
        <Link to="/">
          <img className='navbar-brand' src="./icons_assets/Logo.svg " alt="LOGO"/>
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id="navbarNavAltMarkup">
          <div className='navbar-nav text-center' id="elements">
            <Link className='nav-link px-4' aria-current='page' to='/'>HOME</Link>
            <Link className='nav-link px-4' to='/about'>ABOUT</Link>
            <Link className='nav-link px-4' to='/menu'>MENU</Link>
            <Link className='nav-link px-4' to='/reservations'>RESERVATIONS</Link>
            <Link className='nav-link px-4' to='/orderonline'>ORDER ONLINE</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
