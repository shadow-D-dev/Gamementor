import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react';
import { useAuth } from '@clerk/clerk-react';



const TournamentPage = () => {
  const { getToken } = useAuth();
  const { user } = useUser();  // Use Clerk's useUser hook to access user data
  const API_BASE = import.meta.env.VITE_API_TOURNAMENTS;
  // console.log(API_BASE);


  const [formData, setFormData] = useState({
    playerName: '',
    discordID: '',
    teamName: '',
    gameCategory: 'VALORANT',
  });
  const [status, setStatus] = useState('');
  const [registrations, setRegistrations] = useState([]);


  useEffect(() => {
    if (user?.publicMetadata?.isAdmin) { // केवल isAdmin चेक
      console.log("User is admin (isAdmin flag)");
      const fetchData = async () => {
        const token = await getToken();
        // const response = await axios.get("http://localhost:5000/api/tournaments/all", {
        const response = await axios.get(`${API_BASE}/all`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setRegistrations(response.data);
      };
      fetchData();
    }
  }, [user, getToken]);



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Registering...');

    try {
      // const response = await axios.post("http://localhost:5000/api/tournaments/register", formData, {
      const response = await axios.post(`${API_BASE}/register`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        setStatus('Registration successful! Please proceed with payment.');
        setFormData({ playerName: '', discordID: '', teamName: '', gameCategory: 'VALORANT' });
      } else {
        setStatus('Failed to register. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Tournament Registration</h2>

      <form onSubmit={handleSubmit}>
        {/* Form for Player Registration */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Player Name</label>
          <input
            type="text"
            name="playerName"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            value={formData.playerName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Discord ID</label>
          <input
            type="text"
            name="discordID"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            value={formData.discordID}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Team Name</label>
          <input
            type="text"
            name="teamName"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            value={formData.teamName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select Game Category</label>
          <select
            name="gameCategory"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            value={formData.gameCategory}
            onChange={handleChange}
            required
          >
            <option value="VALORANT">Valorant</option>
            <option value="PUBG">BGMI</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          Register
        </button>

        {status && <div className="mt-4 text-center text-sm text-gray-600">{status}</div>}
      </form>

      <SignedIn>
        {user?.publicMetadata?.isAdmin ? (
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Admin Panel - Tournament Registrations</h3>
            {registrations.length > 0 ? (
              <div className="mt-4 space-y-3">
                {registrations.map((reg, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <p><strong>Player:</strong> {reg.playerName}</p>
                    <p><strong>Discord:</strong> {reg.discordID}</p>
                    <p><strong>Team:</strong> {reg.teamName || 'N/A'}</p>
                    <p><strong>Game:</strong> {reg.gameCategory}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 mt-4">No registrations found</p>
            )}
          </div>
        ) : (
          <p className="text-red-500 mt-4">⚠️ Admin access required</p>
        )}
      </SignedIn>

      <SignedOut>
        <p className="text-sm text-gray-500">You must be signed in to view registrations.</p>
      </SignedOut>
    </div>
  );
};

export default TournamentPage;
