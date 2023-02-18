import * as React from 'react';
import styles from './button3.module.scss'

type Button2PropsType = {
    name: string
}

export const Button3 = ({name}: Button2PropsType) => {
    return (
        <a href="src/components/AboutSection/About#" className={styles.btn}>{name} &rarr;</a>
    );
};