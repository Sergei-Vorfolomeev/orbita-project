import * as React from 'react';
import logo from '../img/logo.jpg'

export const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className="footer__logo-box">
                <img src={logo} alt="logo" className={'footer__logo'}/>
            </div>
            <div className="footer__information-container">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Carriers</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                    </ul>
                </div>
                <div className="footer__copyrights">
                    <p>Built by <a href="#" className={'footer__link'}>Sergey Vorfolomeev</a>. Copyrights &copy; by Sergey Vorfolomeev. You are 100% allowed for both personal and commercial use, but NOT to claim it as your own design.</p>
                </div>
            </div>
        </footer>
    );
};
