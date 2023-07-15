import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <section className='section7'>
                <section className="s1">
                    <img src="/icons_assets/footer logo.jpg" alt="LOGO"></img>
                </section>
                <section className="s2">
                    <h4>Doormat Navigation</h4>
                    <ul id="list">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/">Menu</Link>
                        </li>
                        <li>
                            <Link to="/reservations">Reservations</Link>
                        </li>
                        <li>
                            <Link to="/">Order Online</Link>
                        </li>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                    </ul>
                </section>
                <section className="s3">
                    <h4>Contact</h4>
                    <ul id="list">
                        <li>
                            <Link to="/">Address</Link>
                        </li>
                        <li>
                            <Link to="/">Phone Number</Link>
                        </li>
                        <li>
                            <Link to="/">Email</Link>
                        </li>
                    </ul>
                </section>
                <section className="s4">
                    <h4>Social Media Links</h4>
                    <ul id="list">
                        <li>
                            <Link to="/">Address</Link>
                        </li>
                        <li>
                            <Link to="/">Phone Number</Link>
                        </li>
                        <li>
                            <Link to="/">Email</Link>
                        </li>
                    </ul>
                </section>
            </section>
        </footer>
    )
}

export default Footer;