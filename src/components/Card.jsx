import React, { useEffect, useState } from "react";
import '../css/Card.css';

const Card = ({ data }) => {
  const [types, setTypes] = useState([]);
  const colours = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#000000",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  const urlParts = data?.url?.split("/") || [];
  const pokeId = urlParts.length > 0 ? urlParts[urlParts.length - 2] : "";
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeId}.png`;
  const fallbackUrl = `https://via.placeholder.com/150?text=No+Image`;

  useEffect(() => {
    const fetchTypes = async () => {
      if (!pokeId) return; 
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`);
        const result = await response.json();
        setTypes(result.types);
      } catch (error) {
        console.error('Error fetching Pokémon types:', error);
      }
    };
    fetchTypes();
  }, [pokeId]);

  const displayTypes = types.map((typeObj, index) => {
    const typeName = typeObj.type.name;
    const backgroundColor = colours[typeName] || "#ccc";

    return (
      <span
        key={index}
        className="type"
        style={{
          backgroundColor,
          padding: "0.3rem",
          marginRight: "0.8rem",
          borderRadius: "5px",
          color: "white",
          fontWeight: "500",
          textTransform: "capitalize",
          marginTop: "10px",
        }}
      >
        {typeName}
      </span>
    );
  });

  return (
    <div className="card-container">
      <div className="card">
        <img
          src={imgUrl}
          alt={`${data?.name || "Pokémon"} sprite`}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = fallbackUrl; 
          }}
        />
        <div className="text">
          <h4 className="name">
            <span className="pokeId">#{pokeId}</span>
            {data?.name || "Unknown"}
          </h4>
          <div className="type-container">{displayTypes.length > 0 ? displayTypes : "No Types Available"}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;


















