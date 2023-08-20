import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/PostProperty.css';

function EditProperty() {
  const { propertyId } = useParams();
  const navigate = useNavigate();

  const [propertyData, setPropertyData] = useState({
    number_of_rooms: '',
    categories: [],
    location: '',
    price: '',
    description: '',
    image_urls: [],
  });

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/properties/${propertyId}`)
      .then((response) => response.json())
      .then((data) => setPropertyData(data))
      .catch((error) => console.error('Error fetching property:', error));
  }, [propertyId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPropertyData((prevPropertyData) => ({ ...prevPropertyData, [name]: value }));
  };

  const handleImageChange = async (event) => {
    const files = Array.from(event.target.files);
    const newImageUrls = [...propertyData.image_urls];
  
    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append('image', file); 
  
        const response = await fetch('http://127.0.0.1:5000/upload', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const data = await response.json();
          newImageUrls.push(data.secure_url);
        } else {
          console.error('Error uploading image:', response.statusText);
        }
      }
  
      setPropertyData((prevPropertyData) => ({
        ...prevPropertyData,
        image_urls: newImageUrls,
      }));
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:5000/properties/${propertyId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyData),
      });

      if (response.ok) {
        console.log('Property updated successfully');
        navigate("/owner-dashboard");
      } else {
        console.error('Failed to update property');
      }
    } catch (error) {
      console.error('Error updating property:', error);
    }
  };

  return (
    <div className="dot" style={{minHeight: '100vh' }}>
      <div className="back-arrow" onClick={() => navigate(-1)}>
    &#8249; Back
  </div>
    <div className="post-property-container">
      <h1>Edit Property</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-pair">
          <label>Number of Rooms:</label>
          <input
            type="number"
            name="number_of_rooms"
            value={propertyData.number_of_rooms}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-pair">
        <label>Categories:</label>
        <input
            type="text"
            name="categories"
            value={
            Array.isArray(propertyData.categories)
                ? propertyData.categories.join(', ')
                : propertyData.categories || ''
            }
            onChange={(event) => {
            const newValue = event.target.value;
            setPropertyData((prevPropertyData) => ({
                ...prevPropertyData,
                categories: newValue.split(', ').map((item) => item.trim()), 
            }));
            }}
            required
        />
        </div>
        <div className="input-pair">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={propertyData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-pair">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={propertyData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-pair">
          <label>Description:</label>
          <textarea
            name="description"
            value={propertyData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-pair">
          <label>Images:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
    </div>
  );
}

export default EditProperty;
