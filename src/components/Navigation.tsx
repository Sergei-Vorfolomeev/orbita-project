import * as React from 'react';

export const Navigation = () => {
    return (
        <div className={'navigation'}>
            <input type="checkbox" className="navigation__checkbox" id={'navi-toggle'}/>
            <label htmlFor="navi-toggle" className={'navigation__button'}></label>
            <div className="navigation__background"></div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>About Orbita</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Your benefits</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Popular tours</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Stories</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>Book now</a></li>
                </ul>
            </nav>
        </div>
    );
};
