import React, {useState, useEffect, useContext} from 'react'
import { AppContext } from '../contexts/context';


function Baner() {
  let {pokemon,setPokemon, opp,setOpp, getPokemon, getOpp, moves, oppMoves, getMove,vis} = useContext(AppContext)

  useEffect(() => {
    //getPok();
    getPokemon();
    
    getOpp();
  }, []);
  return (
    <div className='banner'>
      <h3>Pokemon battle of the day</h3>
      <div className="battle">
        {
          pokemon ? <div className='pokemondisplay'>
              <h4>Name: {pokemon.name}</h4>
              <div className="info">
                  <p>Height: {pokemon.height} M.</p>
                  <p>Weight: {pokemon.weight} G.</p>
              </div>
              <img src={pokemon.sprites.back_default} alt="" className='pokemon' />
              <br/>
              {
                vis && <button onClick={getMove}>Load moves</button>
              }
              
              {
                moves && moves.map((item)=>{
                  return <button className='moves' key={item.name}>{item.name}</button>
                })
              }
          </div>
          :<h1>Loading</h1>
        }
        {
          opp ? <div className='pokemondisplay'>
              <h4>Name: {opp.name}</h4>
              <div className="info">
                  <p>Height: {opp.height} M.</p>
                  <p>Weight: {opp.weight} G.</p>
              </div>
              <img src={opp.sprites.front_default} alt="" className='pokemon' />
          </div>
          :<h1>Loading</h1>
        }
      </div>
      
    </div>
  )
}

export default Baner
