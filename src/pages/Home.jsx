import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('watchlist')) || [];
    setShows(stored);
  }, []);

  return (
    <div>
      <h1 className="text-xl mb-4">My Watchlist</h1>
      {shows.map(show => (
        <div key={show.id} className="mb-2">
          <Link to={`/show/${show.id}`} className="text-blue-600">{show.name}</Link>
        </div>
      ))}
      {shows.length === 0 && <p>No shows added yet.</p>}
    </div>
  );
}

export default HomePage;
