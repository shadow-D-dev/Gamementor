import React, { useEffect } from 'react';
import { useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from React Router

const AdminPage = () => {
  const { user } = useClerk();
  const navigate = useNavigate(); // Initialize navigate hook
  

  useEffect(() => {
    // Redirect after 5 seconds if the user is not an admin
    if (!user || user.publicMetadata?.role !== 'admin') {
      setTimeout(() => {
        navigate('/'); // Redirect to Home page
      }, 5000); // Wait for 5 seconds before redirect
    } else {
      // Redirect after 5 seconds for admins
      setTimeout(() => {
        navigate('/'); // Redirect to Home page
      }, 5000); // Wait for 5 seconds before redirect
    }
  }, [user, navigate]); // Dependencies: user and navigate

  if (!user || user.publicMetadata?.role !== 'admin') {
    return (
      <div>
        <h2>Access Denied</h2>
        <p>You are not an admin. You will be redirected to the home page shortly...</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome to the Admin Dashboard</h2>
      <p>Hello, {user.firstName} {user.lastName}!</p>
      <p>This is your admin page. Only authorized users can see this.</p>
         </div>
  );
};

export default AdminPage;
