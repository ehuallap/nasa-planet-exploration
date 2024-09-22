import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './App.css';
import earthTextureURL from './assets/earth_texture.jpg';

function App() {
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

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.01; // Optional: Rotate the sphere for a simple animation
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

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh', overflow: 'hidden' }} />;
}

export default App;
