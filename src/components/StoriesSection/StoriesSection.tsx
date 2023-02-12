import React from 'react';
import {Story} from "./Story";
import {Title} from "../common/Title";
import avatarMe from '../../img/avatarMe.jpg'

export const StoriesSection = () => {

    const titleStyleMarginBottomMedium = {
        marginBottom: '70px'
    }

    return (
        <div className={'section-stories'}>
            <Title text={'We make people happy'} style={titleStyleMarginBottomMedium}/>
            <Story avatar={avatarMe}/>
        </div>
    );
};
