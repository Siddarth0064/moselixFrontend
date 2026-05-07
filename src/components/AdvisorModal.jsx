import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Mail, User, MessageSquare, ChevronDown, Headset, Check } from 'lucide-react';
import './AdvisorModal.css';

const AdvisorModal = ({ isOpen, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const interests = [
    { value: "design", label: "Design & Verification" },
    { value: "physical", label: "Physical Design" },
    { value: "analog", label: "Analog Design" },
    { value: "guidance", label: "Not sure (Need Guidance)" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // REPLACE THIS URL with your actual Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJs7v83T6YcYSr3HjUPlfXFtf344LfRERrLvTIOq90uc3ScPWl0t38sCGTF_8Yedq94A/exec";

    try {
      const interestLabel = selectedInterest
        ? interests.find(i => i.value === selectedInterest)?.label
        : "Not specified";

      const payload = {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        interested: interestLabel,
        remarks: formData.message
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload)
      });

      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSelectedInterest("");

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <Headset size={32} />
                </div>
                <div>
                  <h3>Talk to Advisor</h3>
                  <p>Get personalized guidance from our experts and choose the right VLSI path for you.</p>
                </div>
              </div>

              <form className="advisor-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <User size={18} />
                  <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <Mail size={18} />
                  <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <Phone size={18} />
                  <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
                </div>
                <div className={`input-group custom-select-container ${isDropdownOpen ? 'active' : ''}`}>
                  <MessageSquare size={18} />
                  <div className="custom-select-wrapper" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <div className={`selected-value ${selectedInterest ? 'has-value' : ''}`}>
                      {selectedInterest ? interests.find(i => i.value === selectedInterest)?.label : "I'm interested in..."}
                    </div>
                    <ChevronDown size={16} className={`select-arrow ${isDropdownOpen ? 'open' : ''}`} />

                    <input type="hidden" name="interest" value={selectedInterest} required />

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          className="custom-options"
                          initial={{ opacity: 0, y: 10, scaleY: 0.95 }}
                          animate={{ opacity: 1, y: 0, scaleY: 1 }}
                          exit={{ opacity: 0, y: 10, scaleY: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          style={{ transformOrigin: "top" }}
                        >
                          {interests.map(option => (
                            <div
                              key={option.value}
                              className={`custom-option ${selectedInterest === option.value ? 'selected' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedInterest(option.value);
                                setIsDropdownOpen(false);
                              }}
                            >
                              <span>{option.label}</span>
                              {selectedInterest === option.value && <Check size={16} className="check-icon" />}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div className="input-group">
                  <textarea name="message" placeholder="How can we help you?" rows="3" value={formData.message} onChange={handleChange}></textarea>
                </div>

                <button type="submit" className={`btn-primary w-full ${isSuccess ? 'success-btn' : ''}`} disabled={isSubmitting || isSuccess}>
                  {isSubmitting ? "Sending..." : isSuccess ? "Sent Successfully!" : (
                    <>Request Callback <Send size={18} /></>
                  )}
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
