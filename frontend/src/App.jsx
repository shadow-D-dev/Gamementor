import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/Aboutus';
import Contact from '../components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:gameName" element={<Home />} /> {/* ✅ new route */}
        </Routes>
      </div>
    </>
  );
}

export default App;
