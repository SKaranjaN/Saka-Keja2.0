import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PostProperty from './PostProperty';
import ViewProperties from './ViewProperties';
import ViewPaymentBalance from './ViewPaymentBalance';
import Settings from './Settings';
import '../styles/TenantDashboard.css';

function OwnerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('post-property');
  const [userData, setUserData] = useState(null); // State for owner's data

  useEffect(() => {
    // Fetch owner's data and store it in state
    const fetchUserData = async () => {
      const userId = localStorage.getItem('user_id');
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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="tenant-dashboard-container">
      <div className="tenant-dashboard-menu">
        <ul className="listItems">
          <li>
            <div
              onClick={() => handleTabClick('post-property')}
              className={activeTab === 'post-property' ? 'active' : ''}
            >
              Post Property
            </div>
          </li>
          <li>
            <div
              onClick={() => handleTabClick('view-properties')}
              className={activeTab === 'view-properties' ? 'active' : ''}
            >
              View My Properties
            </div>
          </li>
          <li>
            <div
              onClick={() => handleTabClick('view-payment-balance')}
              className={activeTab === 'view-payment-balance' ? 'active' : ''}
            >
              View Payment Balance
            </div>
          </li>
          <li>
            <div
              onClick={() => handleTabClick('settings')}
              className={activeTab === 'settings' ? 'active' : ''}
            >
              Settings
            </div>
          </li>
        </ul>
        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <div className="tenant-dashboard-content">
      <div className="greeting" style={{ padding: '20px' }}>
          {userData && (
            <p>
              <span role="img" aria-label="Waving Hand Emoji">
                👋
              </span>
              Hi, {userData.first_name}
            </p>
          )}
        </div>
        {activeTab === 'post-property' && <PostProperty />}
        {activeTab === 'view-properties' && <ViewProperties />}
        {activeTab === 'view-payment-balance' && <ViewPaymentBalance />}
        {activeTab === 'settings' && <Settings />}
      </div>
    </div>
  );
}

export default OwnerDashboard;
