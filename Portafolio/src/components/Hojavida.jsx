import React from 'react';

const Hojavida = () => {
  
    const handleClick = () => {
    // Redirige al archivo PDF
    window.location.href = '/JonathanSantos_Hojadevida.pdf'; 
  };

  return (
    <button className='btn btn-warning' onClick={handleClick}>
    Hoja de Vida
    </button>
  );
};

export default Hojavida;
