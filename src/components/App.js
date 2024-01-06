import React from "react";
import './index.css';

import Navbar from "./Navbar";
import Hero from "./Hero";
import Analytics from "./Analytics"
import Newsletter from "./Newsletter";


const App = () => {
    return(
        <>
            <Navbar />
            <Hero />
            <Analytics />
            <Newsletter />
        </>
    );
}

export default App;

// https://www.youtube.com/watch?v=ZU-drSVodBw