import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/PropertyCard.css';

function PropertyCard({ property }) {
  const navigate = useNavigate();  

  const handleCardClick = () => {
    navigate(`/tenant-property-review`, { state: { propertyId: property.id } }); // Pass property ID as location state
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
        <button onClick={handleCardClick} style={{ borderRadius: '5px', background: '#3A5B22', color: 'white', border: 'none', cursor: 'pointer', padding: '5px 10px' }}>View</button>
      </div>
    </div>
  );
}

export default PropertyCard;
