import React from 'react';

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
                    <div className="image-composition">
                        Image composition
                    </div>
                </div>
            </section>
        </main>
    );
};
