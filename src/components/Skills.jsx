import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const businessSkills = [
    'Communication & Persuasion',
    'Sales & Lead Generation',
    'Market Research & Analysis',
    'Client Relationship Management',
    'Presentation Skills'
  ];

  const technicalSkills = [
    'MERN Stack (MongoDB, Express, React, Node.js)',
    'Frontend Development (React, HTML, CSS, JS)',
    'UI/UX Understanding',
    'Basic Product Thinking'
  ];

  const keyStrengths = [
    'Strong Problem-Solving Ability',
    'Bridge Technical & Business Needs',
    'High Work Dedication & Consistency',
    'Quick Learner with Growth Mindset'
  ];

  return (
    <section id="skills" className="section">
      <div className="section-title brutal-box">
        <h2>Expertise</h2>
      </div>

      <div className="skills-grid">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="skill-category brutal-box"
        >
          <h3>Technical Skills</h3>
          <ul className="skill-list">
            {technicalSkills.map((skill, index) => (
              <li key={index} className="brutal-border">{skill}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="skill-category brutal-box accent-box"
        >
          <h3>Business & Comm.</h3>
          <ul className="skill-list">
            {businessSkills.map((skill, index) => (
              <li key={index} className="brutal-border">{skill}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="skill-category brutal-box full-width"
        >
          <h3>Key Strengths</h3>
          <div className="strengths-wrapper">
            {keyStrengths.map((strength, index) => (
              <div key={index} className="strength-item">
                <span className="bullet brutal-border"></span>
                {strength}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
