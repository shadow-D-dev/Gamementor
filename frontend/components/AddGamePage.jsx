import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_API = import.meta.env.VITE_API_BASE_URL_FOR_ADD || "http://localhost:5000/api/videos/add";

const AddGamePage = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("valorant");
  const [customCategory, setCustomCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For error messages
  const [successMessage, setSuccessMessage] = useState(""); // For success messages
  const [categories, setCategories] = useState([
    "valorant",
    "pubg",
    "csgo",
    "coc",
    "brawl",
  ]); // Initially predefined categories

  // Fetch categories from the backend whenever the component is loaded or user logs in
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BASE_API}/getCategories`); // API endpoint to fetch categories
        if (response.status === 200) {
          setCategories(response.data.categories); // Assuming your backend returns an array of categories
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories(); // Call the function to fetch categories on component mount
  }, []); // Empty dependency array means this will only run once when the component mounts

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalCategory = category === "other" ? customCategory.toUpperCase() : category;

    const newGameData = {
      title,
      link,
      category: finalCategory,
      customCategory: category === "other" ? customCategory : "", // Pass customCategory only when category is "other"
    };

    try {
      const response = await axios.post(`${BASE_API}/addVideo`, newGameData);

      if (response.status === 201) {
        // Use the success message from the backend
        setSuccessMessage(response.data.message);
        setErrorMessage("");  // Clear any previous error messages

        // Update the category list dynamically after successful video addition
        setCategories(response.data.categories);  // Assuming your backend sends updated list of categories

        // Reset form fields to their initial state
        setTitle("");
        setLink("");
        setCategory("valorant");
        setCustomCategory("");  // Clear the custom category field if category is 'other'

        // Optionally, reset error and success messages after a delay
        setTimeout(() => {
          setSuccessMessage("");  // Clear success message after a short time
        }, 3000);
      }
    } catch (error) {
      // Show error message if the API call fails
      setErrorMessage("Failed to add the video. Please try again.");
      setSuccessMessage("");  // Clear any previous success messages
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center mb-6">🎮 Add New Game Guide</h2>

        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}

        {successMessage && (
          <div className="text-green-500 text-center mb-4">{successMessage}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter game title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Video Link</label>
            <input
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="https://youtube.com/..."
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              className="w-full border border-gray-300 rounded px-4 py-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
              <option value="other">Other</option>
            </select>
          </div>

          {category === "other" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Custom Category</label>
              <input
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter custom category"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            🚀 Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddGamePage;
