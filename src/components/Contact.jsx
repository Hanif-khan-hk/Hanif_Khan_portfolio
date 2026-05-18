import { motion } from 'framer-motion';
import { Mail, MapPin, User, Code } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="section-title brutal-box">
        <h2>Contact</h2>
      </div>

      <div className="contact-container">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="contact-info brutal-box"
        >
          <h3>Get In Touch</h3>
          <p>Currently looking for opportunities where I can combine my technical skills with my passion for business development.</p>
          
          <div className="contact-links">
            <a href="mailto:hanifullahkhan2007@gmail.com" className="contact-link brutal-border">
              <Mail className="contact-icon" />
              <span>hanifullahkhan2007@gmail.com</span>
            </a>
            
            <div className="contact-link brutal-border">
              <MapPin className="contact-icon" />
              <span>Bannu, KPK, Pakistan</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://linkedin.com/in/hanif-khan-202020op" target="_blank" rel="noreferrer" className="social-icon brutal-border brutal-box">
              <User />
            </a>
            <a href="https://github.com/Hanif-khan-hk" target="_blank" rel="noreferrer" className="social-icon brutal-border brutal-box">
              <Code />
            </a>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-form brutal-box"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="brutal-input brutal-border" placeholder="John Doe" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="brutal-input brutal-border" placeholder="john@example.com" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" className="brutal-input brutal-border" placeholder="Hello Hanif..." required></textarea>
          </div>
          
          <button type="submit" className="brutal-btn full-width">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
