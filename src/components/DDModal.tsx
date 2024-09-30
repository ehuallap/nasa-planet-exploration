
const DDModal = ({ position, children }) => {
  const { top, left } = position;

  const modalStyle = {
    position: 'absolute',
    top: top || '50%',
    left: left || '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'auto', // Para que no interfiera con la interacción de la escena
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