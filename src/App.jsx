import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddShow from './pages/AddShow';
import ShowDetail from './pages/ShowDetail';

export default function App() {
  return (
    <div className="p-4 font-sans">
      <nav className="mb-4">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/add">Add Show</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddShow />} />
        <Route path="/show/:id" element={<ShowDetail />} />
      </Routes>
    </div>
  );
}
