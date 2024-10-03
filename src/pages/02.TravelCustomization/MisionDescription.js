import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import './MisionDescription.css';
import Astronaut from '../../assets/astronauta.png';
import DDTitle from "../../components/DDTitle";
import useMisionStore from "../../store/store";
const MisionDescription = () => {
    const [name, setNameLocal] = useState("");
    let [text1, setText1] = useState(true);
    let [text2, setText2] = useState(false);
    let [text3, setText3] = useState(false);
    setTimeout(() => {
        setText2(true);
    }, 2000);
    setTimeout(() => {
        setText3(true);
    }, 10000);
    const handleInputChange = (event) => {
        setNameLocal(event.target.value);
    };
    const { setName } = useMisionStore();
    const addNameToStore = () => {
        setName(name);
    };
    return (_jsxs("div", { className: 'container-mision', children: [_jsxs("div", { className: "left", children: [text1 && _jsx(DDTitle, { text: "Welcome to SOLUTI's Mission", fontSize: '35px', color: 'white' }), text2 && _jsx(DDTitle, { text: "You are going to be part of the most wonderful adventure, your are going to be the traveler of the future", fontSize: '30px', color: 'white' }), text3 && _jsx(DDTitle, { text: "Enter your name: ", fontSize: '30px', color: 'white' }), _jsx("input", { type: "text", className: "input", onChange: handleInputChange }), name.length > 0 ? (_jsx(Link, { to: "/select-planetary-system", style: { textDecoration: 'none' }, onClick: addNameToStore, children: _jsx("button", { className: "button", children: "Next" }) }))
                        : (_jsx("span", { style: { textDecoration: 'none' }, children: _jsx("button", { className: "button", disabled: true, children: "Next" }) }))] }), _jsx("div", { className: "right", children: _jsx("img", { src: Astronaut, className: "astronaut", alt: "Astronaut", width: "500", height: "600" }) })] }));
};
export default MisionDescription;
