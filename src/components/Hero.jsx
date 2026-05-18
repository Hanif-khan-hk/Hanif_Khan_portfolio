import { motion } from 'framer-motion';
import profileImg from '../profile img.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          HANIF<br />ULLAH KHAN
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-subtitle brutal-box"
        >
          <h3>MERN Stack Developer &<br />Business Development Enthusiast</h3>
          <p>Bridging the gap between technical products and business value.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hero-actions"
        >
          <a href="#contact" className="brutal-btn">Get In Touch</a>
          <a href="#projects" className="brutal-btn secondary">View Work</a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="hero-image-wrapper brutal-border"
      >
        <img src={profileImg} alt="Hanif Khan" className="hero-image" />
      </motion.div>
    </section>
  );
};

export default Hero;
