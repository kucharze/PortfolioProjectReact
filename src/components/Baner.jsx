import React, {useState, useEffect} from 'react'


function Baner() {
    const [pokemon,setPokemon] = useState(null)

    const getOpp = async () => {
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
    getOpp();
  }, []);
  return (
    <div className='banner'>
      <h5>Pokemon of the day</h5>
      {
        pokemon ? <div className='pokemondisplay'>
            <h3>Name: {pokemon.name}</h3>
            <div className="info">
                <h3>Height: {pokemon.height} M.</h3>
                <h3>Weight: {pokemon.weight} KG.</h3>
            </div>
            <img src={pokemon.sprites.front_default} alt="" className='pokemon' />
        </div>
        :<h1>Loading</h1>
      }
    </div>
  )
}

export default Baner
