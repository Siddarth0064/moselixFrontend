import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdvisorModal from './components/AdvisorModal';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="app-container">
        <Navbar onOpenModal={openModal} />
        <main>
          <Routes>
            <Route path="/" element={<Home onOpenModal={openModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers onOpenModal={openModal} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AdvisorModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Router>
  );
}

export default App;
