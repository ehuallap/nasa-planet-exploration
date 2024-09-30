import { useState } from 'react';
import './ModalIcon.css'; // Importar estilos

const ModalIcon = ({ imagen, texto, title="", tamaño = '60px' }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="icon-container">
      <img
        src={imagen}
        alt="Imagen"
        style={{ width: tamaño, height: tamaño }}
        className="icon-imagen"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      {hover && (
        <div className="modal">
            <p className='white'>{title}</p>
            <p className='white'>{texto}</p>
        </div>
      )}
    </div>
  );
};

export default ModalIcon;