import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Types from "../components/Types";
import LoadingScreen from "../components/LoadingScreen";
import Footer from "../components/Footer";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offSet, setOffSet] = useState(() => {
    const storedOffSet = sessionStorage.getItem("offset");
    return storedOffSet ? parseInt(storedOffSet, 10) : 0;
  });
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  function handleNextPage() {
    const newOffSet = offSet + 54;
    setOffSet(newOffSet);
    sessionStorage.setItem("offset", newOffSet.toString());
  }

  function handlePreviousPage() {
    const newOffSet = offSet <= 54 ? 0 : offSet - 54;
    setOffSet(newOffSet);
    sessionStorage.setItem("offset", newOffSet.toString());
  }

  useEffect(() => {
    async function fetchPokemon() {
      const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=54&offset=${offSet}`;
      const res = await fetch(apiUrl);
      const data = await res.json();

      console.log("Fetched Pokémon data:", data.results); 

      setPokemons(data.results);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
    fetchPokemon();
  }, [offSet]);

  useEffect(() => {
    setLoading(true);
  }, [offSet]);

  return (
    <div className="Home maxWidth">
      {loading && <LoadingScreen />}
      {!loading && (
        <>
          <Header setQuery={setQuery} />
          <Types pokemons={pokemons} inputValue={query} />
          <div className="pagination">
            <button onClick={handlePreviousPage} className="btn">Previous</button>
            <button onClick={handleNextPage} className="btn">Next</button>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;





