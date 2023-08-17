import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function PostProperty() {
  const navigate = useNavigate();
  console.log(navigate)
  const [formData, setFormData] = useState({
    number_of_rooms: '',
    categories: [],
    location: '',
    price: '',
    description: '',
    image_urls: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setFormData((prevFormData) => ({
      ...prevFormData,
      image_urls: [...prevFormData.image_urls, ...files],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const token = localStorage.getItem('access_token');
    const decodedToken = jwt_decode(token);
    const owner_id = decodedToken.sub.user_id;
  
    const propertyData = {
      owner_id: owner_id,
      number_of_rooms: parseInt(formData.number_of_rooms),
      categories: formData.categories,
      location: formData.location,
      price: parseFloat(formData.price),
      description: formData.description,
    };
  
    const formDataToSend = JSON.stringify(propertyData);
  
    try {
      const response = await fetch('http://127.0.0.1:5000/properties', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: formDataToSend,
      });
  
      if (response.ok) {
        console.log('Property posted successfully');
        setFormData({
          number_of_rooms: '',
          categories: [],
          location: '',
          price: '',
          description: '',
          image_urls: [],
        });
      } else {
        console.error('Failed to post property');
      }
    } catch (error) {
      console.error('Error posting property:', error);
    }
  };


  return (
    <div className="post-property-container">
      <h2>Post a New Property</h2>
      <form onSubmit={handleSubmit}>
        <label>Number of Rooms:</label>
        <input
          type="number"
          name="number_of_rooms"
          value={formData.number_of_rooms}
          onChange={handleChange}
          required
        />
  
        <label>Categories:</label>
        <input
          type="text"
          name="categories"
          value={formData.categories}
          onChange={handleChange}
          required
        />
  
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
  
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
  
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
  
        <label>Images:</label>
        <input
          type="file"
          name="image_urls"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
  
        <button type="submit">Post Property</button>
      </form>
    </div>
  );  
}

export default PostProperty;
