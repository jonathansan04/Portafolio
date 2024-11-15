// @flow
import  React from 'react';
import { Link } from 'react-router-dom';

 function Header() {
  return (
    <nav>
    <ul>
      <li><Link to="/aboutme">Acerca de mí</Link></li>
      <li><Link to="/proyects">Proyectos</Link></li>
      <li><Link to="/tech">Tecnologias</Link></li>
    </ul>
  </nav>
  );
};

export default Header;