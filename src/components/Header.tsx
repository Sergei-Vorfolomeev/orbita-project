import React from 'react';
import '../sass/main.scss'
import logo from '../img/logo.jpg'


export const Header = () => {
    return (
        <header className={'header'}>
            <div className={'header__logoBox'}>
                <img src={logo} alt="logo" className={'header__logo'}/>
            </div>
            <div className={'header__textBox'}>
                <h1 className={'heading-primary'}>
                    <span className={'heading-primary--main'}>Orbita</span>
                    <span className={'heading-primary--sub'}>Deeper into space</span>
                </h1>
                <a href="#" className={'btn'}>Describe our tours</a>
            </div>
        </header>
    );
};

