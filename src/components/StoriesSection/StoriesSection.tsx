import React from 'react';
import {Story} from "./Story";
import {Title} from "../common/Title";
import avatarMe from '../../img/avatarMe.jpg'
import avatarArtem from '../../img/Artem-avatar.jpg'
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
        <div className={'section-stories'}>
            <Title text={'We make people happy'} style={titleStyleMarginBottomMedium}/>
            <Story avatar={avatarMe}
                   name={'Sergey'}
                   title={'My life is completely different now'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate ea, fugiat magni\n' +
                       'maiores non numquam quis quisquam rem, reprehenderit velit vero? Cupiditate deserunt eligendi fugit,\n' +
                       'in laborum libero maiores maxime necessitatibus nihil nobis numquam officia omnis praesentium!'}
                   style={avatarMeStyle}
                   />
            <Story avatar={'https://images.unsplash.com/photo-1448518184296-a22facb4446f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
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

        </div>
    );
};
