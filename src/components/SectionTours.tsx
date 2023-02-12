import React from 'react';
import {Title} from "./common/Title";
import {Tour} from "./common/Tour";
import saturn from '../img/saturn.jpeg'
import jupiter from '../img/galaxy.jpg'
import andromeda from '../img/WallpaperDog-5560400.jpg'

export const SectionTours = () => {

    const color1 = 'rgba(198, 163, 250, 0.2)';
    const color2 = 'rgba(78, 214, 231, 0.3)'
    const color3 = 'rgba(121,78,231,0.3)'
    const color4 = 'rgba(78,231,208,0.3)'

    const saturnTourStyles = {
        backgroundImage: `linear-gradient(to right bottom, ${color1}, ${color2}), url(${saturn})`
        // linear-gradient(to right bottom, ${color1}, ${color2}),
        //`url(${saturn})`,
    }
    const milkyWayTourStyles = {
        backgroundImage: `linear-gradient(to right bottom, ${color3}, ${color4}), url(${jupiter})`
        // linear-gradient(to right bottom, ${color3}, ${color4}),
        //`url(${saturn})`,
    }
    const andromedaTourStyles = {
        backgroundImage: `linear-gradient(to right bottom, ${color3}, ${color4}), url(${andromeda})`
        // linear-gradient(to right bottom, ${color3}, ${color4}),
        //`url(${saturn})`,
    }
    const titleStyleMarginBottomMedium = {
        marginBottom: '70px'
    }

    const saturnTourDetails = ['The first feature', 'Duration will be some months', 'Visit Saturn\'s moons', 'Explore Saturn\'s rings', 'minus optio porro reiciendis unde vero']
    const milkyWayTourDetails = ['The first feature', 'Duration will be some years', 'Visit other star system', 'Explore our galaxy', 'minus optio porro reiciendis unde vero']
    const andromedaTourDetails = ['The first feature', 'Duration will be some years', 'Visit other star system', 'Explore our galaxy', 'minus optio porro reiciendis unde vero']

    return (
        <section className={'section-tours'}>
            <Title text={'Most popular tours'} style={titleStyleMarginBottomMedium}/>
            <div className="container">
                <Tour title={'Saturn'} style={saturnTourStyles} details={saturnTourDetails}/>
                <Tour title={'Milky way'} style={milkyWayTourStyles} details={milkyWayTourDetails}/>
                <Tour title={'Andromeda'} style={andromedaTourStyles} details={andromedaTourDetails}/>
            </div>
        </section>
    );
};
