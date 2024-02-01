// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ shows }) => {
  return (
    <div>
      <h1>Show List</h1>
      <ul className='text-center'>
        {shows && shows.map((show) => (
          <li key={show.id}>
            <img
              src={show.image && show.image.medium}
              alt={show.name}
            />
            <h3>{show.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: show.summary }} />
            <Link to={`/show/${show.id}`}>
              <button className='btn btn-primary'>View Details</button>
            </Link>
            <br />
            
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
