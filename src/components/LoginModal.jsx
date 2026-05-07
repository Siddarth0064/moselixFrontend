import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, LogIn, AlertCircle } from 'lucide-react';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    
    // Simulate network request for authentication
    setTimeout(() => {
      setIsSubmitting(false);
      // Always show error as requested by the user
      setError(true);
    }, 800);
  };

  const handleClose = () => {
    setError(false);
    setEmail("");
    setPassword("");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="login-overlay" onClick={handleClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="login-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="login-close-btn" onClick={handleClose} aria-label="Close">
            <X size={18} />
          </button>

          <div className="login-header-bg">
            <div className="login-icon-wrapper">
              <LogIn size={28} />
            </div>
            <h3>Welcome Back</h3>
            <p>Enter your credentials to access your account</p>
          </div>

          <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
              
              <AnimatePresence>
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginBottom: 10 }}
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                    className="login-error-message"
                  >
                    <AlertCircle size={18} />
                    <span>Incorrect email or password.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="login-input-group">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(false); }}
                />
                <Mail size={18} className="input-icon" />
              </div>

              <div className="login-input-group">
                <input 
                  type="password" 
                  placeholder="Password" 
                  required 
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(false); }}
                />
                <Lock size={18} className="input-icon" />
              </div>

              <div className="forgot-password">
                <a href="#forgot" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
              </div>

              <button type="submit" className="login-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Authenticating..." : (
                  <>Sign In <LogIn size={18} /></>
                )}
              </button>
            </form>

            <div className="login-footer">
              Don't have an account? <a href="#register" onClick={(e) => e.preventDefault()}>Sign up</a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LoginModal;
