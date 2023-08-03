import { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

let AppContextProvider = (props) => {
  const [pokemon, setPokemon] = useState(null);
  const [opp, setOpp] = useState(null);
  const [health, setHealth] = useState(0);
  const [moves, setMoves] = useState(null);
  const [oppMoves, setOppMoves] = useState(null);
  const [vis, setVis] = useState(true);
  const [oppHealth, setOppHealth] = useState(0);
  const [win, setWin] = useState(false);
  const [winner, setWinner] = useState(null);
  const [annoucement, setAnnouncement] = useState("");

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
    setVis(false);
    await setMoves(moveList);
    getOppMoves();
  };

  const getOppMoves = async () => {
    // let item = await fetch(`https://pokeapi.co/api/v2/move/851/`);
    let oppList = [];
    let i = 0;
    while (i < 4) {
      console.log("Trying to poll an opponent move");
      let pos = Math.floor(Math.random() * (opp.moves.length - 1) + 1);
      console.log(opp.moves[pos].move.url);
      let item = await axios.get(`${opp.moves[pos].move.url}`);

      let data = await item.data;
      if (data.power === null) {
        continue;
      }
      console.log("Opp move", data);
      oppList.push(data);
      i++;
    }
    await setOppMoves(oppList);
  };

  const getPokemon = async () => {
    let data;
    try {
      while (true) {
        let item = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${Math.floor(
            Math.random() * (400 - 1 + 1) + 1
          )}`
        );
        data = await item.json();
        console.log("Player", data);
        if (
          //pokemon that can cause issues
          data.name != "ditto" ||
          data.name != "magikarp" ||
          data.name != "caterpie" ||
          data.name != "weedle"
        ) {
          break;
        }
      }
      setHealth(data.stats[0].base_stat);
      setPokemon(data);
    } catch (err) {
      console.log("We did not find a valid pokemon");
    }
    //getMove();
  };

  const getOpp = async () => {
    try {
      let data;
      while (true) {
        let item = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${Math.floor(
            Math.random() * (400 - 1 + 1) + 1
          )}`
        );
        data = await item.json();
        console.log("opp:", data);
        if (
          //pokemon that can cause issues
          data.name != "ditto" ||
          data.name != "magikarp" ||
          data.name != "caterpie" ||
          data.name != "weedle"
        ) {
          break;
        }
      }
      console.log("Hello");
      setOppHealth(data.stats[0].base_stat);
      setOpp(data);
    } catch (err) {
      console.log("We did not find a valid pokemon");
    }
  };

  const calcPower = (attack, defense) => {
    console.log(attack, defense);
    let damage = attack - defense;

    // if (damage < 5) {
    //   damage = 5;
    // }
    return damage;
  };

  const doMove = (move) => {
    console.log(moves[move].name);
    let value;
    if (moves[move].damage_class.name == "physical") {
      console.log("Physical");
      value = calcPower(pokemon.stats[1].base_stat, opp.stats[2].base_stat);
    } else {
      console.log("Special");
      value = calcPower(pokemon.stats[3].base_stat, opp.stats[4].base_stat);
    }
    setOppHealth(oppHealth - (moves[move].power + value));

    if (oppHealth - moves[move].power <= 0) {
      console.log("You win");
      setWin(true);
      setWinner("player");
    } else {
      let num = Math.floor(Math.random() * (4 - 0) + 0);
      if (oppMoves[num].damage_class.name == "physical") {
        console.log("Physical");
        value = calcPower(opp.stats[2].base_stat, pokemon.stats[3].base_stat);
      } else {
        console.log("Special");
        value = calcPower(opp.stats[3].base_stat, pokemon.stats[4].base_stat);
      }
      let newHealth = health - (oppMoves[num].power + value);
      setHealth(newHealth);
      if (newHealth <= 0) {
        setWin(true);
        setWinner("com");
      }
    }
  };

  const newGame = () => {
    console.log("new game");
    setVis(true);
    getPokemon();
    getOpp();
    setWin(false);
    setMoves(null);
    setOppMoves(null);
    setAnnouncement("");
  };

  return (
    <AppContext.Provider
      value={{
        pokemon,
        setPokemon,
        getPokemon,
        health,
        opp,
        oppHealth,
        setOpp,
        getOpp,
        moves,
        setMoves,
        oppMoves,
        setOppMoves,
        getMove,
        vis,
        doMove,
        win,
        winner,
        newGame,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
