import React from 'react';
import iconUniverse from '../icons/universe.png'
import astronaut from '../icons/astronaut.png'
import ufo from '../icons/ufo.png'
import {Feature} from "./common/Feature";

export const Features = () => {
    return (
        <section className='section-features'>
            <Feature img={iconUniverse} title={'Explore the universe'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illo modi quam quis sapiente ut.'}/>
            <Feature img={astronaut} title={'Find your own way'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illo modi quam quis sapiente ut.'}/>
            <Feature img={ufo} title={'Meet other civilization'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illo modi quam quis sapiente ut.'}/>
            <Feature img={iconUniverse} title={'Explore the universe'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illo modi quam quis sapiente ut.'}/>
        </section>
    );
};
