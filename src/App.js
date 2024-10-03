import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/01.LandingPage/LandingPage.js';
import MisionDescription from './pages/02.TravelCustomization/MisionDescription.js';
import './App.css';
import SelectPlanetarySystem from './pages/02.TravelCustomization/SelectPlanetarySystem.js';
import Loading from './pages/03.Mapping/Loading.js';
import Mapping from './pages/03.Mapping/Mapping.js';
import PlanetInformation from './pages/04.PlanetExploration/PlanetInformation.js';
import Video from './pages/04.PlanetExploration/Video.js';
import SelectSpaceship from './pages/02.TravelCustomization/SelectSpaceship.js';
function App() {
    //const videoUrl = "https://www.youtube.com/watch?v=yDjgUWWE1IQ";
    const videoUrl = "https://www.youtube.com/watch?v=hEdzv7D4CbQ";
    const videoId = videoUrl.split('v=')[1]; // Extrae el ID del video
    const ampersandPosition = videoId.indexOf('&'); // Verifica si hay un "&" en el ID
    // if (ampersandPosition !== -1) {
    //   videoId = videoId.substring(0, ampersandPosition); // Si hay un "&", corta el ID hasta esa posición
    // }
    return (_jsx(Router, { children: _jsx("div", { className: "App", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LandingPage, {}) }), _jsx(Route, { path: "/mision-description", element: _jsx(MisionDescription, {}) }), _jsx(Route, { path: "/select-planetary-system", element: _jsx(SelectPlanetarySystem, {}) }), _jsx(Route, { path: "/select-spaceship", element: _jsx(SelectSpaceship, {}) }), _jsx(Route, { path: "/loading", element: _jsx(Loading, {}) }), _jsx(Route, { path: "/mapping", element: _jsx(Mapping, {}) }), _jsx(Route, { path: "/planet-information", element: _jsx(PlanetInformation, {}) }), _jsx(Route, { path: "/video", element: _jsx(Video, { videoId: videoId }) })] }) }) }));
}
export default App;
