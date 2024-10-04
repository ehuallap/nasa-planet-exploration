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
import cloudTexture from '../../assets/textures/cloud-centauri-b.jpg';

const Mapping = () => {

    const mountRef1 = useRef<HTMLDivElement | null>(null);
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    const mountRef2 = useRef<HTMLDivElement | null>(null);

    const onMouseClick = (mountRef: any, renderer: any, camera: any, scene: any, num: Number) => (event: MouseEvent) => {
        if (!mountRef.current) return;

        console.log("Mouse click position:", event.clientX, event.clientY);
        const bounds = mountRef.current.getBoundingClientRect();
        const mouseX = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
        const mouseY = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
        mouse.set(mouseX, mouseY)
        console.log("Normalized mouse position:", mouse.x, mouse.y)

        // Raycast from the camera to the mouse position

        raycaster.setFromCamera(mouse, camera);
        // Check for intersections with objects in the scene
        const intersects = raycaster.intersectObjects(scene.children);
        console.log("Intersected objects:", intersects);

        if (intersects.length > 0) {
            const object = intersects[0].object;
            console.log("Object clicked:", object);
            alert(`Object clicked ${num}`);
        }
    };


    useEffect(() => {
        const mount1 = mountRef1.current;
        const scene1 = new THREE.Scene();

        const renderer1 = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer1.setSize(200, 200); 
        mount1!.appendChild(renderer1.domElement);

        const camera1 = new THREE.PerspectiveCamera(75, renderer1.domElement.clientWidth / renderer1.domElement.clientHeight, 0.1, 1000)
        camera1.position.z = 10;
        camera1.updateProjectionMatrix()

        const onMouseClick1 = onMouseClick(mountRef1,renderer1, camera1, scene1, 1)

        const mount2 = mountRef2.current;
        const scene2 = new THREE.Scene();

        const renderer2 = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer2.setSize(200, 200); 
        mount2!.appendChild(renderer2.domElement);

        const camera2 = new THREE.PerspectiveCamera(75, renderer2.domElement.clientWidth / renderer2.domElement.clientHeight, 0.1, 1000)
        camera2.position.z = 10;
        camera2.updateProjectionMatrix()

        const onMouseClick2 = onMouseClick(mountRef2, renderer2, camera2, scene2, 2)

        
        const my_func = (mountRef: any, mount: any, scene: any, renderer: any, camera: any, funcClick: any) => {
            // Añadir luz ambiental
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Luz ambiental suave
            scene.add(ambientLight);
    
            // Añadir luz direccional desde un costado (fijo) con mayor intensidad
            const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Intensidad de la luz aumentada
            directionalLight.position.set(3, 2, 1); // Luz fija desde un solo lado
            scene.add(directionalLight);
    
            const loader = new THREE.TextureLoader();
            if (mountRef.current) {
                mountRef.current.addEventListener('click', funcClick);
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
                        renderer.dispose();
                        const canvas = renderer.domElement;
                        if (canvas && mount!.contains(canvas)) {
                            mount!.removeChild(canvas);
                        }
                    };
                });
            });
        }

        my_func(mountRef1, mountRef1.current, scene1, renderer1, camera1, onMouseClick1);
        my_func(mountRef2, mountRef2.current, scene2, renderer2, camera2, onMouseClick2);

        return () => {
            if (mountRef1.current) {
                mountRef1.current.removeEventListener('click', onMouseClick1);
                mountRef1.current.removeChild(renderer1.domElement);
            }

            if (mountRef2.current) {
                mountRef2.current.removeEventListener('click', onMouseClick2);
                mountRef2.current.removeChild(renderer2.domElement);
            }

            renderer1.dispose();
            renderer2.dispose();
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
                ref={mountRef1}
                style={{ 
                    position: 'absolute',
                    top: '50px',
                    left: '350px', 
                    zIndex: 2,
                    pointerEvents: 'auto' }} />
            <div
                ref={mountRef2}
                style={{ 
                    position: 'absolute',
                    top: '300px',
                    left: '700px', 
                    zIndex: 2,
                    pointerEvents: 'auto' }} />
        </div>
    );
}
 
export default Mapping;