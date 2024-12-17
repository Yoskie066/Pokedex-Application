import React, { useEffect, useState } from "react";
import '../css/Feed.css';
import Card from "./Card";
import { Link } from "react-router-dom";

const Feed = ({ pokemons, query, selectedType }) => {
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    const filtered = pokemons.filter((pokemon) => {
      const nameMatches = pokemon.name.toUpperCase().startsWith(query.toUpperCase());

      const hasSelectedType = pokemon.types && Array.isArray(pokemon.types) && pokemon.types.some(
        (typeObj) => typeObj.type.name.toLowerCase() === selectedType
      );

      if (selectedType === "all") return nameMatches;

      return nameMatches && hasSelectedType;
    });

    setFilteredPokemons(filtered);
  }, [pokemons, query, selectedType]);

  return (
    <div>
      <section className="pokemon-feed">
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <Link to={`/${pokemon.name}`} key={pokemon.name}>
              <Card data={pokemon} />
            </Link>
          ))
        ) : (
          <p>No Pokémon found</p>
        )}
      </section>
    </div>
  );
};

export default Feed;


















