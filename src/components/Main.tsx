import React from 'react';
import galaxy from '../img/galaxy.jpg'
import star from '../img/sun.jpg'
import planet from '../img/planet.jpg'
import planet2 from '../img/Planet-2.jpg'

export const Main = () => {
    return (
        <main>
            <section className={'section-about'}>
                <div className={"u-center-text u-margin-bottom-big"}>
                    <h2 className={"heading-secondary"}>
                        Exiting tours for adventurous people
                    </h2>
                </div>
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
                        <a href="#" className="btn-text">Learn more &rarr;</a>
                    </div>
                    <div className="composition">
                        <img src={planet} alt="planet" className="composition__photo composition__photo--p1"/>
                        <img src={galaxy} alt="galaxy" className="composition__photo composition__photo--p2"/>
                        <img src={star} alt="star" className="composition__photo composition__photo--p3"/>
                    </div>
                </div>
            </section>
        </main>
    );
};
