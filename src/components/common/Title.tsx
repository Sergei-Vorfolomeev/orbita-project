import * as React from 'react';

type TitlePropsType = {
    text: string
    style: {marginBottom: string}
    backgroundImage?: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <div className={"u-center-text"} >
            <h2 className={"heading-secondary"} style={props.style}>
                {props.text}
            </h2>
        </div>
    );
};
