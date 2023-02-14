import * as React from 'react';
import '../sass/main.scss'
import logo from '../img/logo.jpg'
import {Button} from "./common/Button";


export const Header = () => {

    const buttonStyle = {
        backgroundColor: '#FFF',
        color: '#555555FF'
    }

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
                <Button name={'Describe our tours'} style={buttonStyle}/>
            </div>
        </header>
    );
};

