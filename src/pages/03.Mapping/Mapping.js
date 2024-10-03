import { jsx as _jsx } from "react/jsx-runtime";
import DDButton from '../../components/DDButton';
import useMisionStore from '../../store/store';
import './Mapping.css';
const Mapping = () => {
    const { planetarySystem, currentExoplanet, setCurrentExoplanet } = useMisionStore();
    const changeExoplanet = (option) => {
        console.log("anuevo exoplanet : " + option);
        setCurrentExoplanet(option);
    };
    return (_jsx("div", { className: 'container-mapping', children: _jsx("div", { className: 'exoplanets-mapping', children: planetarySystem.exoplanets.map((exoplanet, index) => {
                return (_jsx(DDButton, { href: "/planet-information", onClick: () => changeExoplanet(index), className: "btn-class", children: exoplanet.name }));
            }) }) }));
};
export default Mapping;
