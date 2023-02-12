import React from 'react';

type TitlePropsType = {
    text: string
    style: {marginBottom: string}
}

export const Title = (props: TitlePropsType) => {
    return (
        <div className={"u-center-text"} style={props.style}>
            <h2 className={"heading-secondary"}>
                {props.text}
            </h2>
        </div>
    );
};
