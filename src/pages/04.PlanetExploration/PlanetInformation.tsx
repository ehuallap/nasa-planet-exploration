import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './PlanetInformation.css';
import earthTextureURL from '../../assets/textures/centauri-b-2.png'
import DDModal from '../../components/DDModal';
import ModalIcon from './ModalIcon';
import Gota from '../../assets/gota.png'
import { Link } from 'react-router-dom';
import useMisionStore from '../../store/store';
import DDButton from '../../components/DDButton';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import cloudTexture from '../../assets/textures/cloud-centauri-b.jpg'; // Importar la textura de nubes
import PlanetAudio  from '../../assets/sounds/space-planet.mp3'
import BackgroundAudio from '../../components/BackgroundAudio';
import SelectSpacesuit from '../03.Mapping/SelectSpacesuit';

import SpaceSuit1 from '../../assets/spacesuits/spacesuit-helado-rocoso-sin-atmosfera.png'

function PlanetInformation() {
  const mountRef = useRef<HTMLDivElement>(null);
  
  const { currentExoplanet, indexExoplanet, nextCurrentExoplanet } = useMisionStore();
  const [isOpen, setIsOpen] = useState(false);
  const nextExoplanet  = () => {
    console.log("index ", indexExoplanet)
    nextCurrentExoplanet()
    console.log("index ", indexExoplanet)
  }
  const url_texture = new URL("../../assets/textures/" + currentExoplanet.url_asset_texture, import.meta.url).href
  console.log("texture", url_texture)
  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Controlador para interactuar con el mouse
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Animación suave
    controls.dampingFactor = 0.05;
    controls.enablePan = false; // Deshabilitar desplazamiento de la cámara
    controls.rotateSpeed = 0.3; // Velocidad de rotación con el mouse

    // Añadir luz ambiental
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Luz ambiental suave
    scene.add(ambientLight);

    // Añadir luz direccional desde un costado (fijo) con mayor intensidad
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Intensidad de la luz aumentada
    directionalLight.position.set(3, 2, 1); // Luz fija desde un solo lado
    scene.add(directionalLight);

    const loader = new THREE.TextureLoader();
    
    // Cargar textura de la Tierra
    loader.load(url_texture, (earthTexture) => {
      const geometry = new THREE.SphereGeometry(1, 64, 64);

      // Material para el planeta
      const earthMaterial = new THREE.MeshStandardMaterial({
        map: earthTexture,
        roughness: 1,
        metalness: 0,
        emissive: new THREE.Color(0x000000),
        emissiveIntensity: 0,
      });

      // Esfera para el planeta
      const earthSphere = new THREE.Mesh(geometry, earthMaterial);
      scene.add(earthSphere);

      // Cargar la textura de nubes
      loader.load(cloudTexture, (cloudTexture) => {
        const cloudGeometry = new THREE.SphereGeometry(1.02, 64, 64); // Ligeramente más grande que la Tierra
        const cloudMaterial = new THREE.MeshStandardMaterial({
          map: cloudTexture,
          transparent: true, // Para que solo las nubes sean visibles
          opacity: 0.2, // Ajustar la opacidad de las nubes
        });

        // Esfera para las nubes
        const cloudSphere = new THREE.Mesh(cloudGeometry, cloudMaterial);
        scene.add(cloudSphere);

        camera.position.z = 2.5;

        // Animación
        const animate = () => {
          requestAnimationFrame(animate);

          // Mantener el giro automático del planeta y las nubes con velocidades distintas
          earthSphere.rotation.y += 0.0007; // Velocidad del planeta
          cloudSphere.rotation.y += 0.001; // Velocidad de las nubes, más rápida

          // Actualizar controles de orbitación
          controls.update();

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

          // Limpiar objetos de Three.js
          scene.remove(earthSphere);
          scene.remove(cloudSphere);
          controls.dispose();
          renderer.dispose();
          const canvas = renderer.domElement;
          if (canvas && mount.contains(canvas)) {
            mount.removeChild(canvas);
          }
        };
      });
    });

  }, []);

  const positions = [
    { top: "42%", left: "42%" },
    { top: "42%", left: "58%" },
    { top: "36%", left: "50%" },
    { top: "58%", left: "42%" },
    { top: "58%", left: "58%" },
    { top: "64%", left: "50%" }
  ]
  

  return (
    <div>
      <div ref={mountRef} style={{ width: '100vw', height: '100vh', overflow: 'hidden' }} />
        <BackgroundAudio href={PlanetAudio}></BackgroundAudio>
        <DDModal 
        position={{ top: '15%', left: '20%' }}>
            <div className='header-title'>
                <div className='title'>
                    {currentExoplanet.name}
                </div>
                <div className='sub-title'>
                    {currentExoplanet.subtitle}
                </div>
            </div>
        </DDModal>
        <DDModal 
        position={{ top: '50%', left: '20%' }}>
            <div className=''>
                <p className='sub-title-2'>Additional Information</p>
                <div className='card'>
                    <p className='white'><span>Year of Discovery: </span>{currentExoplanet.year}</p>
                    <p className='white'><span>Planet Type: </span>{currentExoplanet.type}</p>
                    <p className='white'>{currentExoplanet.description}</p>
                </div>
            </div>
        </DDModal>
        {
          currentExoplanet.icons.length > 0 ? currentExoplanet.icons.map((icon, index) => {
            return (
              <DDModal 
              key={index}
                position={positions[index]}>
                    <div className=''>
                        <ModalIcon
                            imagen={icon.icon}
                            title={icon.title}
                            texto={icon.description}
                        ></ModalIcon>
                    </div>
                </DDModal>
            )
          }) : <></>
        }
        <DDModal 
        position={{ top: '50%', left: '80%' }}>
            <div className='rigth'>
                <div className="grid-container">
                    <div className="grid-item">Planet Size</div>
                    <div className="grid-item">Planet Mass</div>
                    <div className="grid-item">Temperature</div>
                    <div className="grid-item bottom-bordered">{currentExoplanet.size}</div>
                    <div className="grid-item bottom-bordered">{currentExoplanet.mass}</div>
                    <div className="grid-item bottom-bordered">{currentExoplanet.temperature}</div>
                </div>
                <div className="grid-container-velocity">
                    <div className="grid-item">Distance (light years)</div>
                    <div className="grid-item">Orbit Time</div>
                    <div className="grid-item bottom-bordered">{currentExoplanet.distance_ligth_years}</div>
                    <div className="grid-item bottom-bordered">{currentExoplanet.orbit_time}</div>
                </div>
            </div>
        </DDModal>
        
        <DDModal 
        position={{ top: '80%', left: '50%' }}>
            <div className=''>
                <DDButton onClick={()=> setIsOpen(!isOpen)}>Explore Exoplanet</DDButton>
                {/* <Link to="/video" style={{ textDecoration: 'none' }}>
                    <button>Explore Exoplanet</button>
                </Link> */}
            </div>
        </DDModal>
        <DDModal 
        position={{ top: '90%', left: '50%' }}>
            <div className='bottom-buttons'>
                <DDButton href="/mapping">Return to spaceship</DDButton>
                <button onClick={nextExoplanet}>Next</button>
            </div>
        </DDModal>
        <DDModal
        position={{ top: '50%', left: '50%' }}>
          {isOpen && <div className='modal-overlay'>
                <SelectSpacesuit/>
            </div>}
        </DDModal>
    </div>
    );
  }

export default PlanetInformation;
