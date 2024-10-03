import { jsx as _jsx } from "react/jsx-runtime";
const DDModal = ({ position, children }) => {
    const { top, left } = position;
    const modalStyle = {
        position: 'absolute',
        top: top || '50%',
        left: left || '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'auto', // Asegúrate de que esto sea un valor válido
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    return (_jsx("div", { style: modalStyle, children: children }));
};
export default DDModal;
