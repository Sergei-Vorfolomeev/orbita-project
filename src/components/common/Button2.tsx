import React from 'react';

type Button2PropsType = {
    name: string
}

export const Button2 = ({name}: Button2PropsType) => {
    return (
        <a href="src/components/AboutSection/About#" className="btn-text">{name} &rarr;</a>
    );
};
