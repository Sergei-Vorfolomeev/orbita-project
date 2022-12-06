import React from 'react';
import styles from './Header.module.css'


export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.textBox}>
                <span className={styles.titlePrimary}>Orbita</span>
                <span className={styles.titleSub}>Deeper into space</span>
            </div>
        </header>
    );
};

