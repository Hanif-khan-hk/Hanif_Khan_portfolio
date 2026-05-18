import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'School Learning Management System (LMS)',
      description: 'Developed a complete LMS with Admin, Teacher, and Parent portals using MERN stack. Designed dashboards to improve communication and track attendance/performance.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      image: '/portfolio tkr snip.png',
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Hospital Management System',
      description: 'Built a system with Admin, Doctor, and Patient portals. Implemented features like appointment scheduling and patient record management to improve healthcare workflows.',
      tags: ['MERN Stack', 'UI/UX', 'System Design'],
      image: '/yango snip.png',
      links: { demo: '#', github: '#' }
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-title brutal-box">
        <h2>Portfolio</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="project-card brutal-box"
          >
            <div className="project-image-wrapper brutal-border">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <a href={project.links.demo} className="brutal-btn"><ExternalLink size={18} /> Live</a>
                <a href={project.links.github} className="brutal-btn secondary"><Code size={18} /> Code</a>
              </div>
            </div>
            
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag brutal-border">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
