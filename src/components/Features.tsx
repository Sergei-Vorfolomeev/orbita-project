import React from 'react';
import iconUniverse from '../icons/universe.png'
import astronaut from '../icons/astronaut.png'
import ufo from '../icons/ufo.png'

export const Features = () => {
    return (
        <section className='section-features'>

            <div className="feature-box">
                <img src={iconUniverse} alt="iconUniverse" className='feature-box__icon u-margin-bottom-small'/>
                <h3 className="heading-tertiary u-margin-bottom-small">Explore the universe</h3>
                <p className="feature-box__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illo modi quam quis sapiente ut.</p>
            </div>

            <div className="feature-box">
                <img src={astronaut} alt="iconUniverse" className='feature-box__icon u-margin-bottom-small'/>
                <h3 className="heading-tertiary u-margin-bottom-small">Find your own way</h3>
                <p className="feature-box__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illo modi quam quis sapiente ut.</p>
            </div>

            <div className="feature-box">
                <img src={ufo} alt="iconUniverse" className='feature-box__icon u-margin-bottom-small'/>
                <h3 className="heading-tertiary u-margin-bottom-small">Meet other civilization</h3>
                <p className="feature-box__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illo modi quam quis sapiente ut.</p>
            </div>

            <div className="feature-box">
                <img src={iconUniverse} alt="iconUniverse" className='feature-box__icon u-margin-bottom-small'/>
                <h3 className="heading-tertiary u-margin-bottom-small">Explore the universe</h3>
                <p className="feature-box__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illo modi quam quis sapiente ut.</p>
            </div>


        </section>
    );
};
