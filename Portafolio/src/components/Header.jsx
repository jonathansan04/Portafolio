// @flow
import  React from 'react';
import { Link } from 'react-router-dom';

 function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto"> {/* ms-auto alinea los elementos hacia la derecha */}
        <li className="nav-item">
          <Link className="nav-link me-4" to="/aboutme" style={{ textDecoration: 'none', color: 'black',  fontWeight: 'bold', marginLeft: '20px' }}>
            Acerca de mí
          </Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link me-4" to="/proyects" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', marginLeft: '20px' }}>
            Proyectos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-4" to="/tech" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', marginLeft: '20px' }}>
            Tecnologías
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Header;