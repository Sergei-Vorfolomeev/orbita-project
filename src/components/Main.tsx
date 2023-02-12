import React from 'react';
import {About} from "./AboutSection/About";
import {Features} from "./FeaturesSection/Features";
import {SectionTours} from "./ToursSection/SectionTours";
import {StoriesSection} from "./StoriesSection/StoriesSection";

export const Main = () => {
    return (
        <main>
            <About/>
            <Features/>
            <SectionTours/>
            <StoriesSection/>
        </main>
    );
};
