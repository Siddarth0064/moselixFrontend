import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Cpu, Code, UserCheck, BookOpen, Briefcase, Check } from 'lucide-react';
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
              Not just courses. A complete <span className="gradient-text">VLSI </span> <br /> <span className="gradient-text">career path.</span>
            </h1>
            <p className="hero-subtext">
              Structured online coaching with real tools, expert <br /> mentorship and continuous career support to <br /> help you become industry-ready.
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
                <div className="h-feat-icon-box"><Code size={24} /></div>
                <div className="h-feat-text">
                  <span className="h-feat-title">Real Projects</span>
                  <span className="h-feat-desc">Hands-on learning</span>
                </div>
              </div>
              <div className="h-feat-item">
                <div className="h-feat-icon-box"><Users size={24} /></div>
                <div className="h-feat-text">
                  <span className="h-feat-title">Expert Mentors</span>
                  <span className="h-feat-desc">From top companies</span>
                </div>
              </div>
              <div className="h-feat-item">
                <div className="h-feat-icon-box"><Briefcase size={24} color="rgb(255, 215, 0)" /></div>
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
        {/* <div className="section-transition-wave">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 36.7C840 27 960 13 1080 16.7C1200 20 1320 40 1380 50L1440 60V90H1380C1320 90 1200 90 1080 90C960 90 840 90 720 90C600 90 480 90 360 90C240 90 120 90 60 90H0V0Z" fill="#F8FAFF" />
          </svg>
        </div> */}
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
                  <li><Check className="list-icon" size={16} /> Structured learning paths</li>
                  <li><Check className="list-icon" size={16} /> Live + recorded sessions</li>
                  <li><Check className="list-icon" size={16} /> Assignments & practice</li>
                  <li><Check className="list-icon" size={16} /> Progress tracking</li>
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
                  <li><Check className="list-icon" size={16} /> 1:1 doubt support</li>
                  <li><Check className="list-icon" size={16} /> Code reviews</li>
                  <li><Check className="list-icon" size={16} /> Real-world guidance</li>
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
                  <li><Check className="list-icon" size={16} /> Resume building</li>
                  <li><Check className="list-icon" size={16} /> Interview preparation</li>
                  <li><Check className="list-icon" size={16} /> Career direction</li>
                  <li><Check className="list-icon" size={16} /> Lifetime placement support</li>
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
                <div className="w-icon-box"><BookOpen size={32} /></div>
                <p>Build strong<br />fundamentals</p>
              </div>
              <ArrowRight className="w-arrow" size={20} />
              <div className="w-step">
                <div className="w-icon-box"><Code size={32} /></div>
                <p>Practice with<br />guided assignments</p>
              </div>
              <ArrowRight className="w-arrow" size={20} />
              <div className="w-step">
                <div className="w-icon-box"><Cpu size={32} /></div>
                <p>Work on real<br />world projects</p>
              </div>
              <ArrowRight className="w-arrow" size={20} />
              <div className="w-step">
                <div className="w-icon-box"><UserCheck size={32} /></div>
                <p>Prepare for interviews<br />& opportunities</p>
              </div>
            </div>
          </motion.div>

          <div className="workflow-v-divider"></div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="workflow-tools-col"
          >
            <h3 className="i-w-title">Learn using industry-standard tools</h3>
            <p className="i-w-desc">Work with tools used in real<br />semiconductor workflows.</p>
            <div className="tools-list">
              <div className="tool-item">
                <div className="tool-logo t-verilog"><Code size={24} /></div>
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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
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
            <div className="c-logo c-synopsys">
              <svg viewBox="10 75 180 45" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.864 80.779c0-1.25-.625-2.187-3.391-2.187s-3.391.937-3.391 2.186v3.391c0 1.026.357 2.053 1.338 2.9l9.368 8.031c1.338 1.115 2.141 2.498 2.141 3.925v5.086c0 3.035-3.569 4.73-9.458 4.73-6.515 0-9.637-1.473-9.637-4.73v-4.416h5.89v4.238c0 1.516 1.16 2.408 3.748 2.408 2.409 0 3.569-.893 3.569-2.408v-4.506c0-1.115-.446-1.965-1.695-3.079l-8.655-7.54c-1.606-1.383-2.498-2.454-2.498-4.105v-3.881c0-3.168 3.301-4.729 9.28-4.729 6.604 0 9.28 1.562 9.28 4.506v4.105l-5.889-.001v-3.924zM72.658 81.465c0-3.168 2.409-5.443 10.351-5.442 7.941 0 10.35 2.275 10.35 5.443l-.001 21.86c0 3.168-2.409 5.443-10.351 5.443-7.941 0-10.351-2.275-10.351-5.443l.002-21.861zm5.887 21.773c0 1.783.713 3.033 4.461 3.033s4.462-1.25 4.462-3.033l.001-21.683c0-1.785-.714-3.034-4.461-3.034-3.748 0-4.462 1.249-4.462 3.034l-.001 21.683zM96.615 76.291h9.369c7.584 0 9.814 1.249 9.814 4.908v7.896c0 3.658-2.23 4.908-9.816 4.908h-3.48v14.499h-5.889l.002-32.211zm8.744 15.213c2.676 0 4.551-.357 4.551-2.008v-8.7c0-1.65-1.873-2.008-4.551-2.008h-2.855v12.716h2.855zM130.508 80.708c0-1.25-.625-2.187-3.391-2.187s-3.391.938-3.391 2.187v3.39c0 1.026.355 2.052 1.338 2.9l9.367 8.031c1.34 1.115 2.143 2.498 2.143 3.926v5.086c0 3.033-3.57 4.73-9.459 4.73-6.514-.002-9.637-1.475-9.637-4.73v-4.416h5.889v4.236c0 1.518 1.16 2.41 3.748 2.41 2.408 0 3.568-.893 3.568-2.408v-4.506c0-1.115-.445-1.963-1.693-3.078l-8.654-7.541c-1.607-1.383-2.5-2.454-2.498-4.104v-3.882c0-3.168 3.301-4.729 9.279-4.729 6.604 0 9.279 1.561 9.279 4.506v4.104h-5.889v-3.925h.001zM173.967 80.709c0-1.25-.625-2.186-3.391-2.186s-3.391.937-3.391 2.186v3.39c0 1.026.355 2.053 1.338 2.9l9.369 8.031c1.338 1.115 2.141 2.497 2.141 3.925v5.086c0 3.035-3.568 4.73-9.459 4.73-6.514 0-9.637-1.473-9.637-4.73v-4.416h5.891v4.238c0 1.518 1.16 2.41 3.746 2.41 2.41 0 3.57-.893 3.57-2.41v-4.506c0-1.115-.445-1.963-1.695-3.078l-8.654-7.54c-1.607-1.383-2.498-2.454-2.498-4.105v-3.881c0-3.168 3.301-4.729 9.279-4.729 6.604 0 9.279 1.562 9.279 4.506v4.104h-5.889v-3.925h.001zM40.157 76.29h5.896l-12.906 40.442h-5.896L40.157 76.29zM30.852 101.41l-7.977-25.048h5.896L33.8 92.154l-2.948 9.256zM154.732 76.292h5.897l-12.906 40.442h-5.895l12.904-40.442zM145.459 101.34l-7.977-25.048h5.897l5.029 15.791-2.949 9.257zM69.027 108.502h.026l.001-27.296c0-3.658-2.23-4.907-9.815-4.908H47.882l-.002 32.212h5.886l.004-.008V78.796h4.844c2.677 0 4.55.357 4.55 2.007v27.698h5.863v.001zM182.32 80.269c0-2.154 1.746-3.741 3.811-3.741 2.045 0 3.791 1.587 3.791 3.741 0 2.173-1.746 3.761-3.791 3.761-2.065 0-3.811-1.588-3.811-3.761zm3.811 3.136c1.697 0 3.037-1.33 3.037-3.136 0-1.776-1.34-3.116-3.037-3.116-1.717 0-3.057 1.34-3.057 3.116 0 1.806 1.34 3.136 3.057 3.136zm-.795-.963h-.654v-4.327h1.646c1.023 0 1.529.377 1.529 1.23 0 .774-.486 1.112-1.121 1.191l1.23 1.905h-.734l-1.141-1.875h-.756v1.876h.001zm.785-2.431c.555 0 1.053-.04 1.053-.705 0-.536-.488-.635-.943-.635h-.895v1.34h.785z" fill="#352e78" />
              </svg>
            </div>

            <div className="c-logo c-cadence">
              <svg viewBox="15 85 175 25" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <path d="M22.919 106.697c7.309 0 13.819-1.904 17.32-4.854l-2.948-.676c-2.518 2.457-7.063 4.055-12.161 4.055-9.582 0-14.188-3.809-14.188-8.414 0-4.607 4.607-8.415 14.188-8.415 4.729 0 8.845 1.351 11.485 3.439l2.15-.86c-3.686-2.272-9.459-3.747-15.847-3.747-11.117 0-20.085 4.361-20.085 9.705.001 5.406 8.969 9.767 20.086 9.767z" />
                <path d="M93.676 89.561h95.57v1.72h-95.57v-1.72z" fill="#E31A2D" />
                <path d="M72.486 102.273c1.658 2.949 6.326 3.256 7.677 3.256h3.378V94.842H79.18s-4.975.123-6.694 3.072c-.308.553-.492 1.289-.492 2.088 0 .922.184 1.658.492 2.271z" />
                <path d="M72.486 94.72c3.255-.676 6.449-.614 6.633-.614h4.422V86.06h5.405v20.085H78.935s-3.133.061-6.449-.676c-3.378-.738-6.818-2.273-6.818-5.467s3.439-4.606 6.818-5.282z" />
                <path d="M72.486 91.28h6.817v-1.72H44.11v1.72h28.376z" />
                <path d="M117.875 106.145v-9.828s-.246-2.088 3.01-2.088 4.238.43 6.02 1.72l8.414 5.896s.922.615.922-.553v-6.94h2.641v11.055s.061 1.291-1.598 1.291c-1.596 0-2.455-.615-3.5-1.414l-12.285-8.721s-1.166-.737-1.166.49v9.092h-2.458z" />
                <path d="M174.996 94.105h14.127v.798h-10.811c-.49 0-.92.43-.92.921v3.685h9.643v1.168h-9.643v3.746c0 .492.43.922.92.922h11.609v.799h-14.926c-1.658 0-3.01-1.045-3.01-2.334v-7.433c.001-1.228 1.353-2.272 3.011-2.272z" />
                <path d="M98.527 94.105h14.066v.798h-10.811c-.492 0-.859.43-.859.921v3.685h9.58v1.168h-9.58v3.746c0 .492.367.922.859.922h11.67v.799H98.527c-1.72 0-2.948-1.045-2.948-2.334v-7.433c.001-1.228 1.229-2.272 2.948-2.272z" />
                <path d="M156.324 106.697c4.668 0 8.783-1.291 10.994-3.133l-1.904-.492c-1.596 1.598-4.422 2.641-7.615 2.641-6.082 0-7.984-2.455-7.984-5.527 0-3.01 2.578-5.466 7.984-5.466 2.887 0 5.221 1.044 6.633 2.333l1.965-.675c-2.334-1.413-6.018-2.396-10.072-2.396-6.939 0-12.652 2.826-12.652 6.326-.001 3.503 5.712 6.389 12.651 6.389z" />
                <path d="M50.866 101.477h4.299l-3.255-5.344s-.368-.676-1.044-.676h-.062c-.676 0-.982.553-1.413 1.229l-2.826 4.791h4.301z" />
                <path d="M50.866 93.86c.368 0 .798-.062 1.29-.062 3.808 0 4.545 1.351 5.282 2.395l6.142 9.951h-5.589l-2.212-3.625H45.89l-2.149 3.625h-2.396l6.142-10.319s.676-1.535 3.379-1.965z" />
              </svg>
            </div>


            <div className="c-logo c-siemens">
              <svg viewBox="0 9.5 24 5" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.478 10.016c.24 0 .59.046 1.046.14v.726a2.465 2.465 0 0 0-.946-.213c-.41 0-.615.118-.615.354 0 .088.041.16.124.216.069.045.258.14.568.286.446.208.743.388.89.541.176.182.264.417.264.705 0 .415-.172.73-.516.949-.279.176-.64.264-1.085.264-.375 0-.753-.046-1.133-.139v-.755c.41.135.774.203 1.09.203.437 0 .655-.121.655-.362a.302.302 0 0 0-.095-.227c-.065-.065-.232-.155-.5-.27-.481-.208-.795-.384-.94-.53a.999.999 0 0 1-.284-.73c0-.377.137-.666.413-.864.272-.196.626-.294 1.064-.294zm21.19 0c.246 0 .565.04.956.123l.09.016v.727a2.471 2.471 0 0 0-.948-.213c-.409 0-.612.118-.612.354 0 .088.04.16.123.216.066.043.256.139.57.286.443.208.74.388.889.541.176.182.264.417.264.705 0 .415-.172.73-.514.949-.28.176-.643.264-1.087.264-.376 0-.754-.046-1.134-.139v-.755c.407.135.77.203 1.09.203.437 0 .655-.121.655-.362 0-.09-.03-.166-.092-.227-.066-.065-.233-.155-.503-.27-.48-.206-.793-.382-.94-.53a.997.997 0 0 1-.284-.732c0-.376.137-.664.413-.862.272-.196.627-.294 1.064-.294zm-12.674.066l.92 2.444.942-2.444h1.257v3.825h-.968v-2.708l-1.072 2.747h-.632l-1.052-2.747v2.708H8.67v-3.825zm-5.587 0v3.825H3.386v-3.825zm3.554 0v.692H6.327v.864H7.75v.63H6.327v.908h1.677v.73h-2.66v-3.824zm8.707 0v.692h-1.634v.864h1.422v.63h-1.422v.908h1.677v.73H14.05v-3.824zm1.898 0l1.255 2.56v-2.56h.719v3.825h-1.15l-1.288-2.595v2.595h-.72v-3.825z" fill="#009999" />
              </svg>
            </div>

            <div className="c-logo c-intel">
              <svg viewBox="0 7 24 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.42 7.345v9.18h1.651v-9.18zM0 7.475v1.737h1.737V7.474zm9.78.352v6.053c0 .513.044.945.13 1.292.087.34.235.618.44.828.203.21.475.359.803.451.334.093.754.136 1.255.136h.216v-1.533c-.24 0-.445-.012-.593-.037a.672.672 0 0 1-.39-.173.693.693 0 0 1-.173-.377 4.002 4.002 0 0 1-.037-.606v-2.182h1.193v-1.416h-1.193V7.827zm-3.505 2.312c-.396 0-.76.08-1.082.241-.327.161-.6.384-.822.668l-.087.117v-.902H2.658v6.256h1.639v-3.214c.018-.588.16-1.02.433-1.299.29-.297.642-.445 1.044-.445.476 0 .841.149 1.082.433.235.284.359.686.359 1.2v3.324h1.663V12.97c.006-.89-.229-1.595-.686-2.09-.458-.495-1.1-.742-1.917-.742zm10.065.006a3.252 3.252 0 0 0-2.306.946c-.29.29-.525.637-.692 1.033a3.145 3.145 0 0 0-.254 1.273c0 .452.08.878.241 1.274.161.395.39.742.674 1.032.284.29.637.526 1.045.693.408.173.86.26 1.342.26 1.397 0 2.262-.637 2.782-1.23l-1.187-.904c-.248.297-.841.699-1.583.699-.464 0-.847-.105-1.138-.321a1.588 1.588 0 0 1-.593-.872l-.019-.056h4.915v-.587c0-.451-.08-.872-.235-1.267a3.393 3.393 0 0 0-.661-1.033 3.013 3.013 0 0 0-1.02-.692 3.345 3.345 0 0 0-1.311-.248zm-16.297.118v6.256h1.651v-6.256zm16.278 1.286c1.132 0 1.664.797 1.664 1.255l-3.32.006c0-.458.525-1.255 1.656-1.261zm7.073 3.814a.606.606 0 0 0-.606.606.606.606 0 0 0 .606.606.606.606 0 0 0 .606-.606.606.606 0 0 0-.606-.606zm-.008.105a.5.5 0 0 1 .002 0 .5.5 0 0 1 .5.501.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .498-.5zm-.233.155v.699h.13v-.285h.093l.173.285h.136l-.18-.297a.191.191 0 0 0 .118-.056c.03-.03.05-.074.05-.136 0-.068-.02-.117-.063-.154-.037-.038-.105-.056-.185-.056zm.13.099h.154c.019 0 .037.006.056.012a.064.064 0 0 1 .037.031c.013.013.012.031.012.056a.124.124 0 0 1-.012.055.164.164 0 0 1-.037.031c-.019.006-.037.013-.056.013h-.154Z" fill="#0071C5" />
              </svg>
            </div>

            <div className="c-logo c-micron">
              <svg viewBox="0 0 300 82" xmlns="http://www.w3.org/2000/svg">
                <path d="M143.281 65.378c-13.674 0-25.943-7.766-25.943-18.625 0-10.863 12.27-18.637 26.041-18.637 5.987 0 11.578 1.511 17.658 4.902l-4.286 5.506c-3.896-1.884-8.485-3.013-13.372-3.013-5.789 0-12.474 3.241-12.474 11.241 0 7.995 6.587 11.234 12.474 11.234 4.887 0 9.575-.979 13.565-2.717l4.293 5.81c-5.088 2.721-11.276 4.299-17.956 4.299M221.386 65.236c13.766 0 26.041-7.769 26.041-18.624 0-10.864-12.275-18.638-26.041-18.638-13.771 0-26.047 7.773-26.047 18.638 0 10.856 12.276 18.624 26.047 18.624zm12.473-18.624c0 7.994-6.684 11.233-12.473 11.233-5.792 0-12.474-3.239-12.474-11.233 0-8.003 6.682-11.242 12.474-11.242 5.789 0 12.473 3.239 12.473 11.242M252.969 64.337h12.861v-22.18c0-2.995 2.326-6.52 6.488-6.543 2.907.023 5.697 2.013 5.697 4.537l-.026 24.186h12.895V39.466c0-6.551-7.022-12.019-15.4-12.019-.083 0-.162.011-.244.013-.083-.002-.162-.013-.242-.013a17.775 17.775 0 0 0-9.432 2.702c-.023-.096-.746-2.474-12.597-2.474v36.662M98.555 64.337h12.599V28.885H98.555v35.452zM167.244 64.337h12.604V42.838c0-3.396 3.987-6.113 8.28-6.113 2.098 0 4.072.42 5.73 1.154v-9.323a30.861 30.861 0 0 0-4.507-.35c-3.378 0-6.766.979-9.539 2.624-.206-.419-1.751-2.4-12.568-2.4v35.907M74.519 50.206l-.002 14.134h12.902V38.535c-3.738 3.855-8.049 7.781-12.9 11.671" fill="#104076" />
                <path d="M87.419 38.535c14.208-14.658 20.093-28.283 15.512-34.841C98.149-3.155 83.293-.38 64.036 9.795a17.49 17.49 0 0 0-2.188 1.257c-.93.646-.388 1.115.299.866a23.174 23.174 0 0 0 2.411-1.008c14.435-6.846 25.694-8.074 30.095-3.296 6.707 7.278-7.028 31.129-30.812 48.771-3.175 2.354-8.075 5.802-11.266 7.717-.216.134-.429.266-.637.398-.844.553-1.595 1.067-2.186 1.53-.576.447-.465 1.159.573.712.633-.27 1.401-.679 2.219-1.18.185-.113.367-.216.561-.335 3.586-2.177 8.91-5.853 12.547-8.393a169.908 169.908 0 0 0 8.866-6.63c4.852-3.888 9.163-7.816 12.901-11.669" fill="#104076" />
                <path d="M24.085 82.748h12.902v-13.37a195.243 195.243 0 0 0 10.606-6.764c.789-.542 1.488-1.082 1.995-1.545.835-.764.23-1.156-.414-.817-.663.35-1.447.822-2.296 1.362-19.93 12.748-33.385 16.638-38.353 9.893-4.316-5.856 2.758-17.178 15.561-29.964V71.22c3.632-1.233 7.925-3.2 12.899-5.966l-.003-27.535 2.838 6.039c3.111 6.668 8.756 10.655 15.934 10.655 7.175 0 12.82-3.987 15.931-10.655l2.838-6.039-.003 7.025c4.617-4.478 8.559-8.948 11.548-13.272.373-.534.34-.984.137-1.478a12.338 12.338 0 0 0-11.145-7.013c-4.866 0-9.092 2.822-11.118 6.904l-5.4 11.455c-.558 1.115-1.586 1.734-2.789 1.734-1.2 0-2.234-.619-2.792-1.734l-5.398-11.453a12.47 12.47 0 0 0-4.589-5.041c3.949-3.134 7.787-5.933 11.566-8.227a23.716 23.716 0 0 0 2.156-1.498c.584-.445.476-1.157-.565-.72-.633.265-1.452.668-2.272 1.167-3.861 2.339-7.808 4.732-11.581 7.311-.458.312-.91.625-1.362.938a12.305 12.305 0 0 0-4.471-.835 12.346 12.346 0 0 0-12.359 12.362v1.701C5.859 53.298-3.71 69.39 1.29 76.555c3.671 5.254 12.376 4.041 22.795-.486v6.679" fill="#104076" />
              </svg>
            </div>

            <div className="c-logo c-qualcomm">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C6.22933 0 1.5761 4.48645 1.5761 10.47394c0 6.00417 4.65323 10.47394 10.4239 10.47394.98402 0 1.93468-.13343 2.8353-.3836l1.13412 2.9187c.11675.31688.35025.51702.7672.51702h1.80125c.43364 0 .75052-.28353.55038-.83391l-1.46768-3.81932c2.88534-1.81793 4.80333-5.03683 4.80333-8.8895C22.4239 4.48644 17.77067 0 12 0m4.53648 16.5615l-1.31758-3.41904c-.11675-.28353-.35024-.55038-.85059-.55038h-1.71786c-.43363 0-.7672.28353-.56706.83391l1.73454 4.48645c-.56706.1501-1.18416.21682-1.81793.21682-4.2196 0-7.22168-3.31897-7.22168-7.65532C4.77832 6.1376 7.7804 2.81862 12 2.81862s7.22168 3.31898 7.22168 7.65532c0 2.5351-1.01737 4.70327-2.6852 6.08756" fill="#3253DC" />
              </svg>
            </div>

            <div className="c-logo c-amd">
              <svg viewBox="0 9 24 6" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <path d="M18.324 9.137l1.559 1.56h2.556v2.557L24 14.814V9.137z" />
                <path d="M2 9.52l-2 4.96h1.309l.37-.982H3.9l.408.982h1.338L3.432 9.52z" />
                <path d="M6.209 9.52v4.955h1.238v-3.092l1.338 1.562h.188l1.338-1.556v3.091h1.238V9.52H10.47l-1.592 1.845L7.287 9.52z" />
                <path d="M13.77 9.52v4.96h2.057c1.979 0 2.88-1.046 2.88-2.472 0-1.36-.937-2.488-2.747-2.488zM15.007 10.43h.792c1.17 0 1.63.711 1.63 1.57 0 .728-.372 1.572-1.616 1.572h-.806z" />
                <path d="M4.022 10.703l.791 1.932H2.008z" />
                <path d="M21.159 11.01l-1.604 1.603v2.25h2.246l1.604-1.607h-2.246z" />
              </svg>
            </div>
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
