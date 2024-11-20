import React from 'react';
import profile1 from '../assets/images/img1.jpg';
import profile2 from '../assets/images/img1.jpg';
import profile3 from '../assets/images/img1.jpg';
import profile4 from '../assets/images/img1.jpg';
import profile5 from '../assets/images/img1.jpg';

const ProfileImages = () => {
  const profiles = [profile1, profile2, profile3, profile4, profile5];

  return (
    <div style={styles.container}>
      {profiles.map((profile, index) => (
        <img 
          key={index} 
          src={profile} 
          alt={`Profile ${index + 1}`} 
          style={{
            ...styles.image,
            marginLeft: index !== 0 ? '-15px' : '0', // Overlap only if it's not the first image
          }} 
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '0',
  
  },
  image: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ccc',
  },
};

export default ProfileImages;
