import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './PlanetInformation.css';
import earthTextureURL from '../../assets/textures/centauri-b-2.png';
import DDModal from '../../components/DDModal';
import ModalIcon from './ModalIcon';
import Gota from '../../assets/gota.png';
import { Link } from 'react-router-dom';
import useMisionStore from '../../store/store';
import DDButton from '../../components/DDButton';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import cloudTexture from '../../assets/textures/cloud-centauri-b.jpg'; // Importar la textura de nubes
function PlanetInformation() {
    const mountRef = useRef(null);
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
    }, []);
    const { currentExoplanet, indexExoplanet, nextCurrentExoplanet } = useMisionStore();
    const nextExoplanet = () => {
        console.log("index ", indexExoplanet);
        nextCurrentExoplanet();
        console.log("index ", indexExoplanet);
    };
    return (_jsxs("div", { children: [_jsx("div", { ref: mountRef, style: { width: '100vw', height: '100vh', overflow: 'hidden' } }), _jsx(DDModal, { position: { top: '15%', left: '20%' }, children: _jsxs("div", { className: 'header-title', children: [_jsx("div", { className: 'title', children: currentExoplanet.name }), _jsx("div", { className: 'sub-title', children: "A Neptune-like giant planet" })] }) }), _jsx(DDModal, { position: { top: '50%', left: '20%' }, children: _jsxs("div", { className: '', children: [_jsx("p", { className: 'sub-title-2', children: "Additional Information" }), _jsxs("div", { className: 'card', children: [_jsxs("p", { className: 'white', children: [_jsx("span", { children: "Year of Discovery: " }), currentExoplanet.year] }), _jsxs("p", { className: 'white', children: [_jsx("span", { children: "Planet Type: " }), currentExoplanet.type] }), _jsx("p", { className: 'white', children: "Kepler-651 b es un exoplaneta similar a Neptuno que orbita una estrella de tipo G. Tiene una masa de 6,21 Tierras, tarda 21,4 d\u00EDas en completar una \u00F3rbita alrededor de su estrella y se encuentra a 0,1409 UA de su estrella. Su descubrimiento se anunci\u00F3 en 2016." })] })] }) }), _jsx(DDModal, { position: { top: '45%', left: '45%' }, children: _jsx("div", { className: '', children: _jsx(ModalIcon, { imagen: Gota, title: "Agua fluvial", texto: "Se han detectado intensas tormentas el\u00E9ctricas en un exoplaneta distante, con rayos iluminando su atm\u00F3sfera oscura." }) }) }), _jsx(DDModal, { position: { top: '50%', left: '80%' }, children: _jsxs("div", { className: 'rigth', children: [_jsxs("div", { className: "grid-container", children: [_jsx("div", { className: "grid-item", children: "Planet Size" }), _jsx("div", { className: "grid-item", children: "Planet Mass" }), _jsx("div", { className: "grid-item", children: "Temperature" }), _jsx("div", { className: "grid-item bottom-bordered", children: currentExoplanet.size }), _jsx("div", { className: "grid-item bottom-bordered", children: currentExoplanet.mass }), _jsx("div", { className: "grid-item bottom-bordered", children: currentExoplanet.temperature })] }), _jsxs("div", { className: "grid-container-velocity", children: [_jsx("div", { className: "grid-item", children: "Distance (light years)" }), _jsx("div", { className: "grid-item", children: "Orbit Time" }), _jsx("div", { className: "grid-item bottom-bordered", children: currentExoplanet.distance_ligth_years }), _jsx("div", { className: "grid-item bottom-bordered", children: currentExoplanet.orbit_time })] })] }) }), _jsx(DDModal, { position: { top: '80%', left: '50%' }, children: _jsx("div", { className: '', children: _jsx(Link, { to: "/video", style: { textDecoration: 'none' }, children: _jsx("button", { children: "VISITAR EXOPLANETA" }) }) }) }), _jsx(DDModal, { position: { top: '90%', left: '50%' }, children: _jsxs("div", { className: 'bottom-buttons', children: [_jsx(DDButton, { href: "/mapping", onClick: () => { }, className: "btn-class", children: "Return to spaceship" }), _jsx("button", { onClick: nextExoplanet, children: "Next" })] }) })] }));
}
export default PlanetInformation;
