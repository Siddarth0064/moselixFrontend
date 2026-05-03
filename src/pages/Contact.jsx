import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageSquare, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-decorations">
          <div className="dot-square top-right"></div>
          <div className="dot-square bottom-left"></div>
        </div>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-top-badge">GET IN TOUCH</span>
            <h1 className="hero-main-title">
              Let's Talk About <span className="gradient-text">Your Future.</span>
            </h1>
            <p className="hero-subtext">
              Have questions about our VLSI programs or career paths? <br />
              Our expert advisors are ready to help you navigate your journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="contact-info-panel"
            >
              <div className="info-intro">
                <h2>Contact Information</h2>
                <p>Reach out to us through any of these channels. We typically respond within 24 hours.</p>
              </div>

              <div className="info-cards-list">
                <div className="contact-info-card">
                  <div className="icon-box"><Phone size={24} /></div>
                  <div className="card-details">
                    <h4>Call Us</h4>
                    <p>+91 7338046606</p>
                    <span>Mon - Fri, 9am - 6pm</span>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="icon-box"><Mail size={24} /></div>
                  <div className="card-details">
                    <h4>Email Us</h4>
                    <p>contact@moselix.com</p>
                    <span>24/7 Support for Learners</span>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="icon-box"><MapPin size={24} /></div>
                  <div className="card-details">
                    <h4>Visit Us</h4>
                    <p>VLSI Excellence Center</p>
                    <span>Bangalore, Karnataka, India</span>
                  </div>
                </div>
              </div>

              <div className="social-connect">
                <h4>Follow Our Journey</h4>
                <div className="social-icons">
                  {/* Placeholder social icons or just text */}
                  <span className="s-icon">LinkedIn</span>
                  <span className="s-icon">Instagram</span>
                  <span className="s-icon">YouTube</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="contact-form-panel"
            >
              <div className="form-card">
                <h3>Send us a Message</h3>
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
                  
                  <button type="submit" className="submit-btn">
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="container">
          <div className="location-box">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
