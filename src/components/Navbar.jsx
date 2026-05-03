import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquareMore, User } from 'lucide-react';
import './Navbar.css';

const ChipIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="chip-svg">
    {/* Pins - Top */}
    <rect x="10" y="2" width="2" height="4" rx="1" fill="var(--primary)" />
    <rect x="19" y="2" width="2" height="4" rx="1" fill="var(--primary)" />
    <rect x="28" y="2" width="2" height="4" rx="1" fill="var(--primary)" />
    {/* Pins - Bottom */}
    <rect x="10" y="34" width="2" height="4" rx="1" fill="var(--primary)" />
    <rect x="19" y="34" width="2" height="4" rx="1" fill="var(--primary)" />
    <rect x="28" y="34" width="2" height="4" rx="1" fill="var(--primary)" />
    {/* Pins - Left */}
    <rect x="2" y="10" width="4" height="2" rx="1" fill="var(--primary)" />
    <rect x="2" y="19" width="4" height="2" rx="1" fill="var(--primary)" />
    <rect x="2" y="28" width="4" height="2" rx="1" fill="var(--primary)" />
    {/* Pins - Right */}
    <rect x="34" y="10" width="4" height="2" rx="1" fill="var(--primary)" />
    <rect x="34" y="19" width="4" height="2" rx="1" fill="var(--primary)" />
    <rect x="34" y="28" width="4" height="2" rx="1" fill="var(--primary)" />
    {/* Body */}
    <rect x="6" y="6" width="28" height="28" rx="4" fill="var(--primary)" />
    <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fill="white" fontSize="18" fontWeight="800" fontFamily="Inter, sans-serif">M</text>
  </svg>
);

const Navbar = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container-full">
        <Link to="/" className="logo">
          <div className="logo-icon-chip">
            <ChipIcon />
          </div>
          <div className="logo-text">
            <span className="brand">MOSELIX</span>
            <span className="tagline">VLSI LEARNING PLATFORM</span>
          </div>
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''} onClick={() => setIsOpen(false)}>Careers</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <div className="nav-actions">
          <button className="btn-advisor" onClick={onOpenModal}>
            <MessageSquareMore size={18} />
            <span>Talk to Advisor</span>
          </button>
          <button className="btn-user-login" aria-label="Login">
            <User size={18} />
            <span>Login</span>
          </button>
          <button className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
