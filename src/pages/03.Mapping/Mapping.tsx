import DDButton from '../../components/DDButton';
import useMisionStore from '../../store/store';
import './Mapping.css'
import * as THREE from 'three';

import Background from '../../assets/astronauta-vista-espacio.png'
import CentauriA from '../../assets/exoplanets/centauri-a.jpg'
import CentauriB from '../../assets/exoplanets/centauri-b.png'
import CentauriC from '../../assets/exoplanets/centauri-c.png'
import CentauriD from '../../assets/exoplanets/centauri-d.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import earthTextureURL from '../../assets/textures/centauri-b-2.png'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import cloudTexture from '../../assets/textures/cloud-centauri-b.jpg';

const Mapping = () => {

    const mountRef = useRef<HTMLDivElement | null>(null);
    const requestRef = useRef<number | null>(null);
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();

        const aspect = mountRef.current ? mountRef.current.clientWidth / mountRef.current.clientHeight : 1;
        const frustumSize = 5;

        const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000)
        camera.position.z = 10;
        camera.updateProjectionMatrix()

        const onMouseClick = (event: MouseEvent) => {
            if (!mountRef.current) return;
    
            const { left, top, width, height } = mountRef.current.getBoundingClientRect();
            console.log("Mouse click position:", event.clientX, event.clientY);
            // Convert mouse position to normalized device coordinates (-1 to 1)
            mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
            mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

            console.log("Normalized mouse position:", mouse.x, mouse.y)

            // Raycast from the camera to the mouse position

            raycaster.setFromCamera(mouse, camera);
            // Check for intersections with objects in the scene
            const intersects = raycaster.intersectObjects(scene.children);
            console.log("Intersected objects:", intersects);

            if (intersects.length > 0) {
                const object = intersects[0].object;
                console.log("Object clicked:", object);
                alert("Object clicked");
            }
        };


        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(1200, 600); 
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
        const loader2 = new THREE.TextureLoader();
        if (mountRef.current) {
            mountRef.current.addEventListener('click', onMouseClick);
        }
        // Cargar textura de la Tierra
        loader.load(earthTextureURL, (earthTexture) => {
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
  
  
        loader2.load(earthTextureURL, (earthTexture) => {
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
            earthSphere.position.x = 3.5
            scene.add(earthSphere);
  
            // Cargar la textura de nubes
            loader2.load(cloudTexture, (cloudTexture) => {
                const cloudGeometry = new THREE.SphereGeometry(1.02, 64, 64); // Ligeramente más grande que la Tierra
                const cloudMaterial = new THREE.MeshStandardMaterial({
                    map: cloudTexture,
                    transparent: true, // Para que solo las nubes sean visibles
                    opacity: 0.2, // Ajustar la opacidad de las nubes
                });
  
                // Esfera para las nubes
                const cloudSphere = new THREE.Mesh(cloudGeometry, cloudMaterial);
                cloudSphere.position.x = 3.5
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

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
            if (mountRef.current) {
                mountRef.current.removeEventListener('click', onMouseClick);
                mountRef.current.removeChild(renderer.domElement);
            }



            renderer.dispose();
        };
    }, []);


    const { planetarySystem, currentExoplanet, setCurrentExoplanet } = useMisionStore();

    const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

    const navigate = useNavigate();
    const changeExoplanet = ( option : Number) => {
        console.log("anuevo exoplanet : " + option)
        setCurrentExoplanet(option);
        setTimeout(() => navigate("/planet-information"), 800);
    }

    return (
        <div className='container-mapping'>

            <img
                src={Background}
                alt="Background"
                className="background-image"
            />
            <img
                src={CentauriB}
                alt="Clickable Image 1"
                className="clickable-image"
                style={{ top: '50%', left: '50%', width: '8%', height: '16%', zIndex: 2  }}
                onClick={() => changeExoplanet(0)}
            />
            <img
                src={CentauriC}
                alt="Clickable Image 2"
                className="clickable-image"
                style={{ top: '50%', left: '5%', width: '40%', height: '40%', zIndex: 2 }}
                onClick={() => changeExoplanet(1)}
            />
            <img
                src={CentauriD}
                alt="Clickable Image 2"
                className="clickable-image"
                style={{ top: '20%', left: '25%', width: '6%', height: '12%', zIndex: 2 }}
                onClick={() => changeExoplanet(2)}
            />
            <img
                src={CentauriA}
                alt="Clickable Image 2"
                className="clickable-image"
                style={{ top: '0%', left: '-20%', width: '100%', height: '100%', zIndex: 0 }}
            />
            <div
                ref={mountRef}
                style={{ 
                    position: 'absolute',
                    width: '400px',
                    top: '50px',
                    left: '50px', 
                    height: '200px', 
                    zIndex: 2,
                    pointerEvents: 'auto' }} />
        </div>
    );
}
 
export default Mapping;