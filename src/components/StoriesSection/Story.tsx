import * as React from 'react';

type StoryPropsType = {
    avatar: string
    name: string
    title: string
    description: string
    style: StyleType
}
type StyleType = {
    left: string
}

export const Story = ({avatar, name, title, description, style}: StoryPropsType) => {
    return (
        <div className={'story'}>
            <div className="story__shape">
                <img src={avatar} alt="avatar" className={'story__img'} style={style} />
                <div className="story__name">{name}</div>
            </div>
            <div className="story__text">
                <h3 className="heading-tertiary">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};
