import React from 'react';
 
const PokemonInfo = ({ pokemon }) => {
  if (!pokemon) return null;
 
  return (
  <div className="pokemon-info">
    <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h4><strong>Descripcion del pokemon:</strong>  </h4>
        <p>{pokemon.description}</p>
        <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
        <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
        <h3><strong>Tipo / tipos:</strong></h3>
        <ul>
          {pokemon.types.map((typeInfo) => (
            <li key={typeInfo.type.name}>{typeInfo.type.name}</li>
          ))}
        </ul>
    </div>
  );
};
 
export default PokemonInfo;