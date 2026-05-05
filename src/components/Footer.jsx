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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="logo" onClick={scrollToTop} style={{ textDecoration: 'none' }}>
            <div className="logo-icon-chip">
              <ChipIcon />
            </div>
            <div className="logo-text">
              <span className="brand">MOSELIX</span>
              <span className="tagline">VLSI LEARNING PLATFORM</span>
            </div>
          </Link>
          <p>Empowering the next generation of VLSI engineers with industry-relevant skills and expert mentorship.</p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
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
            <Link to="/" onClick={scrollToTop}>Home</Link>
            <Link to="/courses" onClick={scrollToTop}>Courses</Link>
            <Link to="/about" onClick={scrollToTop}>About Us</Link>
            {/* <Link to="/contact" onClick={scrollToTop}>Contact</Link> */}
          </div>
          <div className="nav-col">
            <h4>Programs</h4>
            <Link to="/courses" onClick={scrollToTop}>Design & Verification</Link>
            <Link to="/courses" onClick={scrollToTop}>Physical Design</Link>
            <Link to="/courses" onClick={scrollToTop}>Analog Design</Link>
            <Link to="/courses" onClick={scrollToTop}>All Programs</Link>
          </div>
          <div className="nav-col">
            <h4>Stay Updated</h4>
            <p>Subscribe to get the latest updates, new courses and more.</p>
            <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit"><Send size={18} /></button>
            </form>
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
