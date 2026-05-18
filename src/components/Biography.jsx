import { motion } from 'framer-motion';
import './Biography.css';

const Biography = () => {
  return (
    <section id="biography" className="section">
      <div className="section-title brutal-box">
        <h2>Biography</h2>
      </div>

      <div className="biography-grid">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bio-info brutal-box"
        >
          <h3>Summary</h3>
          <p>
            Computer Science student (4th Semester) at Pak-Austria Fachhochschule Institute of Applied Sciences and Technology with strong frontend expertise in MERN stack. Passionate about Business Development, sales, and marketing.
          </p>
          <p>
            Experienced in building real-world systems in Education and Healthcare domains. Skilled at understanding user needs and translating them into practical solutions. A dedicated problem solver who aims to bridge the gap between technical products and business value.
          </p>
          
          <ul className="bio-list">
            <li><strong>Name:</strong> Hanif Ullah Khan</li>
            <li><strong>Location:</strong> Bannu, KPK, Pakistan</li>
            <li><strong>Email:</strong> hanifullahkhan2007@gmail.com</li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bio-education brutal-box"
        >
          <h3>Education & Learning</h3>
          
          <div className="timeline-item">
            <span className="timeline-date brutal-border">Present</span>
            <h4>BS Computer Science (4th Semester)</h4>
            <p>Pak-Austria Fachhochschule Institute of Applied Sciences and Technology, Haripur</p>
          </div>

          <div className="timeline-item">
            <span className="timeline-date brutal-border">Self-Initiated</span>
            <h4>Business Development</h4>
            <p>Studying sales strategies, marketing fundamentals, and startup growth models. Learning customer psychology and buying behavior. Practicing communication and outreach techniques.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Biography;
