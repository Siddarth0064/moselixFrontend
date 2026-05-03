import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket, Shield, Heart, Zap, Globe, Users, Quote, BookOpen, Layers, Briefcase, Star } from 'lucide-react';
import './About.css';
import './Home.css';
import Bluebg from "../assets/Blue_hero_img.png"

const About = () => {
  return (
    <div className="about-page">
      {/* About Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text-content"
          >
            <span className="hero-top-badge">ABOUT MOSELIX</span>
            <h1 className="hero-main-title">
              Building Careers.<br />
              Powering the <span className="gradient-text">Future.</span>
            </h1>
            <p className="hero-subtext">
              At Moselix, we believe every aspiring engineer deserves <br />
              the right guidance, real-world exposure and unwavering <br />
              support to succeed in the VLSI industry.
            </p>

            <div className="hero-stats-row">
              <Star className="star-icon" fill="#FFD700" color="#FFD700" size={24} />
              <span className="rating-score">4.8/5</span>
              <span className="rating-text">from 1200+ learners</span>
            </div>

            <div className="hero-features-row">
              <div className="h-feat-item">
                <div className="h-feat-icon-box"><Target size={20} /></div>
                <div className="h-feat-text">
                  <span className="h-feat-title">Learn</span>
                  <span className="h-feat-desc">In-depth learning</span>
                </div>
              </div>
              <div className="h-feat-item">
                <div className="h-feat-icon-box"><Zap size={20} /></div>
                <div className="h-feat-text">
                  <span className="h-feat-title">Build</span>
                  <span className="h-feat-desc">Real projects</span>
                </div>
              </div>
              <div className="h-feat-item">
                <div className="h-feat-icon-box"><Rocket size={20} /></div>
                <div className="h-feat-text">
                  <span className="h-feat-title">Grow</span>
                  <span className="h-feat-desc">Career support</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-hero-visual"
          >
            <div className="about-hero-image-container">
              <img src={Bluebg} alt="About Moselix" className="about-hero-workspace-img" />
            </div>
          </motion.div>
        </div>

        {/* Dropping Section Transition - Now inside hero for perfect alignment */}
        <div className="section-transition-dropping">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">
            <path d="M0 0C240 60 480 120 720 120C960 120 1200 60 1440 0V120H0V0Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>



      {/* About Moselix Details Section */}
      <section className="about-details">
        <div className="container">

          {/* Our Story */}
          <div className="about-card home-story-section">
            <div className="home-story-grid">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="story-text"
              >
                <span className="section-label">OUR STORY</span>
                <h2>From a Small Idea <br /> to a <span className="gradient-text">Lasting Impact</span></h2>
                <p>Moselix was born out of a simple realization — VLSI education needs more than just theory; it needs mentorship, practical exposure and continuous support.</p>
                <p>We started this platform to bridge the gap between classroom learning and industry expectations. Today, Moselix is a community of learners, mentors and industry professionals working together to create future-ready engineers.</p>
                <div className="signature">— Team Moselix</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="story-image-wrapper"
              >
                <div className="story-image">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team Collaboration" />
                </div>
                <div className="quote-card">
                  <Quote className="quote-icon end" size={24} fill="currentColor" />
                  <p>We don't just teach VLSI. We mentor, guide and walk with you until you achieve your dream.</p>
                  <Quote className="quote-icon start" size={24} fill="currentColor" />

                </div>
              </motion.div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="about-card home-mission-section">
            <div className="home-mission-grid">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mission-visual"
              >
                <img src="/mission_visual.png" alt="Mission Target" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mission-text"
              >
                <span className="section-label">OUR MISSION</span>
                <h2>Empower. Educate. Elevate.</h2>
                <p>To empower aspiring engineers with industry-relevant skills, practical exposure and continuous support to help them build successful careers in VLSI.</p>

                <div className="home-mission-features">
                  <div className="home-m-feat">
                    <BookOpen className="m-feat-icon" size={24} />
                    <span>Industry-Relevant Curriculum</span>
                  </div>
                  <div className="home-m-feat">
                    <Layers className="m-feat-icon" size={24} />
                    <span>Real-World Projects</span>
                  </div>
                  <div className="home-m-feat">
                    <Users className="m-feat-icon" size={24} />
                    <span>1:1 Mentorship from Experts</span>
                  </div>
                  <div className="home-m-feat">
                    <Briefcase className="m-feat-icon" size={24} />
                    <span>Career Guidance & Support</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Our Values */}
          <div className="about-card home-values-section">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">OUR VALUES</span>
              <h2>The Principles That Drive <br /> Everything We Do.</h2>
            </motion.div>

            <div className="home-values-grid">
              {[
                { icon: <Shield size={32} />, title: "Integrity", desc: "We are honest, transparent and ethical." },
                { icon: <Heart size={32} />, title: "Passion", desc: "We are passionate about teaching and your success." },
                { icon: <Star size={32} />, title: "Excellence", desc: "We strive for excellence in everything." },
                { icon: <Users size={32} />, title: "Community", desc: "We grow together as a learning community." }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="home-value-card"
                >
                  <div className="v-icon">{value.icon}</div>
                  <div className="v-text">
                    <h3>{value.title}</h3>
                    <p>{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
