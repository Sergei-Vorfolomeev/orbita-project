import * as React from 'react';

type ButtonPropsType = {
    name: string
    style: {backgroundColor: string, color: string}
    href: string
}

export const Button = ({name, style, href}: ButtonPropsType) => {
    return (
            <a href={href} className={'btn'} style={style}>{name}</a>
    );
};
