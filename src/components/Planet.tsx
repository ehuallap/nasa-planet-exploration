import { useEffect, useRef } from "react";
import * as THREE from 'three';

import cloudTexture from '../assets/textures/cloud-centauri-b.jpg';

import './Planet.css'

interface PlanetProps {
    top: string;
    left: string;
    size: number;
    earthTextureURL: any;
  }

const Planet: React.FC<PlanetProps> = ({ top, left, size, earthTextureURL }) => {


    const mountRef = useRef<HTMLDivElement | null>(null);
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let hoveredObject: THREE.Object3D | null = null;

    const onMouseClick = (mountRef: any, renderer: any, camera: any, scene: any) => (event: MouseEvent) => {
        if (!mountRef.current) return;

        const bounds = mountRef.current.getBoundingClientRect();
        const mouseX = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
        const mouseY = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
        mouse.set(mouseX, mouseY);
        console.log("Normalized mouse position:", mouse.x, mouse.y);

        raycaster.setFromCamera(mouse, camera);
        // Check for intersections with objects in the scene
        const intersects = raycaster.intersectObjects(scene.children);
        console.log("Intersected objects:", intersects);

        if (intersects.length > 0) {
            const object = intersects[0].object;
            console.log("Object clicked:", object);
            alert(`Object clicked`);
        }
    }

    const onMouseMove = (renderer: any, camera: any, scene: any) => (event: MouseEvent) => {
        if (!mountRef.current) return;

        const bounds = mountRef.current.getBoundingClientRect();
        const mouseX = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
        const mouseY = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
        mouse.set(mouseX, mouseY);

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
        const object = intersects[0].object;


        if (object !== hoveredObject) {
            if (hoveredObject) {
              // Reset the material of the previously hovered object (reduce emissive)
              const mesh = hoveredObject as THREE.Mesh;
              const material = mesh.material as THREE.MeshStandardMaterial;
              material.emissiveIntensity = 0; // Darker when not hovered
            }
    
            // Set new hovered object
            hoveredObject = object;
            const mesh = hoveredObject as THREE.Mesh;
            const material = mesh.material as THREE.MeshStandardMaterial;
            material.emissive = new THREE.Color(0xffffff); // White light when hovered
            material.emissiveIntensity = 0.5; // Brighten up when hovered
        }
    } else {
        if (hoveredObject) {
          // Reset the material when the mouse is no longer hovering over an object
          const mesh = hoveredObject as THREE.Mesh;
          const material = mesh.material as THREE.MeshStandardMaterial;
          material.emissiveIntensity = 0; // Reset emissive intensity
          hoveredObject = null;
        }
      }
    }

    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(size, size); 
        mount!.appendChild(renderer.domElement);

        const camera = new THREE.PerspectiveCamera(50, renderer.domElement.clientWidth / renderer.domElement.clientHeight, 0.1, 1000)
        camera.position.set(0,0,20);
        

        const onMouseClick1 = onMouseClick(mountRef,renderer, camera, scene)
    
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Luz ambiental suave
        scene.add(ambientLight);

        // Añadir luz direccional desde un costado (fijo) con mayor intensidad
        const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Intensidad de la luz aumentada
        directionalLight.position.set(3, 2, 1); // Luz fija desde un solo lado
        scene.add(directionalLight);

        const loader = new THREE.TextureLoader();
        if (mountRef.current) {
            mountRef.current.addEventListener('click', onMouseClick1);
        }

        const onMouseMoveHandler= onMouseMove(renderer, camera, scene)
        mount!.addEventListener('mousemove', onMouseMoveHandler)
        // Cargar textura de la Tierra
        loader.load(earthTextureURL, (earthTexture) => {
            const geometry = new THREE.SphereGeometry(1, 64, 64);
            // Material para el planeta
            const earthMaterial = new THREE.MeshStandardMaterial({
                map: earthTexture,
                roughness: 1,
                metalness: 1,
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

        return () => {
            if (mountRef.current) {
                mountRef.current.removeEventListener('click', onMouseClick1);
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
        
    }, []);

    return (
        <div
            ref={mountRef}
            className="planet-class"
            style={{
                position: 'absolute',
                top: top,
                left: left, 
                zIndex: 2,
                pointerEvents: 'auto' }} />

    );
}
 
export default Planet;


