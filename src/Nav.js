import './Nav.css';

function Nav() {
    return (
        <nav>
            <ul className="navigation">
                <li className="logo">
                    <img src='./icons_assets/Logo.svg' alt="LOGO"></img>
                </li>
                <li className="elements">HOME</li>
                <li className="elements">ABOUT</li>
                <li className="elements">MENU</li>
                <li className="elements">RESERVATIONS</li>
                <li className="elements">ORDER ONLINE</li>
                <li className="elements">LOGIN</li>
            </ul>
        </nav>
    );
}

export default Nav;