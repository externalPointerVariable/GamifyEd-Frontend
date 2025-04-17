import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function TrophyModel({ color = "#FFD700", isDark = false }) {
  const baseMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    metalness: isDark ? 0.8 : 0.7,
    roughness: isDark ? 0.2 : 0.3,
    emissive: isDark ? new THREE.Color(color).multiplyScalar(0.1) : new THREE.Color(0x000000),
  });

  const sharedMaterial = baseMaterial;

  const groupRef = useRef(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, -2, 0]} material={sharedMaterial}>
        <cylinderGeometry args={[1, 1.2, 0.5, 32]} />
      </mesh>
      <mesh position={[0, -0.75, 0]} material={sharedMaterial}>
        <cylinderGeometry args={[0.2, 0.2, 2, 32]} />
      </mesh>
      <mesh position={[0, 0.5, 0]} material={sharedMaterial}>
        <cylinderGeometry args={[0.8, 0.5, 1.5, 32]} />
      </mesh>
      <mesh
        position={[-0.8, 0.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        material={sharedMaterial}
      >
        <torusGeometry args={[0.3, 0.08, 16, 32, Math.PI]} />
      </mesh>
      <mesh
        position={[0.8, 0.5, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        material={sharedMaterial}
      >
        <torusGeometry args={[0.3, 0.08, 16, 32, Math.PI]} />
      </mesh>
    </group>
  );
}

// Scene Component
function Scene({ color, isDark }) {
  const orbitControlsRef = useRef(null);

  useEffect(() => {
    const controls = orbitControlsRef.current;
    if (controls) {
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.dampingFactor = 0.05;
    }
  }, []);

  return (
    <>
      <ambientLight intensity={isDark ? 0.3 : 0.5} />
      <directionalLight position={[5, 5, 5]} intensity={isDark ? 1.2 : 1} />
      {isDark && (
        <directionalLight position={[-5, 0, -5]} intensity={0.5} color="#6495ed" />
      )}
      <TrophyModel color={color} isDark={isDark} />
    </>
  );
}

// Detect dark mode based on TailwindCSS `dark` class
function useTailwindDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
}

export default function Trophies({ size = 150, color = "#FFD700", className = "" }) {
  const isDark = useTailwindDarkMode();

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-label="3D Trophy"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        onCreated={({ gl }) => {
          gl.setClearColor(isDark ? 0x2c3e50 : 0xffffff);
        }}
      >
        <Scene color={color} isDark={isDark} />
      </Canvas>
    </div>
  );
}
