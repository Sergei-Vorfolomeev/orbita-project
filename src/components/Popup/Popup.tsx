import * as React from 'react';
// import img1 from '../../img/galaxy.jpg'
import img1 from '../../img/saturn.jpeg'
import img2 from '../../img/WallpaperDog-5560509.jpg'
import {Button} from "../common/Button";

export const Popup = () => {

    const buttonStyle = {
        backgroundColor: '#710D7DD1',
        color: '#FFF'
    }

    return (
        <div className={'popup'}>
            <div className="popup__content">
                <div className="popup__left">
                    <img src={img1} alt="" className={'popup__img'}/>
                    <img src={img2} alt="" className={'popup__img'}/>
                </div>
                <div className="popup__right">
                    <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                    <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                    <p className="popup__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt eaque explicabo impedit pariatur, possimus praesentium quia totam veniam! Ad assumenda blanditiis eaque iste magnam reprehenderit tempore ullam? Commodi earum esse facilis hic! Asperiores autem cumque doloribus esse eum exercitationem odio! Amet dolorem fuga obcaecati quae soluta! Adipisci aliquid architecto asperiores at aut, commodi culpa cumque delectus deleniti dolor doloremque eveniet expedita facilis illum inventore iste laborum magni? Accusamus ad aliquam doloremque et harum illo iusto maiores nostrum, recusandae, soluta tempore temporibus.
                    </p>
                    <Button name={'Book now'} style={buttonStyle}/>
                </div>
            </div>
        </div>
    );
};
