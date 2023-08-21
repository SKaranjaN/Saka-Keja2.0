import React from 'react';

function HomeHtmlComponent() {
  const iframeStyle = {
    width: '100%',
    height: '100vh',
    border: 'none', 
    '@media (max-width: 768px)': {
      height: '500px',
    },
  };

  return (
    <iframe title="Home" src="/home.html" style={iframeStyle} />
  );
}

export default HomeHtmlComponent;
