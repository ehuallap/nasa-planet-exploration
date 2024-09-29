import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/01.LandingPage/LandingPage.js';
import MisionDescription from './pages/02.TravelCustomization/MisionDescription.js'
import './App.css';
import SelectPlanetarySystem from './pages/02.TravelCustomization/SelectPlanetarySystem.js';
import Loading from './pages/03.Mapping/Loading.js';
import Mapping from './pages/03.Mapping/Mapping.js';
import PlanetInformation from './pages/04.PlanetExploration/PlanetInformation.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mision-description" element={<MisionDescription />} />
          <Route path="/select-planetary-system" element={<SelectPlanetarySystem />} />
          <Route path="/personalization" element={<MisionDescription />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/mapping" element={<Mapping />} />
          <Route path="/planet-information" element={<PlanetInformation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
