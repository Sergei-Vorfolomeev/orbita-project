import React from 'react';

type StoryPropsType = {
    avatar: string
}

export const Story = ({avatar}: StoryPropsType) => {
    return (
        <div className={'story'}>
            <div className="story__shape"/>
            <div className="story__text">
                <h3 className="heading-tertiary">
                    I had the best time ever
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate ea, fugiat magni maiores non numquam quis quisquam rem, reprehenderit velit vero? Cupiditate deserunt eligendi fugit, in laborum libero maiores maxime necessitatibus nihil nobis numquam officia omnis praesentium!
                </p>
            </div>
        </div>
    );
};
