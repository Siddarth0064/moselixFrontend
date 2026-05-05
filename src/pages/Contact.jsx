import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageSquare, ArrowRight, Users } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-decorations">
          <div className="dot-square top-right"></div>
          <div className="dot-square bottom-left"></div>
          <div className="glow-blur purple"></div>
          <div className="glow-blur blue"></div>
        </div>
        <div className="container">
          <div className="contact-hero-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="c-hero-text"
            >
              <span className="hero-top-badge">GET IN TOUCH</span>
              <h1 className="hero-main-title">
                Let's Talk About <br />
                Your <span className="gradient-text">Future.</span>
              </h1>
              <p className="hero-subtext">
                Have questions about our VLSI programs or career paths? <br />
                Our expert advisors are ready to help you navigate your journey.
              </p>
              
              <div className="hero-contact-quick">
                <div className="q-item">
                  <div className="q-icon"><MessageSquare size={18} /></div>
                  <span>Expert guidance in 24h</span>
                </div>
                <div className="q-item">
                  <div className="q-icon"><Users size={18} /></div>
                  <span>1:1 Advisor support</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="c-hero-visual"
            >
              <div className="visual-container">
                <img src="/contact_hero_v2.png" alt="Contact Support" className="floating-img" />
                <div className="visual-accent-circle"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Smooth Symmetric Dip Transition */}
        <div className="section-transition-smooth">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">
            <path d="M0 0 C400 0 450 60 720 60 C990 60 1040 0 1440 0 V100 H0 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="contact-info-panel"
            >
              <div className="info-intro">
                <h2>Contact Information</h2>
                <p>Reach out to us through any of these channels. We typically respond within 24 hours.</p>
              </div>

              <div className="info-cards-list">
                <motion.div whileHover={{ scale: 1.02 }} className="contact-info-card">
                  <div className="icon-box"><Phone size={24} /></div>
                  <div className="card-details">
                    <h4>Call Us</h4>
                    <p>+91 7338046606</p>
                    <span>Mon - Fri, 9am - 6pm</span>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="contact-info-card">
                  <div className="icon-box"><Mail size={24} /></div>
                  <div className="card-details">
                    <h4>Email Us</h4>
                    <p>contact@moselix.com</p>
                    <span>24/7 Support for Learners</span>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="contact-info-card">
                  <div className="icon-box"><MapPin size={24} /></div>
                  <div className="card-details">
                    <h4>Visit Us</h4>
                    <p>VLSI Excellence Center</p>
                    <span>Bangalore, Karnataka, India</span>
                  </div>
                </motion.div>
              </div>

              <div className="contact-decor-image">
                <img src="/contact_decor.png" alt="Support Team" />
                <div className="decor-overlay">
                  <p>"Our mission is to guide you to excellence."</p>
                  <span>— Moselix Support Team</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="contact-form-panel"
            >
              <div className="form-card">
                <div className="form-header">
                  <Send className="header-icon" size={24} />
                  <h3>Send us a Message</h3>
                </div>
                <form className="modern-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row">
                    <div className="form-input-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="Arjun Kumar" required />
                    </div>
                    <div className="form-input-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="arjun@example.com" required />
                    </div>
                  </div>
                  
                  <div className="form-input-group">
                    <label>Subject</label>
                    <select required>
                      <option value="">Choose an option</option>
                      <option value="course">Course Inquiry</option>
                      <option value="career">Career Guidance</option>
                      <option value="corporate">Corporate Training</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  
                  <div className="form-input-group">
                    <label>Your Message</label>
                    <textarea rows="4" placeholder="How can we help you achieve your VLSI goals?" required></textarea>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit" 
                    className="submit-btn"
                  >
                    Send Message <Send size={18} />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="location-box"
          >
            <div className="location-info">
              <h3>Find us in Bangalore</h3>
              <p>Our training center is located in the heart of India's Silicon Valley, easily accessible to all aspiring engineers.</p>
              <button className="btn-outline">Open in Google Maps <ArrowRight size={16} /></button>
            </div>
            <div className="location-visual-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.488358485253!2d77.625691!3d12.916575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae148d3e7587d5%3A0x6b1397b91956109e!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714652000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Moselix Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
