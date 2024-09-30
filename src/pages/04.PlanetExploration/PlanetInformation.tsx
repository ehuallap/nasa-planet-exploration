import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './PlanetInformation.css';
import earthTextureURL from '../../assets/earth_texture.jpg'
import DDModal from '../../components/DDModal';
import ModalIcon from './ModalIcon';
import Gota from '../../assets/gota.png'
import { Link } from 'react-router-dom';

function PlanetInformation() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    loader.load(earthTextureURL, (texture) => {
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      camera.position.z = 2.5;

      const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.004;
        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);

        // Dispose of the Three.js objects
        scene.clear();
        renderer.dispose();
        const canvas = renderer.domElement;
        if (canvas && mount.contains(canvas)) {
          mount.removeChild(canvas);
        }
      };
    });
  }, []);

  return (
    <div>
      <div ref={mountRef} style={{ width: '100vw', height: '100vh', overflow: 'hidden' }} />
        <DDModal 
        position={{ top: '15%', left: '20%' }}>
            <div className='header-title'>
                <div className='title'>
                    Hepler-651 b
                </div>
                <div className='sub-title'>
                    A Neptune-like giant planet
                </div>
            </div>
        </DDModal>
        <DDModal 
        position={{ top: '50%', left: '20%' }}>
            <div className=''>
                <p className='sub-title-2'>Informacion adicional</p>
                <div className='card'>
                    <p className='white'><span>Descubrimiento: </span>2015</p>
                    <p className='white'><span>Tipo de Planeta: </span>Similar a Neptuno</p>
                    <p className='white'>Kepler-651 b es un exoplaneta similar a Neptuno que orbita una estrella de tipo G. Tiene una masa de 6,21 Tierras, tarda 21,4 días en completar una órbita alrededor de su estrella y se encuentra a 0,1409 UA de su estrella. Su descubrimiento se anunció en 2016.</p>
                </div>
            </div>
        </DDModal>
        <DDModal 
        position={{ top: '45%', left: '45%' }}>
            <div className=''>
                <ModalIcon
                    imagen={Gota}
                    title="Agua fluvial"
                    texto="Se han detectado intensas tormentas eléctricas en un exoplaneta distante, con rayos iluminando su atmósfera oscura."
                ></ModalIcon>
            </div>
        </DDModal>
        <DDModal 
        position={{ top: '50%', left: '80%' }}>
            <div className='rigth'>
                <div className="grid-container">
                    <div className="grid-item">Excentri. orbital</div>
                    <div className="grid-item">Radio orbital</div>
                    <div className="grid-item">Periodo de orbita</div>
                    <div className="grid-item bottom-bordered">21.4 días</div>
                    <div className="grid-item bottom-bordered">0.1451AU</div>
                    <div className="grid-item bottom-bordered">0.003</div>
                </div>
                <div className="grid-container-velocity">
                    <div className="grid-item">Velocidad de viaje</div>
                    <div className="grid-item">Tiempo de viaje</div>
                    <div className="grid-item bottom-bordered">87 millones de millas por hora</div>
                    <div className="grid-item bottom-bordered">2 mil años</div>
                </div>
            </div>
        </DDModal>
        <DDModal 
        position={{ top: '80%', left: '50%' }}>
            <div className=''>
                <Link to="/video" style={{ textDecoration: 'none' }}>
                    <button>VISITAR EXOPLANETA</button>
                </Link>
            </div>
        </DDModal>
        <DDModal 
        position={{ top: '90%', left: '50%' }}>
            <div className='bottom-buttons'>
                <button>Regresar</button>
                <button>Siguiente</button>
            </div>
        </DDModal>
    </div>
    );
  }

export default PlanetInformation;
