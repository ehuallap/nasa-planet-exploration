import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import Back1 from '../../assets/astronauta.png';
import Back2 from '../../assets/backgrouond2.jpg';
import Back3 from '../../assets/earth_texture.jpg';
import Back4 from '../../assets/background.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DDButton from "../../components/DDButton";
import './SelectSpaceship.css';
import useMisionStore from "../../store/store";
import CustomBackground from "../../components/CustomBackground";
const images = [
    Back1,
    Back2,
    Back3,
    Back4,
];
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const SelectSpaceship = () => {
    const carouselRef = useRef();
    const { setSpaceship } = useMisionStore();
    const handleSelectClick = () => {
        if (carouselRef.current) {
            const currentIndex = carouselRef.current;
            setSpaceship(currentIndex);
            console.log('Índice de la imagen actual:', currentIndex);
        }
        else {
            console.warn('carouselRef.current es undefined');
        }
    };
    return (_jsx(CustomBackground, { children: _jsxs("div", { children: [_jsx("div", { className: "text-title", children: _jsx("p", { children: "Select your spaceship" }) }), _jsx(Carousel, { ref: carouselRef, responsive: responsive, arrows: true, children: images.map((image, index) => (_jsx("div", { style: { height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }, children: _jsx("img", { src: image, alt: `Imagen ${index + 1}`, style: { maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' } }) }, index))) }), _jsx("div", { className: "bottom", children: _jsx(DDButton, { href: "/mapping", onClick: handleSelectClick, className: "btn-class" // Asegúrate de usar la clase adecuada
                        , children: "Select" }) })] }) }));
};
export default SelectSpaceship;
