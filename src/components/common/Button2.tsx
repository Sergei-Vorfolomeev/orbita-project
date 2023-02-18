import * as React from 'react';

type Button2PropsType = {
    name: string
    style?: {
        color: string
        borderBottom: string
    }
}

export const Button2 = ({name, style}: Button2PropsType) => {
    return (
        <a href="src/components/AboutSection/About#" className="btn-text" style={style}>{name} &rarr;</a>
    );
};
