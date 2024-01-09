import React from "react";
import Card from "./Card";
import cardProps from "./CardProp";


function createCard(cardContent) {
    return (
        <Card
            key = {cardContent.id}
            image = {cardContent.imgURL}
            title={cardContent.title}
            cost={cardContent.cost}
            features1={cardContent.features[0]}
            features2={cardContent.features[1]}
            features3={cardContent.features[2]}
        />
    );
    // console.log(features[1]);
}


function Offers() {
    return (
        <>
            <div className="w-full lg:px-32 min-h-[60vh] bg-white flex flex-col lg:flex-row justify-center items-center gap-10 py-10">
                {cardProps.map(createCard)}
            </div>
        </>
    );
}

export default Offers;