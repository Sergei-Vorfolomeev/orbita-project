import * as React from 'react';

type NavigationPropsType = {
    navPage: boolean;
    setNavPage: (value: boolean) => void
}

export const Navigation = ({navPage, setNavPage}: NavigationPropsType) => {
    const onClickHandler = () => {
        setNavPage(!navPage)
    }
    return (
        <div className={'navigation'}>
            <div className="navigation-button" onClick={onClickHandler}></div>

        </div>
    );
};
