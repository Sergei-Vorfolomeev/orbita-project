import React from 'react';
import './Header.scss'
import logo from '../../img/logo.jpg'


export const Header = () => {
    return (
        <header className={'header'}>
            <div className={'logoBox'}>
                <img src={logo} alt="logo" className={'logo'}/>
            </div>
            <div className={'textBox'}>
                <span className={'titlePrimary'}>Orbita</span>
                <span className={'titleSub'}>Deeper into space</span>
                <div className={'btnBox'}>
                    <a href="src/components/Header/Header#" className={'btn'}>Describe our tours</a>
                </div>
            </div>
        </header>
    );
};

