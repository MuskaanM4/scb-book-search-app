'use client';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { motion } from 'framer-motion';
import { FaUserCircle, FaLinkedin, FaEnvelope, FaGithub, FaPhoneAlt } from 'react-icons/fa';  // Luxer icoon voor developer
import { FaLightbulb, FaRocket, FaCode, FaBrain } from 'react-icons/fa';

const About = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={styles.aboutContainer}>
      <motion.h1 style={styles.aboutTitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        More information about The Book Search App
      </motion.h1>

      <motion.p style={styles.aboutDescription} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        The Book Search App offers a seamless, intuitive and elegant experience for book lovers. Whether you're searching for a bestseller, an old classic or a hidden gem, our app provides the perfect platform to explore, discover and save your favorite books.
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
        <Button 
          style={styles.aboutButton} 
          onClick={() => window.location.href = '/'} // Link home page
        >
          Get Started !
        </Button>
      </motion.div>

      <motion.h2 style={styles.sectionTitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
        About the Developer
      </motion.h2>

      <motion.p style={styles.aboutDeveloperDescription} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
        Developed by <span style={styles.aboutDeveloperName}>Mahabier Muskaan</span>, a passionate junior software developer with a deep love for writing code, elegant design and modern technologies.
      </motion.p>

      <motion.div style={styles.aboutDeveloperImage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.5 }}>
        <FaUserCircle style={styles.profileIcon} />
      </motion.div>

      {/*Bento Grid voor skilzz*/}
      <motion.h2 
      style={styles.sectionTitle} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1, delay: 3 }}
      >
        My Skills & Strengths
      </motion.h2>

      <motion.div 
      style={styles.bentoGrid} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1, delay: 3.5 }}
      >
        <div style={styles.bentoItem}>
          <FaLightbulb style={styles.icon} />
          <h3>Leergierigheid</h3>
          <p>Ik ben altijd op zoek naar nieuwe technologieën en uitdagingen.</p>
        </div>
        <div style={styles.bentoItem}>
          <FaRocket style={styles.icon} />
          <h3>Ambitie</h3>
          <p>Ik werk hard om mijn doelen te bereiken met een zware doorzettingsvermogen en blijf graag groeien als developer.</p>
        </div>
        <div style={styles.bentoItem}>
          <FaCode style={styles.icon} />
          <h3>Creativiteit</h3>
          <p>Innovatieve oplossingen bedenken voor complexe problemen.</p>
        </div>
        <div style={styles.bentoItem}>
          <FaBrain style={styles.icon} />
          <h3>Probleemoplossend</h3>
          <p>Ik analyseer en los technische problemen effectief op.</p>
        </div>
      </motion.div>

      <motion.div style={styles.aboutContact} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 4 }}>
        <h3>Connect with me:</h3>
        <p style={styles.contactText}>I am always open to new opportunities and feedback.</p>
        <Button style={styles.contactButton} onClick={showModal}>
          Contact Me !
        </Button>
      </motion.div>

      {/* Modal voor m'n socials*/}
          <Modal 
      title="Connect with Mahabier Muskaan" 
      open={isModalVisible} 
      onCancel={handleCancel}
      footer={null}
      centered
      style={{ textAlign: 'center' }}
    >
      <div style={styles.modalContent}>
        <div style={styles.socialLink}>
          <FaLinkedin style={styles.icon} /> 
          <a href="https://www.linkedin.com/in/muskaan-mahabier-41917a254/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div style={styles.socialLink}>
          <FaEnvelope style={styles.icon} />
          <a href="mailto:muskaanmahabier@gmail.com">
            Email
          </a>
        </div>
        <div style={styles.socialLink}>
          <FaGithub style={styles.icon} />
          <a href="https://github.com/MuskaanM4" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div style={styles.socialLink}>
          <FaPhoneAlt style={styles.icon} />
          <a href="tel:+5978804734">
            +597 8804734
          </a>
        </div>
      </div>
    </Modal>
    </div>
  );
};

// Styling
const styles = {
  aboutContainer: {
    background: 'linear-gradient(135deg, #b3cde0, #e1f3fe)',
    padding: '80px 50px',
    textAlign: 'center',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    margin: '50px auto',
    maxWidth: '1000px',
  },
  aboutTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#415a77',
    marginBottom: '30px',
  },
  aboutDescription: {
    fontSize: '1.5rem',
    color: '#4a4a4a',
    marginBottom: '40px',
    lineHeight: '1.8',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'justify',
  },
  aboutButton: {
    backgroundColor: '#415A77',
    color: '#E0E1DD',
    padding: '15px 40px',
    fontSize: '1.5rem',
    borderRadius: '10px',
    marginTop: '40px',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#415a77',
    marginTop: '50px',
  },
  aboutDeveloperDescription: {
    fontSize: '1.6rem',
    color: '#4a4a4a',
    marginBottom: '40px',
    lineHeight: '1.8',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'justify',
  },
  aboutDeveloperName: {
    fontStyle: 'italic',
    color: '#b23a48',
  },
  aboutDeveloperImage: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  profileIcon: {
    color: '#5d6d7e',
    fontSize: '150px',
  },
  bentoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '30px',
    padding: '20px',
  },
  bentoItem: {
    backgroundColor: '#e1f3fe',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  icon: {
    fontSize: '30px',
    color: '#b23a48',
    marginBottom: '10px',
  },
  aboutContact: {
    backgroundColor: '#e1f3fe',
    padding: '40px',
    borderRadius: '10px',
    marginTop: '50px',
  },
  contactText: {
    fontSize: '1.4rem',
    color: '#4a4a4a',
    marginBottom: '30px',
  },
  contactButton: {
    backgroundColor: '#415A77',
    color: '#E0E1DD',
    padding: '15px 40px',
    fontSize: '1.5rem',
    borderRadius: '10px',
  },
  modalContent: {
    fontSize: '1.5rem',
    color: '#4a4a4a',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '25px',
    fontSize: '1.2rem',
  },
};

export default About;