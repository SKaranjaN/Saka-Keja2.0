import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 10;

  const [selectedFilter, setSelectedFilter] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/properties?page=${currentPage}`);
        const data = await response.json();
        if (data && Array.isArray(data.data)) {
          setProperties(data.data);
        } else {
          console.error('Invalid data format received from API:', data);
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, [currentPage]);

  const propertyCardsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    justifyItems: 'center',
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredProperties = properties.filter((property) => {
    const categoryMatch =
      selectedFilter === 'category'
        ? property.category.toLowerCase().includes(selectedCategory.toLowerCase())
        : true;

    const priceMatch =
      selectedFilter === 'price'
        ? (priceRange.min === '' || property.price >= parseInt(priceRange.min)) &&
          (priceRange.max === '' || property.price <= parseInt(priceRange.max))
        : true;

    const locationMatch =
      selectedFilter === 'location'
        ? property.location.toLowerCase().includes(searchInput.toLowerCase())
        : true;

    return categoryMatch && priceMatch && locationMatch;
  });

  return (
    <div>
      <div style={{ width: '97.5%', display: 'flex', alignItems: 'center', paddingRight: '100px' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <input
            type="text"
            placeholder="Search Properties"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <FontAwesomeIcon
            icon={faFilter}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
      {isFilterOpen && (
        <div>
          {/* Filter options */}
          <div>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="">Select Filter</option>
              <option value="category">Category</option>
              <option value="price">Price</option>
              <option value="location">Location</option>
            </select>
            {selectedFilter === 'category' && (
              <input
                type="text"
                placeholder="Category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              />
            )}
            {selectedFilter === 'price' && (
              <div>
                <input
                  type="number"
                  placeholder="Min Price"
                  value={priceRange.min}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, min: e.target.value })
                  }
                />
                <input
                  type="number"
                  placeholder="Max Price"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, max: e.target.value })
                  }
                />
              </div>
            )}
          </div>
        </div>
      )}
      <div style={propertyCardsContainerStyle}>
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {Array.from({ length: Math.ceil(propertiesPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
