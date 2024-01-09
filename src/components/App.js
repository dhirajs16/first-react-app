import React from "react";
import './index.css';

import Navbar from "./Navbar";
import Hero from "./Hero";
import Analytics from "./Analytics"
import Newsletter from "./Newsletter";
import Offers from "./Offers";


const App = () => {
    return(
        <>
            <Navbar />
            <Hero />
            <Analytics />
            <Newsletter />
            <Offers />
        </>
    );
}

export default App;

// https://www.youtube.com/watch?v=ZU-drSVodBw