import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import axios from "axios";
import Card from "../components/Cards/Card";
import TypeList from "../components/TypeList/TypeList";
import HomeHeading from "../components/HomeHeading/HomeHeading";

const Home = () => {
    const [pokedexData, setPokedexData] = useState<any[]>([]);
    
    const List = [
        "Fire",
        "Grass",
        "Water",
        "Flying",
        "Normal",
        "Poison",
        "Rock",
        "Bug",
        "Ghost",
        "Fighting",
        "Ground",
        "Psychic",
        "Ice",
        "Electric",
        "Dragon",
        "Dark",
        "Fairy",
        "Steel",
      ];

    const [filteredList, setFilteredList] = useState<string[]>(List);

    useEffect(() => {
        axios
          .get("https://pokemon-api-sef1.onrender.com/pokemon/api")
          .then((response) => {
            setPokedexData(response.data);
          })
          .catch((error) => {
            console.error("Error fetching Pokedex data:", error);
          });
      }, []);

    return (
        <div>
          <SearchBar PokemonList={pokedexData} />
          <HomeHeading />
          <TypeList
            List={List}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
          <Card Pokemon={pokedexData} filteredList={filteredList} />
        </div>
    );     
}

export default Home;