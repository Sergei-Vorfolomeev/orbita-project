import * as React from 'react';

type ButtonPropsType = {
    name: string
    style: {backgroundColor: string, color: string}
}

export const Button = ({name, style}: ButtonPropsType) => {
    return (
            <a href="#" className={'btn'} style={style}>{name}</a>
    );
};
