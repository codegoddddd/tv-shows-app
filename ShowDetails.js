import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isFormOpen, setFormOpen] = useState(false);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => setShow(response.data))
      .catch(error => console.error('Error fetching show details:', error));
  }, [id]);

  const handleBookTicket = () => {
    if (show) {
      // Open the form
      setFormOpen(true);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Implement logic to handle form submission
    console.log('Booking ticket for:', show.name);
    console.log('User details:', formData);

    // Close the form
    setFormOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='text-center'>
      {show && (
        <div>
          <div className="row">
            <div className="col-md-4">
              <h1>{show.name}</h1>
              <img style={{ height: "200px" }} src={show.image.original} alt={show.name} />
            </div>
            <div className="col-md-8">
              <p dangerouslySetInnerHTML={{ __html: show.summary }} />

              {/* Additional show details */}
              <p>Genres: {show.genres.join(', ')}</p>
              <p>Runtime: {show.runtime} minutes</p>
              <p>Premiered: {show.premiered}</p>

              <button className='btn btn-success' onClick={handleBookTicket}>Book Ticket</button>
            </div>
          </div>
        </div>
      )}

      {isFormOpen && (
        <form onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input className='form-control'
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input className='form-control'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button className='btn btn-success' type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ShowDetails;
