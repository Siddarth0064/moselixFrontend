import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Book, Box, TrendingUp, Layers, Users, GraduationCap, Cpu, Terminal, Code, Quote, Target, Shield, Heart, UserCheck, BookOpen, Briefcase } from 'lucide-react';
import './Home.css';

const Home = ({ onOpenModal }) => {
  return (
    <div className="home">
      {/* SVG Clip Path for rounded hero visual with 70 deg angle and bottom point */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="heroMask" clipPathUnits="objectBoundingBox">
            <path d="M 0.25 0 L 1 0 L 1 1 L 0.45 1 Q 0.40 1, 0.36 0.974 L 0.04 0.776 Q 0 0.75, 0.013 0.702 L 0.187 0.048 Q 0.20 0, 0.25 0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-text-content"
          >
            <span className="hero-top-badge">100% ONLINE COACHING</span>
            <h1 className="hero-main-title">
              Not just courses. A complete <span className="gradient-text">VLSI career path.</span>
            </h1>
            <p className="hero-subtext">
              Structured online coaching with real tools, expert mentorship and continuous career support to help you become industry-ready.
            </p>

            <div className="hero-stats-row">
              <Star className="star-icon" fill="#FFD700" color="#FFD700" size={24} />
              <span className="rating-score">4.8/5</span>
              <span className="rating-text">from 1200+ learners</span>
            </div>

            <div className="hero-action">
              <button className="btn-explore" onClick={onOpenModal}>
                Explore Programs <ArrowRight size={18} />
              </button>
            </div>

            <div className="hero-features-row">
              <div className="h-feat-item">
                <div className="h-feat-icon-box"><Code size={20} /></div>
                <div className="h-feat-text">
                  <span className="h-feat-title">Real Projects</span>
                  <span className="h-feat-desc">Hands-on learning</span>
                </div>
              </div>
              <div className="h-feat-item">
                <div className="h-feat-icon-box"><Users size={20} /></div>
                <div className="h-feat-text">
                  <span className="h-feat-title">Expert Mentors</span>
                  <span className="h-feat-desc">From top companies</span>
                </div>
              </div>
              <div className="h-feat-item">
                <div className="h-feat-icon-box"><Briefcase size={20} /></div>
                <div className="h-feat-text">
                  <span className="h-feat-title">Career Support</span>
                  <span className="h-feat-desc">Till you get placed</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-visual"
          >
            <div className="hero-image-container">
              <div className="hero-image-border"></div>
              <img src="/moselix_workspace_hero.png" alt="Workspace Setup" className="hero-workspace-img" />
            </div>
          </motion.div>
        </div>

        {/* Stylish Wave Transition */}
        <div className="section-transition-wave">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 36.7C840 27 960 13 1080 16.7C1200 20 1320 40 1380 50L1440 60V90H1380C1320 90 1200 90 1080 90C960 90 840 90 720 90C600 90 480 90 360 90C240 90 120 90 60 90H0V0Z" fill="#F8FAFF" />
          </svg>
        </div>
      </section>


      {/* Growth Section */}
      <section className="growth-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="growth-title">
              Everything you need to <span className="growth-highlight">grow and succeed</span>
            </h2>
            <div className="growth-divider"></div>
          </div>

          <div className="growth-grid">
            {/* Card 1 - Left Bounded */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="growth-card growth-purple"
            >
              <div className="growth-content">
                <h3 className="growth-card-title">Advanced<br />Learning System</h3>
                <p className="growth-card-desc">A complete online learning environment built for VLSI learners.</p>
                <ul className="growth-list purple-list">
                  <li><UserCheck className="list-icon" size={16} /> Structured learning paths</li>
                  <li><UserCheck className="list-icon" size={16} /> Live + recorded sessions</li>
                  <li><UserCheck className="list-icon" size={16} /> Assignments & practice</li>
                  <li><UserCheck className="list-icon" size={16} /> Progress tracking</li>
                </ul>
              </div>
              <img src="/moselix_learning_system.png" alt="Learning System" className="growth-img" />
            </motion.div>

            {/* Card 2 - Bottom Bounded */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="growth-card growth-beige"
            >
              <div className="growth-content">
                <h3 className="growth-card-title">Expert<br />Coaching</h3>
                <p className="growth-card-desc">Learn directly from engineers working in real VLSI projects.</p>
                <ul className="growth-list beige-list">
                  <li><UserCheck className="list-icon" size={16} /> 1:1 doubt support</li>
                  <li><UserCheck className="list-icon" size={16} /> Code reviews</li>
                  <li><UserCheck className="list-icon" size={16} /> Real-world guidance</li>
                </ul>
              </div>
              <img src="/moselix_expert_coaching.png" alt="Expert Coaching" className="growth-img" />
            </motion.div>

            {/* Card 3 - Right Bounded */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="growth-card growth-green"
            >
              <div className="growth-content">
                <h3 className="growth-card-title">Career<br />Support</h3>
                <p className="growth-card-desc">We guide you at every step until you're placed.</p>
                <ul className="growth-list green-list">
                  <li><UserCheck className="list-icon" size={16} /> Resume building</li>
                  <li><UserCheck className="list-icon" size={16} /> Interview preparation</li>
                  <li><UserCheck className="list-icon" size={16} /> Career direction</li>
                  <li><UserCheck className="list-icon" size={16} /> Lifetime placement support</li>
                </ul>
              </div>

              <div className="growth-img-container">
                <img src="/moselix_career_support.png" alt="Career Support" className="growth-img" />
                <div className="growth-testimonial-box">
                  <span className="quote-icon">“</span>
                  <p className="testimonial-text">Guidance and preparation made interviews much easier.</p>
                  <p className="testimonial-author">- Karthik S.</p>
                  <p className="testimonial-role">Physical Design Engineer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Learning to Industry Section */}
      <section className="industry-workflow">
        <div className="container i-w-grid">

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="workflow-steps-col"
          >
            <h3 className="i-w-title">From learning to industry</h3>
            <div className="workflow-flow">
              <div className="w-step">
                <div className="w-icon-box"><BookOpen size={24} /></div>
                <p>Build strong<br />fundamentals</p>
              </div>
              <ArrowRight className="w-arrow" size={16} />
              <div className="w-step">
                <div className="w-icon-box"><Code size={24} /></div>
                <p>Practice with<br />guided assignments</p>
              </div>
              <ArrowRight className="w-arrow" size={16} />
              <div className="w-step">
                <div className="w-icon-box"><Cpu size={24} /></div>
                <p>Work on real<br />world projects</p>
              </div>
              <ArrowRight className="w-arrow" size={16} />
              <div className="w-step">
                <div className="w-icon-box"><UserCheck size={24} /></div>
                <p>Prepare for interviews<br />& opportunities</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="workflow-tools-col"
          >
            <h3 className="i-w-title">Learn using<br />industry-standard tools</h3>
            <p className="i-w-desc">Work with tools used in real<br />semiconductor workflows.</p>
            <div className="tools-list">
              <div className="tool-item">
                <div className="tool-logo t-verilog"><Code size={20} /></div>
                <span>Verilog</span>
              </div>
              <div className="tool-item">
                <div className="tool-logo t-modelsim">M</div>
                <span>ModelSim</span>
              </div>
              <div className="tool-item">
                <div className="tool-logo t-vivado">
                  <div className="vivado-triangle t1"></div>
                  <div className="vivado-triangle t2"></div>
                  <div className="vivado-triangle t3"></div>
                </div>
                <span>Vivado</span>
              </div>
              <div className="tool-item">
                <div className="tool-logo t-linux">🐧</div>
                <span>Linux</span>
              </div>
              <div className="tool-item">
                <div className="tool-logo t-git">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </div>
                <span>Git</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Companies Logos */}
      <section className="companies-section">
        <div className="container">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="companies-title"
          >
            Connected with leading semiconductor companies
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="companies-strip"
          >
            <span className="c-logo c-synopsys">SYNOPSYS</span>
            <span className="c-logo c-cadence">cādence</span>
            <span className="c-logo c-siemens">SIEMENS</span>
            <span className="c-logo c-intel">intel</span>
            <span className="c-logo c-micron">Micron</span>
            <span className="c-logo c-qualcomm">Qualcomm</span>
            <span className="c-logo c-amd">AMD</span>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="t-main-title">What learners say</h2>
            <div className="t-divider"></div>
          </div>

          <div className="testimonials-grid">
            {/* T Card 1 - Left Stagger */}
            <motion.div 
              initial={{ opacity: 0, y: 50, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="t-card"
            >
              <span className="t-quote-mark">“</span>
              <p className="t-text">Moselix helped me move from confusion to clarity in VLSI. The projects and mentor support were game-changing.</p>
              <div className="t-user">
                <img src="/avatar_arjun.png" alt="Arjun R." className="t-avatar" />
                <div className="t-user-info">
                  <h4>Arjun R.</h4>
                  <span>RTL Design Engineer</span>
                </div>
              </div>
            </motion.div>

            {/* T Card 2 - Center Stagger */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="t-card"
            >
              <span className="t-quote-mark">“</span>
              <p className="t-text">Structured learning, real tools and doubt support made a big difference. Highly recommended!</p>
              <div className="t-user">
                <img src="/avatar_sneha.png" alt="Sneha P." className="t-avatar" />
                <div className="t-user-info">
                  <h4>Sneha P.</h4>
                  <span>Verification Engineer</span>
                </div>
              </div>
            </motion.div>

            {/* T Card 3 - Right Stagger */}
            <motion.div 
              initial={{ opacity: 0, y: 50, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="t-card"
            >
              <span className="t-quote-mark">“</span>
              <p className="t-text">The career guidance and interview preparation helped me crack interviews with top companies.</p>
              <div className="t-user">
                <img src="/avatar_karthik.png" alt="Karthik S." className="t-avatar" />
                <div className="t-user-info">
                  <h4>Karthik S.</h4>
                  <span>Physical Design Engineer</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="cta-card"
          >
            <div className="cta-content-wrapper">
              <div className="cta-text-group">
                <h2>Ready to start your VLSI journey?</h2>
                <p>Get expert guidance to choose the right path<br />and move forward with clarity.</p>
              </div>
              <div className="cta-action">
                <button className="btn-white" onClick={onOpenModal}>Talk to Advisor <ArrowRight size={18} /></button>
              </div>
            </div>
            <div className="cta-image-overlay">
              <div className="cta-gradient-fade"></div>
              <img src="/cta_cityscape_bg.png" alt="Future Cityscape" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
