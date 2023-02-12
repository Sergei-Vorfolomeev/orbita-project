import React from 'react';
import {Button} from "./Button";

type TourPropsType = {
    title: string
    style: {backgroundImage: string}
    details: string[]
    price: string
}

export const Tour = (props: TourPropsType) => {

    const buttonStyle = {
        backgroundColor: '#FFF',
        color: '#555555FF'
    }

    return (
        <div className={'card'}>
            <div className="card__side card__side--front">
                <div className="card__picture" style={props.style}/>
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
                <div className="price">
                    <p className="price-only">Only</p>
                    <p className="price-value">{props.price}</p>
                </div>
                <div className="button-box">
                    <Button name={'Book now'} style={buttonStyle}/>
                </div>
            </div>
        </div>
    );
};
