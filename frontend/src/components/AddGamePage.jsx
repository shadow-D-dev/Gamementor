import { useState } from "react";
import axios from "axios";
import { GamesCarouselData } from "./CarouselData";

const BASE_API = import.meta.env.VITE_API_ADD_VIDEO;

const AddGamePage = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("valorant");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newGameData = {
      title,
      link,
      category,
    };

    try {
      const response = await axios.post(BASE_API, newGameData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        setSuccessMessage(response.data.message || "Video added successfully!");
        setErrorMessage("");
        setTitle("");
        setLink("");

        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (error) {
      setErrorMessage(`Failed to add the video.Eror:${error}Please try again`);
      setSuccessMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          🎮 Add Game Video
        </h2>

        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="text-green-500 text-center mb-4">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
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
            <label className="block text-sm font-medium text-gray-700">
              Video Link
            </label>
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
            <label className="block text-sm font-medium text-gray-700">
              Select Category
            </label>
            <select
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              {GamesCarouselData.map((game, index) => (
                <option key={index} value={game.title.toLowerCase()}>
                  {game.title.charAt(0).toUpperCase() + game.title.slice(1)}
                </option>
              ))}
            </select>
          </div>

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
