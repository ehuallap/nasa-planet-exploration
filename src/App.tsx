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

function App() {
  //const videoUrl = "https://www.youtube.com/watch?v=yDjgUWWE1IQ";
  const videoUrl = "https://www.youtube.com/watch?v=hEdzv7D4CbQ";
  const videoId = videoUrl.split('v=')[1]; // Extrae el ID del video
  const ampersandPosition = videoId.indexOf('&'); // Verifica si hay un "&" en el ID
  // if (ampersandPosition !== -1) {
  //   videoId = videoId.substring(0, ampersandPosition); // Si hay un "&", corta el ID hasta esa posición
  // }
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
          <Route path="/mapping/tau-ceti" element={<TauCetiMapping />} />
          <Route path="/planet-information" element={<PlanetInformation />} />
          <Route path="/video" element={<Video videoId={videoId}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
