import { React, useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { listPokemon } from "./API";

const Home = () => {

  const [results, setResults] = useState([])

  const allPokemon = async () => {
    try {
      const res = await listPokemon();
      const data = await res.json();
      console.log(data.results);
      setResults(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allPokemon();
  }, [])


  return (
    <div className="container">
      <div className="row">
        {results.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            // name={pokemon.name}
            url={pokemon.url}
            // Asi como se le pasan parametros (variables) al componente hijo, tambien se le pueden enviar funciones
            allPokemon={allPokemon}
          />
        ))}
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  )
}

export default Home