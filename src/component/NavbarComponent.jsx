import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sectionsRef = useRef({});

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const sections = ["home", "services", "portofolio", "contact"];
    sections.forEach(section => {
      sectionsRef.current[section] = document.getElementById(section);
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    sections.forEach(section => {
      if (sectionsRef.current[section]) {
        observer.observe(sectionsRef.current[section]);
      }
    });

    return () => {
      sections.forEach(section => {
        if (sectionsRef.current[section]) {
          observer.unobserve(sectionsRef.current[section]);
        }
      });
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 px-10 py-5 flex justify-between w-full bg-second text-light z-50">
        <div className="nav-brand">
          <a className="text-dark text-xl font-semibold hover:text-biru" href="">
            Zaku<span className="text-biru font-bold">.</span>
          </a>
        </div>
        <div className="nav-item hidden md:flex gap-7 text-lg items-center">
          <a href="#home" className={`hover:text-kuning ${activeSection === 'home' ? 'text-kuning' : ''}`}>Home</a>
          <a href="#services" className={`hover:text-kuning ${activeSection === 'services' ? 'text-kuning' : ''}`}>Services</a>
          <a href="#portofolio" className={`hover:text-kuning ${activeSection === 'portofolio' ? 'text-kuning' : ''}`}>Portofolio</a>
          <a href="#contact" className={`hover:text-kuning ${activeSection === 'contact' ? 'text-kuning' : ''}`}>Contact | <span><FontAwesomeIcon icon={faEnvelope} /> <FontAwesomeIcon icon={faPhone} /> <FontAwesomeIcon icon={faXTwitter} /></span></a>
        </div>
        <button
          className="md:hidden text-dark"
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-second text-light w-full text-lg gap-4 py-4 fixed top-14 left-0 z-40">
          <a href="#home" className={`hover:text-kuning ${activeSection === 'home' ? 'text-kuning' : ''}`}>Home</a>
          <a href="#services" className={`hover:text-kuning ${activeSection === 'services' ? 'text-kuning' : ''}`}>Services</a>
          <a href="#portofolio" className={`hover:text-kuning ${activeSection === 'portofolio' ? 'text-kuning' : ''}`}>Portofolio</a>
          <a href="#contact" className={`hover:text-kuning ${activeSection === 'contact' ? 'text-kuning' : ''}`}>Contact | <span><FontAwesomeIcon icon={faEnvelope} /> <FontAwesomeIcon icon={faPhone} /> <FontAwesomeIcon icon={faXTwitter} /></span></a>
        </div>
      )}
    </>
  );
};

export default NavbarComponent;
