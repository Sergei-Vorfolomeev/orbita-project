import * as React from 'react';
import {About} from "./AboutSection/About";
import {Features} from "./FeaturesSection/Features";
import {SectionTours} from "./ToursSection/SectionTours";
import {StoriesSection} from "./StoriesSection/StoriesSection";
import {BookSection} from "./BookSection/BookSection";

export const Main = () => {
    return (
        <main>
            <About/>
            <Features/>
            <SectionTours/>
            <StoriesSection/>
            <BookSection/>
        </main>
    );
};
