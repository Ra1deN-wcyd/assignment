import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <Link to="/">← Back to Post</Link>
      <h2>Author Profile</h2>
      <div style={{ marginTop: 20 }}>
        <div style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          backgroundColor: 'blue',
          marginBottom: 10
        }}></div>
        <h3>Author Name</h3>
        <p>yeahooo the routing is working correctly.</p>
      </div>
    </div>
  );
}

export default Profile;
