import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Mail, User, MessageSquare } from 'lucide-react';
import './AdvisorModal.css';

const AdvisorModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-btn" onClick={onClose}><X /></button>
          
          <div className="modal-grid">
            <div className="modal-form-side">
              <div className="form-header">
                <div className="advisor-avatar">
                  <Phone size={24} />
                </div>
                <div>
                  <h3>Talk to Advisor</h3>
                  <p>Get personalized guidance from our experts and choose the right VLSI path for you.</p>
                </div>
              </div>

              <form className="advisor-form">
                <div className="input-group">
                  <User size={18} />
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="input-group">
                  <Mail size={18} />
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="input-group">
                  <Phone size={18} />
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="input-group">
                  <MessageSquare size={18} />
                  <select required>
                    <option value="" disabled selected>I'm interested in</option>
                    <option value="design">Design & Verification</option>
                    <option value="physical">Physical Design</option>
                    <option value="analog">Analog Design</option>
                  </select>
                </div>
                <div className="input-group">
                  <textarea placeholder="How can we help you?" rows="3"></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Request Callback <Send size={18} />
                </button>
                <p className="form-footer">We respect your privacy. Your information is safe with us.</p>
              </form>
            </div>

            <div className="modal-info-side">
              <div className="info-illustration">
                <img src="/advisor_visual.png" alt="Expert Advisor" />
              </div>
              <div className="info-benefits">
                <div className="benefit">
                  <div className="b-icon">✓</div>
                  <div>
                    <h4>Personalized Guidance</h4>
                    <p>Our experts will understand your goals and guide you to the best path.</p>
                  </div>
                </div>
                <div className="benefit">
                  <div className="b-icon">✓</div>
                  <div>
                    <h4>Clear Roadmap</h4>
                    <p>Get a step-by-step learning roadmap tailored for you.</p>
                  </div>
                </div>
                <div className="benefit">
                  <div className="b-icon">✓</div>
                  <div>
                    <h4>Career Support</h4>
                    <p>Get insights on career opportunities and industry trends.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AdvisorModal;
