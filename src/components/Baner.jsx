import React, {useState, useEffect, useContext} from 'react'
import { AppContext } from '../contexts/context';


function Baner() {
  let {pokemon, opp,health,oppHealth, 
    getPokemon, getOpp, moves, oppMoves, getMove,vis,doMove,
  win, winner, newGame} = useContext(AppContext)

  useEffect(() => {
    getPokemon();
    getOpp();
  }, []);

  return (
    <div className='banner'>
      <h3 className='pokemonTitle'>Pokemon battle of the day</h3>
      {
        win && (winner == "player" ? 
        <div>
          <h1>You win</h1>
          <button onClick={newGame}>Start new game</button>
        </div> : 
        <div>
          <h1>You lose</h1>
          <button onClick={newGame}>Start new game</button>
          </div> )
      }
      <div className="battle">
        {
          pokemon ? <div className='pokemondisplay'>
              <h4>Name: {pokemon.name}</h4>
              <div className="info">
                  <p>Height: {pokemon.height} M.</p>
                  <p>Weight: {pokemon.weight} G.</p>
                  <p>Health: {health}</p>
              </div>
              <img src={pokemon.sprites.back_default} alt="" className='pokemon' />
              <br/>
              {
                vis && <button className='moves' onClick={getMove}>Load moves</button>
              }
              
              {
                moves && moves.map((item,i)=>{
                  return <button className='moves' key={item.name} 
                  onClick={()=>{doMove(i)}} disabled={win}>{item.name}</button>
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
                  <p>Health: {oppHealth}</p>
              </div>
              <img src={opp.sprites.front_default} alt="" className='pokemon' />
              <br/>
              <p className='oppmoves'>
              {
                oppMoves && oppMoves.map((item)=>{
                  return item.name + "  "
                })
              }
              </p>
              
          </div>
          :<h1>Loading</h1>
        }
      </div>
      
    </div>
  )
}

export default Baner
