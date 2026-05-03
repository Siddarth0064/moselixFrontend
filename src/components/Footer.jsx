import React from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import './Footer.css';

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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-icon-chip">
              <ChipIcon />
            </div>
            <div className="logo-text">
              <span className="brand">MOSELIX</span>
              <span className="tagline">VLSI LEARNING PLATFORM</span>
            </div>
          </div>
          <p>Empowering the next generation of VLSI engineers with the right skills, guidance and support.</p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        <div className="footer-nav">
          <div className="nav-col">
            <h4>Navigate</h4>
            <Link to="/">Home</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="nav-col">
            <h4>Programs</h4>
            <Link to="/careers">Design & Verification</Link>
            <Link to="/careers">Physical Design</Link>
            <Link to="/careers">Analog Design</Link>
            <Link to="/careers">All Programs</Link>
          </div>
          <div className="nav-col">
            <h4>Stay Updated</h4>
            <p>Subscribe to get the latest updates, new courses and more.</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button><Send size={18} /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; 2024 Moselix. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
