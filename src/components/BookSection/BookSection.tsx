import React from 'react';
import {Title} from "../common/Title";

export const BookSection = () => {

    const titleStyleMarginBottomMedium = {
        marginBottom: '70px'
    }

    return (
        <section className={'section-book'}>
            <div className="book">
                <div className="book__form">
                    <Title text={'Start booking now'} style={titleStyleMarginBottomMedium}/>
                    <form action="#" className={'form'}>
                        <div className="form__group">
                            <input type="text" className={'form__input'} placeholder={'Full Name'} id={'name'}required/>
                            <label htmlFor={'name'}>Full name</label>
                        </div>
                        <div className="form__group">
                            <input type="email" className={'form__input'} placeholder={'Email address'} id={'email'}required/>
                            <label htmlFor={'email'}>Email address</label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
