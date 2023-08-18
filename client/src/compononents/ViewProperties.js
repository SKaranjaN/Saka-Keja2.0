import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import OwnerViewPropertyCard from './OwnerViewPropertyCard'; 
import '../styles/ViewProperties.css';

function ViewProperties() {
  const [properties, setProperties] = useState([]);
  const token = localStorage.getItem('access_token');
  const decodedToken = jwt_decode(token);
  const loggedInOwnerId = decodedToken.sub.user_id;
  const navigate = useNavigate();
  console.log(navigate)

  useEffect(() => {
    const fetchAllPages = async () => {
      const allProperties = [];

      let currentPage = 1;
      let totalPages = 1;

      while (currentPage <= totalPages) {
        try {
          const response = await fetch(`http://127.0.0.1:5000/properties?page=${currentPage}`);
          const data = await response.json();

          if (Array.isArray(data.data)) {
            allProperties.push(...data.data);
            totalPages = data.total_pages;
          } else {
            console.error('Data received from server is not an array:', data);
          }
        } catch (error) {
          console.error('Error fetching properties:', error);
        }

        currentPage++;
      }

      const ownerProperties = allProperties.filter(property => property.owner_id === loggedInOwnerId);
      setProperties(ownerProperties);
    };

    fetchAllPages();
  }, [loggedInOwnerId]);

  return (
    <div>
      <h1>View Properties (Edit Property)</h1>
      <div className="grid-container">
        {properties.map(property => (
          <OwnerViewPropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default ViewProperties;
