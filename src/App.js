import { axios } from "axios";
import React, { useEffect, useState } from "react";
import CardPoke from "./cp_of_poke.js";
import { main_types, main_color } from './script.js';
import './App.css'
import './script.js'


// Hàm dùng để mapping giữa type của poke vs màu nền của card
let colorCard;
const mappingColor = (arrType, typeCard) => {
  for (let i = 0; i < arrType.length; i++) {
    if (arrType[i] === typeCard) {
      colorCard = main_color[i];
    }
  }
  return colorCard;
}


function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isActiveState, setActiveState] = useState(false);

  const handleOnclick = () => {
    console.log('Click');
    setActiveState(!isActiveState);
  }

  useEffect(() => {
    const getPokemon = async () => {
      const pokemons = [];
      for (let index = 1; index <20 ; index++) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${index}`
        )
          .then((res) => {
            return res.json();
          }).then((data) => {
            return data;
          });
        console.log('response inside: ', response);
        pokemons.push(response)
      }

      setPokemonData(pokemons);
    }
    getPokemon();
  }, [])
  console.log(pokemonData);
 

  return (
    <>
      <h1>PokeDex</h1>
      <div id="poke_container" className="poke-container">
        {pokemonData.length > 0 && pokemonData.map((pokemon) =>
        (<CardPoke bgColor={mappingColor(main_types, pokemon.types[0].type.name)}
          pokeName={pokemon.name} pokeType={pokemon.types[0].type.name}
          pokeId={pokemon.id} pokeImg={pokemon.sprites.back_default}></CardPoke>)
        )}
      </div>

      <div className={isActiveState ? "social-panel-container visible" : "social-panel-container"} >
        <div className="social-panel">
          <p>Contact us</p>

          <h4 >Get in touch on</h4>
          <button className="close-btn"><i className="fas fa-times"></i></button>
          <ul>
            <li>
              <a href="https://twitter.com/" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/" target="_blank">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button className="floating-btn" onClick={() => handleOnclick()} >
        Get in Touch
      </button>
    </>

  );
}

export default App;
