import * as React from 'react';
import iconUniverse from '../../icons/universe.png'
import astronaut from '../../icons/astronaut.png'
import ufo from '../../icons/ufo.png'
import {Feature} from "./Feature";
import universeVideo from '../../img/UniverseVideo.mp4'

export const Features = () => {
    return (
        <section className='section-features' id={'section-features'}>
            <div className="bg-video">
                <video className="bg-video__container" autoPlay muted loop>
                    <source src={universeVideo} type='video/mp4'/>
                </video>
            </div>
            <Feature img={iconUniverse} title={'Explore the universe'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illo modi quam quis sapiente ut.'}/>
            <Feature img={astronaut} title={'Find your own way'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illo modi quam quis sapiente ut.'}/>
            <Feature img={ufo} title={'Meet other civilization'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illo modi quam quis sapiente ut.'}/>
            <Feature img={iconUniverse} title={'Change your life'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illo modi quam quis sapiente ut.'}/>
        </section>
    );
};
