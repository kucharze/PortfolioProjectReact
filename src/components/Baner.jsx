import React, {useState, useEffect, useContext} from 'react'
import { AppContext } from '../contexts/context';


function Baner() {
  let { opp} = useContext(AppContext)
    const [pokemon,setPokemon] = useState(null)

  const getPok = async () => {
    try {
      let item = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(
          Math.random() * (300 - 1 + 1) + 1
        )}`
      );
      let data = await item.json();
      //console.log("opp:", data);
      setPokemon(data);
    } catch (err) {
      console.log("We did not find a valid pokemon");
    }
  };

  useEffect(() => {
    getPok();
  }, []);
  return (
    <div className='banner'>
      <h3>Pokemon of the day</h3>
      {
        pokemon ? <div className='pokemondisplay'>
            <h4>Name: {pokemon.name}</h4>
            <div className="info">
                <p>Height: {pokemon.height} M.</p>
                <p>Weight: {pokemon.weight} G.</p>
            </div>
            <img src={pokemon.sprites.front_default} alt="" className='pokemon' />
        </div>
        :<h1>Loading</h1>
      }
    </div>
  )
}

export default Baner
