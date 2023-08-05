import React, {useEffect, useContext} from 'react'
import { AppContext } from '../contexts/context';


function Baner() {
  let {pokemon, opp,health,oppHealth, moves, oppMoves, getMove,vis,doMove,
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
          <h2 className='annoucement'>You win</h2>
          <button className='moves' onClick={newGame}>Start new game</button>
        </div> : 
        <div>
          <h2 className='annoucement'>You lose</h2>
          <button onClick={newGame} className='moves'>Start new game</button>
          </div> ) 
      }
      <h2 className='annoucement'>{annoucement}</h2>
      <div className="battle">
        {
          pokemon ? <div className='pokemondisplay'>
              <h3>Name: {pokemon.name}</h3>

              <img src={pokemon.sprites.back_default} alt="" className='pokemon' />
              <div className="info">
                  <p>Health: {health}</p>
              </div>
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

              <img src={opp.sprites.front_default} alt="" className='pokemon' />
              <div className="info">
                  <p>Health: {oppHealth}</p>
              </div>
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
