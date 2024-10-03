import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CardPlanetarySystem from "./CardPlanetarySystem";
const SelectPlanetarySystem = () => {
    return (_jsxs("div", { className: 'container', children: [_jsx("div", { className: "text-title", children: _jsx("p", { className: "", children: "Choose your destination" }) }), _jsxs("div", { className: "list-images", children: [_jsx(CardPlanetarySystem, { text: "Alfa Centauir", clas: 'ps-1' }), _jsx(CardPlanetarySystem, { text: "Tau Ceti", clas: 'ps-2' }), _jsx(CardPlanetarySystem, { text: "Gliese 1061", clas: 'ps-3' }), _jsx(CardPlanetarySystem, { text: "YZ Ceti", clas: 'ps-4' })] })] }));
};
export default SelectPlanetarySystem;
