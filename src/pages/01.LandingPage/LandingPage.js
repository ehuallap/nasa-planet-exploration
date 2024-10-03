import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './LandingPage.css';
import DDTitle from '../../components/DDTitle';
import DDButton from '../../components/DDButton';
const LandingPage = () => {
    const consoles = () => {
        console.log("Este es de prueba");
    };
    return (_jsxs("div", { className: 'container', children: [_jsxs("div", { className: "hero", children: [_jsxs("div", { className: 'hero-content', children: [_jsx("h2", { className: 'slogan', children: "DESCUBRE MAS ALLA" }), _jsx(DDTitle, { text: 'VIAJA Y DESCUBRE NUEVOS EXOPLANETAS', fontSize: '80px', color: 'white' }), _jsx("p", { className: 'description', children: "Descubre +10,000 exoplanetas en diferentes siustemas solares" })] }), _jsx("div", { className: 'button-container', children: _jsx(DDButton, { href: "mision-description", onClick: consoles, className: "button", children: "EMPIEZA TU VIAJE" }) })] }), _jsx("div", { className: "content", children: _jsxs("div", { className: 'hero-content', children: [_jsx("h3", { className: 'slogan', children: "QUE ES UN EXOPLANETA?" }), _jsx("p", { className: 'description', children: "A uma dist\u00E2ncia m\u00E9dia de 140 milh\u00F5es de milhas, Marte \u00E9 um dos vizinhos habit\u00E1veis \u200B\u200Bmais pr\u00F3ximos da Terra. Marte est\u00E1 mais ou menos a metade da dist\u00E2ncia da Terra do Sol, ent\u00E3o ainda tem luz solar decente. Est\u00E1 um pouco frio, mas podemos esquentar. Sua atmosfera \u00E9 composta principalmente de CO2 com um pouco de nitrog\u00EAnio e arg\u00F4nio e alguns outros oligoelementos, o que significa que podemos cultivar plantas em Marte apenas comprimindo a atmosfera." }), _jsx("p", { className: 'description', children: "A uma dist\u00E2ncia m\u00E9dia de 140 milh\u00F5es de milhas, Marte \u00E9 um dos vizinhos habit\u00E1veis \u200B\u200Bmais pr\u00F3ximos da Terra. " }), _jsx(DDTitle, { text: "Este es una demostracion del ddtitle", color: 'red', fontSize: '80px' })] }) }), _jsx("div", { className: 'important-facts', children: _jsx("div", { className: 'hero-content', children: _jsx("h1", { children: "HOLA" }) }) })] }));
};
export default LandingPage;
