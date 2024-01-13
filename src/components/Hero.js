
// import Typed from 'react-typed';

const Hero = () => {
    return (
        <>
            <div className="h-[90vh] w-full flex flex-col justify-center items-center">
                <p className="text-[#00df9a] font-extrabold">Growing with the Data Anlytics</p>
                <p className="text-white text-4xl font-extrabold mt-2">Grow with Data.</p>
                <p className="text-white">
                    Fast, flexible financing for
                    {/* <Typed 
                        strings = {['BTC', 'BTB']}
                        typeSpeed = {40}
                        backSpeed = {40}
                        loop
                    /> */}
                </p>
                <p className="text-gray-500 mt-4 font-bold flex text-center px-10 lg:px-0">Monitor your data analytics to increase revenue for BTB, BTC</p>
                <p className="text-gray-500 font-bold">SASS platforms.</p>
                <button className="text-black bg-[#00df9a] px-5 py-2 rounded-lg mt-3 transition ease-in hover:translate-y-2 hover:scale-110 hover:bg-white    ">Get Started</button>
            </div>
        </>
    );
}

export default Hero;