import * as React from 'react';
import {Title} from "../common/Title";
import {Button} from "../common/Button";

export const BookSection = () => {

    const titleStyleMarginBottomMedium = {
        marginBottom: '70px'
    }

    const buttonStyle = {
        backgroundColor: '#710D7DD1',
        color: '#FFF'
    }

    return (
        <section className={'section-book'}>
            <div className="book">
                <div className="book__form">
                    <Title text={'Start booking now'} style={titleStyleMarginBottomMedium}/>
                    <form action="#" className={'form'}>
                        <div className="form__group">
                            <input type="text" className={'form__input'} placeholder={'Full Name'} id={'name'}
                                   required/>
                            <label htmlFor={'name'} className={'form__label'}>Full name</label>
                        </div>
                        <div className="form__group">
                            <input type="email" className={'form__input'} placeholder={'Email address'} id={'email'}
                                   required/>
                            <label htmlFor={'email'} className={'form__label'}>Email address</label>
                        </div>
                        <div className="form__group">
                            <div className="form__radio-group">
                                <input type="radio" className="form__radio-input" id={'beginner'} name={'radio'}/>
                                <label htmlFor="beginner" className={'form__radio-label'}>
                                    <span className="form__radio-button"></span>
                                    I'm beginner
                                </label>
                            </div>
                            <div className="form__radio-group">
                                <input type="radio" className="form__radio-input" id={'experienced'} name={'radio'}/>
                                <label htmlFor="experienced" className={'form__radio-label'}>
                                    <span className="form__radio-button"></span>
                                    I'm experienced
                                </label>
                            </div>
                        </div>
                    </form>
                    <div className={'button-box'}>
                        <Button name={'Next step'} style={buttonStyle}/>
                    </div>
                </div>
            </div>
        </section>
    );
};
