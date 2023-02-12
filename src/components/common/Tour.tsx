import React from 'react';

type TourPropsType = {
    title: string
    style: {backgroundImage: string}
    details: string[]
}

export const Tour = (props: TourPropsType) => {
    return (
        <div className={'card'}>
            <div className="card__side card__side--front">
                <div className="card__picture" style={props.style}>

                </div>
                <h4 className="card__heading">
                    <span className="card__heading-span">{props.title}</span>
                </h4>
                <div className="card__details">
                    <ul>
                        {props.details.map((el, index) => {
                            return (
                                <li key={index}>{el}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="card__side card__side--back">
                BACK
            </div>
        </div>
    );
};
