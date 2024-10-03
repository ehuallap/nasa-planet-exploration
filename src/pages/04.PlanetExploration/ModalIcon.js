import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './ModalIcon.css'; // Importar estilos
const ModalIcon = ({ imagen, texto, title = "", tamaño = '60px' }) => {
    const [hover, setHover] = useState(false);
    return (_jsxs("div", { className: "icon-container", children: [_jsx("img", { src: imagen, alt: "Imagen", style: { width: tamaño, height: tamaño }, className: "icon-imagen", onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) }), hover && (_jsxs("div", { className: "modal", children: [_jsx("p", { className: 'white', children: title }), _jsx("p", { className: 'white', children: texto })] }))] }));
};
export default ModalIcon;
