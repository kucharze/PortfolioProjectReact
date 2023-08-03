import React, {useState, useEffect, useContext} from 'react'
import { AppContext } from '../contexts/context';


function Baner() {
  let {pokemon, opp,health,oppHealth, 
    getPokemon, getOpp, moves, oppMoves, getMove,vis,doMove,
  win, winner, newGame,annoucement} = useContext(AppContext)

  useEffect(() => {
    newGame()
  }, []);

  return (
    <div className='banner'>
      <h2 className='pokemonTitle'>Pokemon battle prototype</h2>
      {
        win &&  (winner == "player" ? 
        <div>
          <h1 >You win</h1>
          <button className='moves' onClick={newGame}>Start new game</button>
        </div> : 
        <div>
          <h1 >You lose</h1>
          <button onClick={newGame}>Start new game</button>
          </div> ) 
      }
      <h2 >{annoucement}</h2>
      <div className="battle">
        {
          pokemon ? <div className='pokemondisplay'>
              <h3>Name: {pokemon.name}</h3>
              <div className="info">
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
              <h3>Name: {opp.name}</h3>
              <div className="info">
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
