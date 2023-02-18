import * as React from 'react';
import {Story} from "./Story";
import {Title} from "../common/Title";
import avatarMe from '../../img/avatarMe.jpg'
import avatarSecond from '../../img/avatarSecond.jpeg'
import universeVideo from '../../img/UniverseVideo.mp4'
import {Button2} from "../common/Button2";

export const StoriesSection = () => {

    const titleStyleMarginBottomMedium = {
        marginBottom: '70px'
    }
    const avatarMeStyle = {
        left: '1.85rem',
    }
    const avatarSecondStyle = {
        left: '-4rem',
    }

    return (
        <section className={'section-stories'} id={'section-stories'}>
            {/*<div className="bg-video">*/}
            {/*    <video className="bg-video__container" autoPlay muted loop>*/}
            {/*        <source src={universeVideo} type='video/mp4'/>*/}
            {/*    </video>*/}
            {/*</div>*/}
                <Title text={'We make people happy'} style={titleStyleMarginBottomMedium}/>
                <Story avatar={avatarMe}
                       name={'Sergey'}
                       title={'My life is completely different now'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate ea, fugiat magni\n' +
                           'maiores non numquam quis quisquam rem, reprehenderit velit vero? Cupiditate deserunt eligendi fugit,\n' +
                           'in laborum libero maiores maxime necessitatibus nihil nobis numquam officia omnis praesentium!'}
                       style={avatarMeStyle}
                />
                <Story avatar={avatarSecond}
                       name={'Mary'}
                       title={'I had the best time ever'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate ea, fugiat magni\n' +
                           'maiores non numquam quis quisquam rem, reprehenderit velit vero? Cupiditate deserunt eligendi fugit,\n' +
                           'in laborum libero maiores maxime necessitatibus nihil nobis numquam officia omnis praesentium!'}
                       style={avatarSecondStyle}
                />
                <div className={'btn-box'}>
                    <Button2 name={'Read all stories'}/>
                </div>
        </section>
    );
};
