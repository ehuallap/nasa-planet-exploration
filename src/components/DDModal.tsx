import React from 'react';

// Define el tipo de las props
type DDModalProps = {
  position: {
    top?: string | number; // Puede ser un número o una cadena
    left?: string | number; // Puede ser un número o una cadena
  };
  children: React.ReactNode; // Los hijos que se mostrarán en el modal
};

const DDModal: React.FC<DDModalProps> = ({ position, children }) => {
  const { top, left } = position;

  const modalStyle: React.CSSProperties = {
    position: 'absolute',
    top: top || '50%',
    left: left || '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'auto', // Asegúrate de que esto sea un valor válido
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={modalStyle}>
      {children}
    </div>
  );
};

export default DDModal;