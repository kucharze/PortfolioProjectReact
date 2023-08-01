import { createContext, useState } from "react";

export const AppContext = createContext();

let AppContextProvider = (props) => {
  const [pokemon, setPokemon] = useState(null);
  const [opp, setOpp] = useState(null);
  const [moves, setMoves] = useState(null);

  const getMove = async () => {
    // let item = await fetch(`https://pokeapi.co/api/v2/move/851/`);
    let moveList = [];
    let i = 0;
    for (let i = 0; i < 4; i++) {
      // console.log(
      //   "Move url to pull"
      //   // pokemon.moves[Math.floor(Math.random() * ( - 1 + 1) + 1)].move.url
      // );
      let pos = Math.floor(Math.random() * (pokemon.moves.length - 1) + 1);
      let item = await fetch(
        `${
          pokemon.moves[
            Math.floor(Math.random() * (pokemon.moves.length - 1) + 1)
          ].move.url
        }`
      );
      let data = await item.json();
      console.log("move", data);
      moveList.push(data);
    }
    await setMoves(moveList);
  };

  const getPokemon = async () => {
    try {
      let item = await fetch("https://pokeapi.co/api/v2/pokemon/zamazenta");
      let data = await item.json();
      console.log(data);
      setPokemon(data);
    } catch (err) {
      console.log("We did not find a valid pokemon");
    }
  };
  const getOpp = async () => {
    try {
      let item = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(
          Math.random() * (100 - 1 + 1) + 1
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
        getMove,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
