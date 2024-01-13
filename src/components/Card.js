import React from "react";


function Card(props) {
    return (
        <>
            <div className="w-[350px] bg-slate-200 py-8 rounded-md flex flex-col items-center cursor-pointer transition ease hover:scale-105 hover:bg-slate-300 hover:shadow-2xl">
                <img className="rounded-full mb-2" src={props.image} />
                <h3 className="text-xl font-bold">{props.title}</h3>
                <h1 className="text-3xl font-bold py-7">{props.cost}</h1>
                <p className="text-slate-600">{props.features1}</p>
                <p className="text-slate-600">{props.features2}</p>
                <p className="text-slate-600">{props.features3}</p>
                <button className="bg-[#00df9a] px-3 py-1 mt-5 rounded-md border border-slate-300 transition ease-in hover:bg-black hover:text-[#00df9a]">Start trial</button>
            </div>
        </>
    );

}

export default Card;