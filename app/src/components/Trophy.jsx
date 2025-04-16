import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import * as THREE from "three";

// Trophy Model Component
function TrophyModel({ color = "#FFD700", isDark = false }) {
  // Materials with theme-based properties
  const baseMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    metalness: isDark ? 0.8 : 0.7,
    roughness: isDark ? 0.2 : 0.3,
    emissive: isDark ? new THREE.Color(color).multiplyScalar(0.1) : new THREE.Color(0x000000),
  });

  const stemMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    metalness: isDark ? 0.8 : 0.7,
    roughness: isDark ? 0.2 : 0.3,
    emissive: isDark ? new THREE.Color(color).multiplyScalar(0.1) : new THREE.Color(0x000000),
  });

  const cupMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    metalness: isDark ? 0.8 : 0.7,
    roughness: isDark ? 0.2 : 0.3,
    emissive: isDark ? new THREE.Color(color).multiplyScalar(0.1) : new THREE.Color(0x000000),
  });

  const handleMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    metalness: isDark ? 0.8 : 0.7,
    roughness: isDark ? 0.2 : 0.3,
    emissive: isDark ? new THREE.Color(color).multiplyScalar(0.1) : new THREE.Color(0x000000),
  });

  // Group ref for rotation
  const groupRef = useRef<THREE.Group>(null);

  // Slow rotation animation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base */}
      <mesh position={[0, -2, 0]} material={baseMaterial}>
        <cylinderGeometry args={[1, 1.2, 0.5, 32]} />
      </mesh>

      {/* Stem */}
      <mesh position={[0, -0.75, 0]} material={stemMaterial}>
        <cylinderGeometry args={[0.2, 0.2, 2, 32]} />
      </mesh>

      {/* Cup */}
      <mesh position={[0, 0.5, 0]} material={cupMaterial}>
        <cylinderGeometry args={[0.8, 0.5, 1.5, 32]} />
      </mesh>

      {/* Left Handle */}
      <mesh
        position={[-0.8, 0.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        material={handleMaterial}
      >
        <torusGeometry args={[0.3, 0.08, 16, 32, Math.PI]} />
      </mesh>

      {/* Right Handle */}
      <mesh
        position={[0.8, 0.5, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        material={handleMaterial}
      >
        <torusGeometry args={[0.3, 0.08, 16, 32, Math.PI]} />
      </mesh>
    </group>
  );
}

// Scene Component with Lights and Controls
function Scene({ color, isDark }) {
  const orbitControlsRef = useRef<any>(null);

  // Add camera controls manually (replacement for OrbitControls)
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
      {/* Lights */}
      <ambientLight intensity={isDark ? 0.3 : 0.5} />
      <directionalLight position={[5, 5, 5]} intensity={isDark ? 1.2 : 1} />
      {isDark && (
        <directionalLight position={[-5, 0, -5]} intensity={0.5} color="#6495ed" />
      )}

      {/* Trophy Model */}
      <TrophyModel color={color} isDark={isDark} />
    </>
  );
}

export default function ThreeTrophy({
  size = 150,
  color = "#FFD700",
  className = "",
}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-label="3D Trophy"
    >
      {mounted && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          onCreated={({ gl }) => {
            gl.setClearColor(isDark ? 0x2c3e50 : 0xffffff); // Set background color based on theme
          }}
        >
          <Scene color={color} isDark={isDark} />
        </Canvas>
      )}
    </div>
  );
}
