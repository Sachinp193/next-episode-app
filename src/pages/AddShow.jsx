import React, { useState } from 'react';
import { TMDB_API_KEY } from '../constants';

function AddShowPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchShows = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${TMDB_API_KEY}&query=${query}`);
    const data = await res.json();
    setResults(data.results);
  };

  const addToWatchlist = (show) => {
    const stored = JSON.parse(localStorage.getItem('watchlist')) || [];
    const updated = [...stored, { id: show.id, name: show.name }];
    localStorage.setItem('watchlist', JSON.stringify(updated));
    alert(`${show.name} added to watchlist.`);
  };

  return (
    <div>
      <h1 className="text-xl mb-4">Add a TV Show</h1>
      <input 
        type="text" 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        className="border p-1 mr-2"
      />
      <button onClick={searchShows} className="bg-blue-500 text-white px-2 py-1">Search</button>

      <div className="mt-4">
        {results.map(show => (
          <div key={show.id} className="mb-2">
            <strong>{show.name}</strong>
            <button 
              onClick={() => addToWatchlist(show)} 
              className="ml-2 text-sm text-green-600">+ Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddShowPage;
