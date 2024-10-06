import { useState } from 'react';
import './ModalIcon.css'; // Importar estilos

const ModalIcon = ({ imagen, texto, darker, onClick, title="", tamaño = '60px' }) => {
  const [hover, setHover] = useState(false);
  const url_icon = new URL("../../assets/icons/" + imagen, import.meta.url).href
  const [dar, setDar] = useState(darker);
  const onClicked = () => {
    setDar(!dar);
    onClick()
  }

  return (
    <div className="icon-container">
      <img
        src={url_icon}
        alt="Imagen"
        style={{ width: tamaño, height: tamaño}}
        //className="icon-imagen darker"
        className={`icon-imagen ${dar ? 'darker':''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={()=>onClicked()}
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