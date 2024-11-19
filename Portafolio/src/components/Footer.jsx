import  React from 'react';
import { useLayoutEffect, useRef, useEffect } from 'react';
import '../styles/Footer.css'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

 function Footer({footerWidth,footerBackground}) {
  const footerRef = useRef(null);
  
  useLayoutEffect(()=>{
      const bodyWidth = document.body.clientWidth;
      const footerRefNode = footerRef.current;
      if(bodyWidth>=1279){
          footerRefNode.style.width = `${ footerWidth / 10 }rem`
      }    
  },[])
  return (
  
    <footer className="bg-dark text-light py-4" ref={footerRef}>
       <div className="container text-center">
        <h3 className='footer-sienna-tittle'>Portafolio Jonathan Santos</h3>
        <section className='footer-credits'>
            <p>Ingeniero de sistemas</p>
            <p>Desarrollador Full Stack</p>
            <p className='footer-location'>Bogotá, 2024</p>
        </section>

        <div className="mb-3">
          <a href="www.linkedin.com/in/jonathan-santos-8033002b3" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/jonathansan04" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <FaTwitter size={24} />
          </a>
        </div>
        <div className="mb-3">
          <a href="/aboutme" className="text-light mx-2">Acerca de mí</a>
          <a href="/proyects" className="text-light mx-2">Proyectos</a>
          <a href="#contacto" className="text-light mx-2">Contacto</a>
        </div>

        {/* Copyright */}
        <p className="mb-0">© 2024 Jonathan Santos - Todos los derechos reservados.</p>
        </div>
    </footer>
   
  );
};

export default Footer;