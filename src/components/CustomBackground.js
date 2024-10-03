import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './CustomBackground.css';
const CustomBackground = ({ children }) => {
    return (_jsxs("div", { className: "bc", children: [_jsx("div", { className: "estrellas" }), _jsx("div", { className: "conten", children: children })] }));
};
export default CustomBackground;
