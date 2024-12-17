import React, { useEffect, useState } from "react";
import Feed from './Feed';

const Types = ({ pokemons, inputValue }) => {
  const [selectedType, setSelectedType] = useState('all');
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const types = [
    'All', 'Normal', 'Fire', 'Water', 'Electric',
    'Grass', 'Ice', 'Fighting', 'Poison', 'Ground',
    'Flying', 'Bug', 'Rock', 'Ghost', 'Dark',
    'Steel', 'Fairy', 'Dragon', 'Psychic',
  ];

  const onChangeTypeHandler = (e) => {
    const typeSelected = e.target.value.toLowerCase();
    setSelectedType(typeSelected);
  };

  useEffect(() => {
    let filteredList = pokemons;

    if (selectedType !== 'all') {
      filteredList = filteredList.filter(pokemon => {
        return pokemon.types && pokemon.types.some(typeObj => {
          return typeObj.type.name.toLowerCase() === selectedType;
        });
      });
    }

    if (inputValue) {
      filteredList = filteredList.filter(pokemon => 
        pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    }

    setFilteredPokemons(filteredList);
  }, [selectedType, pokemons, inputValue]);

  return (
    <div className="types-container">
      <select defaultValue="All" onChange={onChangeTypeHandler}>
        {types.map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>

      <Feed pokemons={filteredPokemons} query={inputValue} selectedType={selectedType} />
    </div>
  );
};

export default Types;









































