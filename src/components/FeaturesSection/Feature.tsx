import * as React from 'react';

type FeaturePropsType = {
    img: string
    title: string
    description: string
}

export const Feature = (props: FeaturePropsType) => {
    return (
        <div className="feature-box">
            <img src={props.img} alt="icon" className='feature-box__icon u-margin-bottom-small' loading={"lazy"}/>
            <h3 className="heading-tertiary u-margin-bottom-small">{props.title}</h3>
            <p className="feature-box__text">{props.description}</p>
        </div>
    );
};
