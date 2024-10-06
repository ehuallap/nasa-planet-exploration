import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/01.LandingPage/LandingPage.js';
import MisionDescription from './pages/02.TravelCustomization/MisionDescription.js'
import './App.css';
import SelectPlanetarySystem from './pages/02.TravelCustomization/SelectPlanetarySystem.js';
import Loading from './pages/03.Mapping/Loading.js';
import Mapping from './pages/03.Mapping/Mapping.js';
import TauCetiMapping from './pages/03.Mapping/TauCetiMapping.js';
import PlanetInformation from './pages/04.PlanetExploration/PlanetInformation.js';
import Video from './pages/04.PlanetExploration/Video.js';
import SelectSpaceship from './pages/02.TravelCustomization/SelectSpaceship.js';
import ExoplanetTypes from './pages/01.LandingPage/ExoPlanetTypes.js';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mision-description" element={<MisionDescription />} />
          <Route path="/select-planetary-system" element={<SelectPlanetarySystem />} />
          <Route path="/select-spaceship" element={<SelectSpaceship />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/mapping" element={<Mapping />} />
          <Route path="/planet-information/" element={<PlanetInformation />} />
          <Route path="/video" element={<Video/>} />
          <Route path="/exoplanet-types" element={<ExoplanetTypes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
