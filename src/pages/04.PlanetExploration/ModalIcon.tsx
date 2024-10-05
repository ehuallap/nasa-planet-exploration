import { useState } from 'react';
import './ModalIcon.css'; // Importar estilos

const ModalIcon = ({ imagen, texto, title="", tamaño = '60px' }) => {
  const [hover, setHover] = useState(false);
  const url_icon = new URL("../../assets/icons/" + imagen, import.meta.url).href
  return (
    <div className="icon-container">
      <img
        src={url_icon}
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