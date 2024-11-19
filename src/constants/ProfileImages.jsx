// src/constants/ProfileImages.jsx
import React from 'react';

function ProfileImages({ images, borderColor }) {
  return (
    <div style={{ display: 'flex', gap: '15px', paddingTop: '20px' }}>
      {images.map((image, index) => (
        <img 
          key={index} 
          src={image} 
          alt={`Profile ${index + 1}`} 
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: `2px solid ${borderColor}`,
            objectFit: 'cover'
          }} 
        />
      ))}
    </div>
  );
}

export default ProfileImages;
