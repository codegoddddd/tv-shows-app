// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ShowDetails from './components/ShowDetails';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch data here (replace with your actual API endpoint)
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home shows={shows} />} />
        <Route path="/show/:id" element={<ShowDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
