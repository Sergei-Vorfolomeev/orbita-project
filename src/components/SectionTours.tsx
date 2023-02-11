import React from 'react';
import {Title} from "./common/Title";
import {Tour} from "./common/Tour";

export const SectionTours = () => {
    return (
        <section className={'section-tours'}>
            <Title text={'Most popular tours'}/>
            <div className="container">
                <Tour/>
                <Tour/>
                <Tour/>
            </div>
        </section>
    );
};
