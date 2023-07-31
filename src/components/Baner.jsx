import React, {useState, useEffect} from 'react'


function Baner() {
    const [pokemon,setPokemon] = useState(null)

    const getOpp = async () => {
    try {
      let item = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(
          Math.random() * (100 - 1 + 1) + 1
        )}`
      );
      let data = await item.json();
      console.log("opp:", data);
      setPokemon(data);
    } catch (err) {
      console.log("We did not find a valid pokemon");
    }
  };

  useEffect(() => {
    //getPokemon();
    getOpp();
    // getMove();
  }, []);
  return (
    <div className='banner'>
      <h3>The Banner</h3>
      <h5>Pokemon of the day</h5>
      {
        pokemon ? <div>
            <h1>Info</h1>
            <img src={pokemon.sprites.front_default} alt="" className='pokemon' />
        </div>
        :<h1>Loading</h1>
      }
    </div>
  )
}

export default Baner
