import * as React from 'react';

type TitlePropsType = {
    text: string
    style?: {backgroundImage?: string}
}

export const Title = ({text, style}: TitlePropsType) => {
    return (
        <div className={"u-center-text u-margin-bottom-medium"} >
            <h2 className={"heading-secondary"} style={style}>
                {text}
            </h2>
        </div>
    );
};
