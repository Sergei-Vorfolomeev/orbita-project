import React from 'react';
import styles from './Header.module.css'
import logo from '../img/logo.jpg'


export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoBox}>
                <img src={logo} alt="logo" className={styles.logo}/>
            </div>
            <div className={styles.textBox}>
                <span className={styles.titlePrimary}>Orbita</span>
                <span className={styles.titleSub}>Deeper into space</span>
            </div>

        </header>
    );
};

