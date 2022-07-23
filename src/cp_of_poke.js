import PropTypes from 'prop-types';
import React from "react";

const CardPoke = ({ pokeName, pokeType, pokeId, bgColor, pokeImg  }) => {
    console.log(pokeName);
    console.log(pokeType);
    console.log(pokeId);
    console.log(bgColor);

    return (
        <>
            <div className="pokemon" style={{
                backgroundColor: `${bgColor}`
            }} >
                <div className="img-container">
                    <img src={pokeImg} alt={pokeName} />
                </div>
                <div className="info">
                    <span className="number">#{pokeId}</span>
                    <h3 className="name">{pokeName}</h3>
                    <small className="type">Type: <span>{pokeType}</span></small>
                </div>
            </div>
        </>
    );
};

CardPoke.prototype = {
    pokeName: PropTypes.string.isRequired,
    pokeType: PropTypes.string.isRequired,
    pokeId: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    pokeImg:PropTypes.string.isRequired
};
export default CardPoke;