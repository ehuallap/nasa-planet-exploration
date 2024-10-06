import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './PlanetInformation.css';
import earthTextureURL from '../../assets/textures/centauri-b-2.png'
import DDModal from '../../components/DDModal';
import ModalIcon from './ModalIcon';
import Gota from '../../assets/gota.png'
import { Link, useNavigate } from 'react-router-dom';
import useMisionStore from '../../store/store';
import DDButton from '../../components/DDButton';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import cloudTexture from '../../assets/textures/cloud-centauri-b.jpg'; // Importar la textura de nubes
import PlanetAudio  from '../../assets/sounds/space-planet.mp3'
import BackgroundAudio from '../../components/BackgroundAudio';
import SelectSpacesuit from '../03.Mapping/SelectSpacesuit';

function PlanetInformation() {
  const { currentExoplanet, indexExoplanet } = useMisionStore();
  const [isOpen, setIsOpen] = useState(false);
  
  const selectIcon = (index) => {
    if(currentExoplanet.icons[index].selected == undefined){
      currentExoplanet.icons[index].selected = true
    }else{
      currentExoplanet.icons[index].selected = !currentExoplanet.icons[index].selected
    }
  }
  const [error, setError] = useState(false);
  const [grats, setGrats] = useState(false);
  
  const validateIcons = () => {
    console.log("chekeo", currentExoplanet.icons)
    for (let index = 0; index < currentExoplanet.icons.length; index++){
      if(currentExoplanet.icons[index].correct == true && (currentExoplanet.icons[index].selected == false ||currentExoplanet.icons[index].selected == undefined)){
        setError(true)
        setTimeout(()=>{
          setError(false)
        }, 5000)
        return false;
      }
    }
    currentExoplanet.unlocked = true
    setGrats(true)
  }

  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if(currentExoplanet){
      const url_texture = new URL(`../../assets/textures/${currentExoplanet.url_asset_texture}`, import.meta.url).href
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Animación suave
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.rotateSpeed = 0.3;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Luz ambiental suave
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(3, 2, 1);
    scene.add(directionalLight);

    camera.position.z = 2.5;
    const loader = new THREE.TextureLoader();
    loader.load(url_texture, (earthTexture) => {
      const geometry = new THREE.SphereGeometry(1, 64, 64);

      const earthMaterial = new THREE.MeshStandardMaterial({
        map: earthTexture,
        roughness: 1,
        metalness: 0,
        emissive: new THREE.Color(0x000000),
        emissiveIntensity: 0,
      });

      const earthSphere = new THREE.Mesh(geometry, earthMaterial);
      scene.add(earthSphere);
      earthSphere.material.needsUpdate = true

      loader.load(cloudTexture, (cloudTexture) => {
        // const cloudGeometry = new THREE.SphereGeometry(1.02, 64, 64); // Ligeramente más grande que la Tierra
        // const cloudMaterial = new THREE.MeshStandardMaterial({
        //   map: cloudTexture,
        //   transparent: true, // Para que solo las nubes sean visibles
        //   opacity: 0.2, // Ajustar la opacidad de las nubes
        // });

        // const cloudSphere = new THREE.Mesh(cloudGeometry, cloudMaterial);
        // scene.add(cloudSphere);

        

        const animate = () => {
          requestAnimationFrame(animate);
          earthSphere.rotation.y += 0.0007; // Velocidad del planeta
          //cloudSphere.rotation.y += 0.001; // Velocidad de las nubes, más rápida
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
          //scene.remove(cloudSphere);
          controls.dispose();
          renderer.dispose();
          const canvas = renderer.domElement;
          if (canvas && mount.contains(canvas)) {
            mount.removeChild(canvas);
          }
        };
      });
    });
  }

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
                    {currentExoplanet ? currentExoplanet.name : "Unknown"}
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
          currentExoplanet && currentExoplanet.explored && currentExoplanet.icons.length > 0 ? currentExoplanet.icons.map((icon, index) => {
            return (
              <DDModal 
              key={index}
                position={positions[index]}>
                    <div className=''>
                        <ModalIcon
                            onClick={()=>selectIcon(index)}
                            darker={!icon.selected}
                            imagen={icon.icon}
                            title={icon.title}
                            texto={icon.description}
                        ></ModalIcon>
                    </div>
                </DDModal>
            )
          }) : <></>
        }
        { currentExoplanet && !currentExoplanet.explored ? 
        <DDModal 
        position={{ top: '50%', left: '80%' }}>
            <div className='rigth'>
                <div className="grid-container">
                    <div className="grid-item">Planet Size</div>
                    <div className="grid-item">Planet Mass</div>
                    <div className="grid-item">Temperature</div>
                    <div className="grid-item bottom-bordered">{currentExoplanet.unlocked? currentExoplanet.size : "Unknown"}</div>
                    <div className="grid-item bottom-bordered">{currentExoplanet.unlocked? currentExoplanet.mass : "Unknown"}</div>
                    <div className="grid-item bottom-bordered">{currentExoplanet.unlocked? currentExoplanet.temperature : "Unknown"}</div>
                </div>
                <div className="grid-container-velocity">
                    <div className="grid-item">Distance (light years)</div>
                    <div className="grid-item">Orbit Time</div>
                    <div className="grid-item bottom-bordered">{currentExoplanet.unlocked? currentExoplanet.distance_ligth_years : "Unknown"}</div>
                    <div className="grid-item bottom-bordered">{currentExoplanet.unlocked? currentExoplanet.orbit_time : "Unknown"}</div>
                </div>
            </div>
        </DDModal>
        :
        <DDModal
        position={{ top: '50%', left: '80%' }}>
          <div className='div-question'>
            <p className='select-text'>Select the most important characteristic of the exoplanet you have explored</p>
            <div>
              <DDButton onClick={()=>validateIcons()}>Accept</DDButton>
            </div>
          </div>
        </DDModal>
        }
        
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
                <DDButton href="/mapping" onClick={() => {}} className="btn-class">
                    Return to spaceship
                </DDButton>
                { currentExoplanet && currentExoplanet.ref && <DDButton href={""}>Info.</DDButton>}
                
                {/* <button onClick={nextExoplanet}>Next</button> */}
            </div>
        </DDModal>
        {currentExoplanet && currentExoplanet.unlocked && 
        <DDModal
        position={{ top: '10%', left: '80%' }}>
          <div className='lock'>
            Locked
          </div>
        </DDModal>
        }
        <DDModal
        position={{ top: '50%', left: '50%' }}>
          {error && <div className='modal-overlay'>
                <div className='error-card'>
                  There is an error in your description, explore and try it again
                </div>
            </div>}
        </DDModal>
        <DDModal
        position={{ top: '50%', left: '50%' }}>
          {grats && <div className='modal-overlay'>
                <div className='card-congrats'>
                  <p className='grats-text'>Congratulations, you have unlocked a new exoplanet!</p>
                  <div className='grats-options'>
                    <DDButton href="/mapping" onClick={()=>{}}>Return to spaceship</DDButton>
                    <DDButton onClick={()=>{setGrats(false)}}>Continue exploring</DDButton>
                  </div>
                </div>
            </div>}
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
