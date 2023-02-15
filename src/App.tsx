import * as React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";
import {useState} from "react";
import {Navigation} from "./components/Navigation";

function App() {

    const [navPage, setNavPage] = useState(false)

    const onClickHandler = () => {
        setNavPage(!navPage)
    }

    return (
        navPage
            ? <Navigation navPage={navPage} setNavPage={setNavPage}/>
            :
            <div className="App">
                <div className="navigation-button" onClick={onClickHandler}></div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
    );
}

export default App;
