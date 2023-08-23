import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { useParams } from "react-router-dom";
import Pokedex from "../PokemonInterface";
import Moveset from "../components/Moveset/Moveset";
import Moves from "../MovesInterface";
import PokemonStats from "../components/PokemonStats/PokemonStats";
import StrengthWeakness from "../components/StrengthWeakness/StrengthWeakness";

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokedexData, setPokedexData] = useState<any[]>([]); //all pokemon
  const [pokemonData, setPokemonData] = useState<Pokedex | null>(null); //individual pokemon
  const [moveData, setMoveData] = useState<Moves[]>([]);

  useEffect(() => {
    // get all pokemon for searchbar
    axios
      .get("https://pokemon-api-sef1.onrender.com/pokemon/api")
      .then((response) => {
        setPokedexData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching all Pokedex data: ", error);
      });

    //get individual pokemon for details
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `https://pokemon-api-sef1.onrender.com/pokemon/${name}`
        );
        setPokemonData(response.data);
      } catch (error) {
        console.log("Error fetching individual Pokemon data: ", error);
      }
    };

    fetchPokemonData();

    //get moveset for movetable
    axios
      .get("https://pokemon-api-sef1.onrender.com/moves/api")
      .then((response) => {
        setMoveData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching moveset data: ", error);
      });
  }, [name]);

  if (!pokemonData) {
    return <div></div>;
  }

  return (
    <div>
      <SearchBar PokemonList={pokedexData} />
      <PokemonStats pokemon={pokemonData} />
      <StrengthWeakness
        strength={pokemonData.strength}
        weakness={pokemonData.weakness}
      />
      <Moveset movesetData={moveData} Pokemon={pokemonData} />
    </div>
  );
};

export default PokemonDetail;
