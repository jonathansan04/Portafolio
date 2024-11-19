import  React from 'react';
import { FaReact, FaNode, FaJsSquare, FaPython, FaJava } from 'react-icons/fa';
import { DiMongodb,DiMysql, DiPostgresql } from "react-icons/di";
import { SiSpringboot, SiRstudioide } from "react-icons/si";


 function Tecnologias() {
  return (
    <div>
      <h1>Tecnologias:</h1>

      <div>
      <h3>Bases de datos</h3>
      <DiMongodb style={{ width: '50px', height: '50px', fontSize: '40px', color: '#47A248' }} />
      <DiMysql style={{ width: '50px', height: '50px', fontSize: '40px', color: '#00758F'}} />
      <DiPostgresql style={{ width: '50px', height: '50px', fontSize: '40px', color: '#336791' }}/>
      </div>
     

      <div>
      <h3>Lenguajes de programación</h3>
      <FaJsSquare style={{ fontSize: '40px', color: '#F7DF1E' }} />
      <FaNode style={{ width: '50px', height: '50px', fontSize: '40px', color: 'green' }} />
      <FaPython style={{ width: '50px', height: '50px', fontSize: '40px', color: '#306998' }} />
      <SiRstudioide style={{ width: '50px', height: '50px', fontSize: '40px', color: '#61DBFB'}} />
      <FaJava style={{ width: '50px', height: '50px', fontSize: '40px', color: '#007396' }}/>
      </div>
     
      <div>
      <h3>Frameworks</h3>
      <FaReact style={{ fontSize: '40px', color: '#61DBFB' }} />
      <SiSpringboot style={{ width: '50px', height: '50px', fontSize: '40px', color: '#6DB33F' }} />
      </div>
     
      
    </div>
  );
  
};

export default Tecnologias;