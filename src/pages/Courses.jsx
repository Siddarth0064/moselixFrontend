import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Download, ArrowRight, PlayCircle, BookOpen, Monitor, Terminal, Lightbulb, ShieldCheck, Cpu, Activity, Users, Code, Briefcase, MessageCircle } from 'lucide-react';
import './Courses.css';

const Courses = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState('design');

  const tabs = [
    { id: 'design', label: 'Design & Verification', icon: <Monitor size={18} /> },
    { id: 'physical', label: 'Physical Design', icon: <BookOpen size={18} /> },
    { id: 'analog', label: 'Analog Design', icon: <Terminal size={18} /> },
  ];

  const content = {
    design: {
      title: "Design & Verification",
      desc: "Build robust digital systems and ensure design correctness using industry-standard verification methodologies.",
      work: ["SystemVerilog & UVM based verification", "Testbench development & simulation", "Functional coverage & assertions", "Debugging & root cause analysis"],
      experience: ["Live interactive classes", "Recorded video lectures", "Hands-on labs & projects", "LMS access", "Mentor support"]
    },
    physical: {
      title: "Physical Design",
      desc: "Transform logical designs into physical layouts, handling timing, power, and area constraints.",
      work: ["Floorplanning & Placement", "Clock Tree Synthesis (CTS)", "Routing & Physical Verification", "Static Timing Analysis (STA)"],
      experience: ["Advanced synthesis labs", "Industry tool access", "Project-based learning", "1:1 Review sessions"]
    },
    analog: {
      title: "Analog Design",
      desc: "Design and analyze mixed-signal and analog circuits that power real-world applications.",
      work: ["CMOS Analog Circuit Design", "Op-Amps & Comparators", "Filters & Oscillators", "Data Converters (ADC/DAC)"],
      experience: ["Circuit simulation labs", "Layout design practice", "Expert mentorship", "Case studies"]
    }
  };

  const comparisonData = [
    {
      id: 'design',
      title: 'Design & Verification',
      desc: 'If you enjoy building logic and ensuring systems work correctly.',
      likes: ['coding and structured thinking', 'analyzing behavior', 'making systems reliable'],
      badge: 'Best for those who like building + validating systems',
      color: 'purple',
      icon: <ShieldCheck size={24} />
    },
    {
      id: 'physical',
      title: 'Physical Design',
      desc: "If you're curious how designs become real chips.",
      likes: ['layouts and structures', 'optimization', 'working with constraints'],
      badge: 'Best for those who enjoy turning ideas into reality',
      color: 'blue',
      icon: <Cpu size={24} />
    },
    {
      id: 'analog',
      title: 'Analog Design',
      desc: "If you're interested in circuits and real-world electronics.",
      likes: ['signals and behavior', 'understanding electronics deeply', 'working closer to hardware'],
      badge: 'Best for those who enjoy core electronics and circuits',
      color: 'green',
      icon: <Activity size={24} />
    }
  ];

  return (
    <div className="courses-page">
      {/* Courses Hero */}
      <section className="courses-hero">
        {/* Decorations */}
        <div className="hero-decorations">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
            className="dot-square top-right"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="dot-square bottom-left"
          ></motion.div>

          {/* Analog Chip Design SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}
            className="analog-chip-bg"
          >
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="50" width="100" height="100" rx="10" stroke="rgba(108, 58, 237, 0.4)" strokeWidth="4" fill="rgba(108, 58, 237, 0.1)" />
              <rect x="65" y="65" width="70" height="70" rx="5" stroke="rgba(108, 58, 237, 0.5)" strokeWidth="2" />
              {/* Pins */}
              <path d="M40 70h10m-10 20h10m-10 20h10m-10 20h10" stroke="rgba(108, 58, 237, 0.5)" strokeWidth="4" strokeLinecap="round" />
              <path d="M150 70h10m-10 20h10m-10 20h10m-10 20h10" stroke="rgba(108, 58, 237, 0.5)" strokeWidth="4" strokeLinecap="round" />
              <path d="M70 40v10m20-10v10m20-10v10m20-10v10" stroke="rgba(108, 58, 237, 0.5)" strokeWidth="4" strokeLinecap="round" />
              <path d="M70 150v10m20-10v10m20-10v10m20-10v10" stroke="rgba(108, 58, 237, 0.5)" strokeWidth="4" strokeLinecap="round" />

              {/* Central Processor Lines */}
              <circle cx="100" cy="100" r="15" fill="rgba(108, 58, 237, 0.2)" stroke="rgba(108, 58, 237, 0.6)" strokeWidth="2" />
              <path d="M85 85 L115 115 M115 85 L85 115" stroke="rgba(108, 58, 237, 0.4)" strokeWidth="2" />
            </svg>
          </motion.div>
        </div>

        <div className="container courses-hero-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="courses-hero-text"
          >
            <h1 className="courses-hero-title">
              Choose Your Path. <br />
              Build <span className="brand-purple-text">Your Future.</span>
            </h1>
            <p>Industry-aligned programs with real-world projects, expert mentors and career support.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="courses-hero-visual"
          >
            <img src="/courses_hero_Sec_Pic.jpeg" alt="Mentorship and Practical Training" />
          </motion.div>
        </div>

        {/* Smooth Wave Transition - Using white fill to naturally mask the image */}
        <div className="section-transition">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
            {/* The Fill Layer (No Stroke) - Sits on top of the image to 'cut' it */}
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill-only"></path>
            {/* The Wave Line Layer (Stroke only) */}
            <path d="M0,27.35 A600.21,600.21,0,0,0,321.39,56.44 c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3" className="shape-stroke-only" fill="none"></path>
          </svg>
        </div>
      </section>

      {/* Course Tabs Section */}
      <section className="path-selector">
        <div className="container">
          <div className="tabs-container">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-content-wrapper">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="tab-content-grid"
            >
              <div className="main-content">
                <h2>{content[activeTab].title}</h2>
                <p className="tab-desc">{content[activeTab].desc}</p>

                <div className="content-details-grid">
                  <div className="work-section">
                    <h4>What you'll work on</h4>
                    <ul className="check-list">
                      {content[activeTab].work.map((item, i) => (
                        <li key={i}><CheckCircle size={18} /> {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="learning-experience">
                    <h4>Learning Experience</h4>
                    <ul className="exp-list">
                      {content[activeTab].experience.map((item, i) => (
                        <li key={i}>
                          {item.toLowerCase().includes('interactive') || item.toLowerCase().includes('classes') ? <Users size={18} /> :
                            item.toLowerCase().includes('recorded') || item.toLowerCase().includes('video') ? <PlayCircle size={18} /> :
                              item.toLowerCase().includes('labs') || item.toLowerCase().includes('practice') ? <Terminal size={18} /> :
                                item.toLowerCase().includes('lms') || item.toLowerCase().includes('access') ? <ShieldCheck size={18} /> :
                                  item.toLowerCase().includes('mentor') || item.toLowerCase().includes('review') ? <MessageCircle size={18} /> :
                                    item.toLowerCase().includes('project') ? <Briefcase size={18} /> :
                                      item.toLowerCase().includes('tool') ? <Cpu size={18} /> :
                                        item.toLowerCase().includes('case') ? <Lightbulb size={18} /> :
                                          <BookOpen size={18} />}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="action-btns">
                  <button className="btn-primary">Enroll Now <ArrowRight size={18} /></button>
                  <button className="btn-outline"><Download size={18} /> Download Brochure</button>
                </div>
              </div>

              <div className="side-content">
                <div className="code-snippet">
                  <div className="code-header">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                  </div>
                  <code>
                    module top ( <br />
                    &nbsp;&nbsp;input clk, <br />
                    &nbsp;&nbsp;input rst_n, <br />
                    &nbsp;&nbsp;... <br />
                    );
                  </code>
                </div>

                <div className="waveform-container">
                  <img src="/digital_waveform.png" alt="VLSI Timing Waveform" className="waveform-img" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header text-center"
          >
            <h2 className="comparison-title">
              <span className="dots">::::</span> Which VLSI <span className="underline">Path</span> Fits You Best? <span className="dots">::::</span>
            </h2>
          </motion.div>
          <div className="comp-grid">
            {comparisonData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`comp-card theme-${item.color}`}
              >
                <div className="comp-card-top">
                  <div className="comp-icon">{item.icon}</div>
                  <div className="comp-header-text">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>

                <div className="comp-likes">
                  <p className="likes-title">You like:</p>
                  <ul>
                    {item.likes.map((like, i) => (
                      <li key={i}>• {like}</li>
                    ))}
                  </ul>
                </div>

                <div className="comp-badge">{item.badge}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header text-center"
          >
            <h2 className="features-title">
              Learn. <span className="underline">Practice.</span> Succeed.
            </h2>
          </motion.div>

          <div className="features-grid">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="feature-card"
              style={{ backgroundImage: `url('/feature_learn_experts.png')` }}
            >
              <div className="feature-overlay"></div>
              <div className="feature-content">
                <div className="feature-icon"><Users /></div>
                <h3>Learn from Experts</h3>
                <p>Live sessions with industry mentors who guide you at every step.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="feature-card"
              style={{ backgroundImage: `url('/feature_hands_on.png')` }}
            >
              <div className="feature-overlay"></div>
              <div className="feature-content">
                <div className="feature-icon"><Code /></div>
                <h3>Hands-on Projects</h3>
                <p>Work on real-world VLSI projects and build practical skills.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="feature-card"
              style={{ backgroundImage: `url('/feature_career_ready.png')` }}
            >
              <div className="feature-overlay"></div>
              <div className="feature-content">
                <div className="feature-icon"><Briefcase /></div>
                <h3>Career Ready</h3>
                <p>Get placement support, interview prep and career guidance.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bottom-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="cta-banner"
          >
            {/* Decorative Dots */}
            <div className="cta-dots left"></div>
            <div className="cta-dots right"></div>
            <div className="cta-left">
              <div className="cta-icon-box">
                <Lightbulb size={28} />
              </div>
              <div className="cta-text-box">
                <h3>Still unsure which path is right?</h3>
                <p>Talk to our experts and get personalized guidance to choose the perfect path for you.</p>
              </div>
            </div>
            <div className="cta-right">
              <button className="btn-primary" onClick={onOpenModal}>
                <MessageCircle size={18} /> Talk to Advisor
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
