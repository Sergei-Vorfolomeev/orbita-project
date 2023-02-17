import * as React from 'react';
import planet from "../../img/planet.jpg";
import galaxy from "../../img/galaxy.jpg";
import star from "../../img/sun.jpg";
import {Title} from "../common/Title";
import {Button2} from "../common/Button2";

export const About = () => {

    const titleStyleMarginBottomBig = {
        marginBottom: '10rem'
    }

    return (
        <section className={'section-about'} id={'section-about'}>
            <Title text={'Exiting tours for adventurous people'} style={titleStyleMarginBottomBig}/>
            <div className="container">
                <div className="text-container">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        You're going to fall in love with space
                    </h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magnam modi obcaecati quisquam
                        quo sapiente sunt totam? At commodi cum dolore, ea eaque impedit laudantium nisi obcaecati
                        odio optio repudiandae soluta totam velit! Asperiores blanditiis deleniti eligendi esse
                        facilis fuga magni molestiae nihil omnis. </p>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Live adventures like you never have before
                    </h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut cumque, cupiditate
                        dignissimos doloremque, ducimus eaque esse illo illum ipsum laboriosam modi.
                    </p>
                    <Button2 name={'Learn more'}/>
                </div>
                <div className="composition">
                    <img src={planet} alt="planet" className="composition__photo composition__photo--p1"/>
                    <img src={galaxy} alt="galaxy" className="composition__photo composition__photo--p2"/>
                    <img src={star} alt="star" className="composition__photo composition__photo--p3"/>
                </div>
            </div>
        </section>
    );
};

