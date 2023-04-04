import * as React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";
import {Navigation} from "./components/Navigation";
import {useEffect, useState} from "react";
import {Loader} from "./components/Loader/Loader";

function App() {
    // const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(true)
    //     }, 1500)
    // },[])
    //
    // if (!loading) return <Loader/>
    return (
        <div className="App">
            <Navigation/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
