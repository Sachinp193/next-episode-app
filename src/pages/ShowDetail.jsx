import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TMDB_API_KEY } from '../constants';

function ShowDetailPage() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}`)
      .then(res => res.json())
      .then(data => setDetails(data));
  }, [id]);

  if (!details) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-xl mb-2">{details.name}</h1>
      <p>{details.overview}</p>
      <p className="mt-2 text-sm text-gray-600">First Air Date: {details.first_air_date}</p>
    </div>
  );
}

export default ShowDetailPage;
