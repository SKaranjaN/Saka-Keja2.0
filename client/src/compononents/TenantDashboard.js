import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyList from './PropertyList';
import Movers from './Movers';
import Settings from './Settings';
import Payments from './Payments';
import '../styles/TenantDashboard.css';

function TenantDashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [showPropertyList, setShowPropertyList] = useState(true);
  const [showMovers, setShowMovers] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showPayments, setShowPayments] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Rent'); // Add this line

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('user_id');
      console.log('User ID:', userId);
      if (!userId) {
        console.error('User ID not found in local storage.');
        return;
      }

      try {
        const response = await fetch(`http://127.0.0.1:5000/users/${userId}`);
        const data = await response.json();
        if (data && data.first_name) {
          setUserData(data);
        } else {
          console.error('User data not in the expected format.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleRentClick = () => {
    setShowPropertyList(true);
    setShowMovers(false);
    setShowSettings(false);
    setShowPayments(false);
    setSelectedItem('Rent');
  };

  const handleMoversClick = () => {
    setShowMovers(true);
    setShowPropertyList(false);
    setShowSettings(false);
    setShowPayments(false);
    setSelectedItem('Movers'); 
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
    setShowPropertyList(false);
    setShowMovers(false);
    setShowPayments(false);
    setSelectedItem('Settings');
  };

  const handlePaymentsClick = () => {
    setShowPayments(true);
    setShowPropertyList(false);
    setShowMovers(false);
    setShowSettings(false);
    setSelectedItem('Payments');
  };

  const handleLogout = () => {
    localStorage.removeItem('user_id');
    navigate('/login');
  };

  return (
    <div className="tenant-dashboard-container">
      <div className="tenant-dashboard-menu">
        <ul className="listItems">
          <li>
            <div
              onClick={handleRentClick}
              className={selectedItem === 'Rent' ? 'active' : ''}
            >
              Rent
            </div>
          </li>
          <li>
            <div
              onClick={handleMoversClick}
              className={selectedItem === 'Movers' ? 'active' : ''}
            >
              Movers
            </div>
          </li>
          <li>
            <div
              onClick={handlePaymentsClick}
              className={selectedItem === 'Payments' ? 'active' : ''}
            >
              Payments
            </div>
          </li>
          <li>
            <div
              onClick={handleSettingsClick}
              className={selectedItem === 'Settings' ? 'active' : ''}
            >
              Settings
            </div>
          </li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="tenant-dashboard-content">
        <div style={{ padding: '20px' }}>
          {userData && <p>Hi, {userData.first_name}</p>}
        </div>

        {showPropertyList && <PropertyList />}
        {showMovers && <Movers />}
        {showSettings && <Settings />}
        {showPayments && <Payments />}
      </div>
    </div>
  );
}

export default TenantDashboard;
