import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/PropertyCard.css';

function OwnerViewPropertyCard({ property }) {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleCardClick = () => {
    navigate(`/edit-property/${property.id}`);
  };

  const handleDeleteProperty = async () => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      setIsDeleting(true);
  
      try {
        const response = await fetch(`http://127.0.0.1:5000/properties/${property.id}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          navigate('/owner-dashboard');
          window.location.reload();
        } else {
          console.error('Failed to delete property');
        }
      } catch (error) {
        console.error('Error deleting property:', error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="property-card">
      <div className="carousel-container">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
        >
          {property.image_urls.reverse().map((imageUrl, index) => (
            <div key={index} className="slide-container">
              <div className="image-holder">
                <img src={imageUrl} alt={`Property ${index + 1}`} className="slide-image" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="slide-details">
        <h3>{property.location}</h3>
        <p>Price: Ksh {property.price}</p>
        <p>Number of Rooms: {property.number_of_rooms}</p>
        <p>Category: {property.categories}</p>
        <button
          onClick={handleCardClick}
          className="edit-button"
          style={{ marginRight: '10px' }}
        >
          Edit
        </button>
        <button
          onClick={handleDeleteProperty}
          className="delete-button"
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
}

export default OwnerViewPropertyCard;
