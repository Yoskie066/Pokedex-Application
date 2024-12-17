import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchedPokemon from './pages/SearchedPokemon';

const App = () => {

  return (
    <div> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pokemon" element={<SearchedPokemon />} />
      </Routes>
    </div>
  );
};

export default App;
