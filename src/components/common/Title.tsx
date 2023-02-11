import React from 'react';

type TitlePropsType = {
    text: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <div className={"u-center-text u-margin-bottom-big"}>
            <h2 className={"heading-secondary"}>
                {props.text}
            </h2>
        </div>
    );
};
