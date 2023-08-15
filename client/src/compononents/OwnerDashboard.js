import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostProperty from './PostProperty';
import ViewProperties from './ViewProperties';
import ViewPaymentBalance from './ViewPaymentBalance';
import Settings from './Settings';
import '../styles/TenantDashboard.css';

function OwnerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('post-property');

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
          <li>
            
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
        {activeTab === 'post-property' && <PostProperty />}
        {activeTab === 'view-properties' && <ViewProperties />}
        {activeTab === 'view-payment-balance' && <ViewPaymentBalance />}
        {activeTab === 'settings' && <Settings />}
      </div>
    </div>
  );
}

export default OwnerDashboard;
