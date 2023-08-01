import { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

let AppContextProvider = (props) => {
  const [pokemon, setPokemon] = useState(null);
  const [opp, setOpp] = useState(null);
  const [moves, setMoves] = useState(null);
  const [oppMoves, setOppMoves] = useState(null);
  const [vis, setVis] = useState(true);

  const getMove = async () => {
    // let item = await fetch(`https://pokeapi.co/api/v2/move/851/`);
    let moveList = [];
    let checked = false;
    let i = 0;
    while (i < 4) {
      console.log("Trying to poll a move");
      let pos = Math.floor(Math.random() * (pokemon.moves.length - 1) + 1);
      console.log(pokemon.moves[pos].move.url);
      let item = await axios.get(`${pokemon.moves[pos].move.url}`);

      let data = await item.data;
      if (data.power === null) {
        continue;
      }
      for (let i = 0; i < moveList.length; i++) {
        if (moveList[i].name === data.name) {
          checked = true;
          break;
        }
      }
      if (checked == true) {
        checked = false;
        continue;
      }
      console.log("move", data);
      moveList.push(data);
      i++;
    }
    await setMoves(moveList);
    setVis(false);
  };

  const getOppMoves = async () => {
    // let item = await fetch(`https://pokeapi.co/api/v2/move/851/`);
    let moveList = [];
    let i = 0;
    while (i < 4) {
      console.log("Trying to poll a move");
      let pos = Math.floor(Math.random() * (opp.moves.length - 1) + 1);
      console.log(opp.moves[pos].move.url);
      let item = await axios.get(`${opp.moves[pos].move.url}`);

      let data = await item.data;
      if (data.power === null) {
        continue;
      }
      console.log("move", data);
      moveList.push(data);
      i++;
    }
    await setOppMoves(moveList);
    setVis(false);
  };

  const getPokemon = async () => {
    try {
      let item = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(
          Math.random() * (400 - 1 + 1) + 1
        )}`
      );
      let data = await item.json();
      console.log(data);
      setPokemon(data);
    } catch (err) {
      console.log("We did not find a valid pokemon");
    }
    //getMove();
  };

  const getOpp = async () => {
    try {
      let item = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(
          Math.random() * (400 - 1 + 1) + 1
        )}`
      );
      let data = await item.json();
      console.log("opp:", data);
      setOpp(data);
    } catch (err) {
      console.log("We did not find a valid pokemon");
    }
  };

  return (
    <AppContext.Provider
      value={{
        pokemon,
        setPokemon,
        getPokemon,
        opp,
        setOpp,
        getOpp,
        moves,
        setMoves,
        oppMoves,
        setOppMoves,
        getMove,
        vis,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
