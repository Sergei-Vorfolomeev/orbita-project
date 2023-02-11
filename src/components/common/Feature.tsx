import React from 'react';
import iconUniverse from "../../icons/universe.png";

type FeaturePropsType = {
    img: string
    title: string
    description: string
}

export const Feature = (props: FeaturePropsType) => {
    return (
        <div className="feature-box">
            <img src={props.img} alt="icon" className='feature-box__icon u-margin-bottom-small'/>
            <h3 className="heading-tertiary u-margin-bottom-small">{props.title}</h3>
            <p className="feature-box__text">{props.description}</p>
        </div>
    );
};
