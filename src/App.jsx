import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import PokemonInfo from './components/PokemonInfo';
 
const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  const fetchPokemon = async (name) => {
    setError(null);
    setLoading(true);
    try {
      const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
      const description = speciesResponse.data.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text || 'No description available.';
      setPokemon({ ...pokemonResponse.data, description });
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
      setError('No se ha encontrado el pokemon, asegurese de haber escrtio bien el nombre o intentelo mas tarde.');
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div className="app-container">
      <h1>Buscador Pokémon // PokeFinder </h1>
      <SearchForm onSearch={fetchPokemon} />
      {loading && <p className="loading">Cargando...</p>}
      {error && <p className="error">{error}</p>}
      <PokemonInfo pokemon={pokemon} />
    </div>
  );
};
 
export default App;