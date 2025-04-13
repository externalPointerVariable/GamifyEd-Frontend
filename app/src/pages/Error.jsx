import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Search, ArrowLeft, Home } from "lucide-react";

function NotFoundParticles() {
  const particlesCount = 200;
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);

  const palette = [
    { r: 0.5, g: 0.4, b: 1 },
    { r: 0.7, g: 0.3, b: 0.9 },
    { r: 0.9, g: 0.3, b: 0.8 },
  ];

  for (let i = 0; i < particlesCount * 3; i += 3) {
    const radius = 5 + Math.random() * 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;

    positions[i] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = radius * Math.cos(phi);

    const color = palette[Math.floor(Math.random() * palette.length)];
    colors[i] = color.r + (Math.random() * 0.2 - 0.1);
    colors[i + 1] = color.g + (Math.random() * 0.2 - 0.1);
    colors[i + 2] = color.b + (Math.random() * 0.2 - 0.1);
  }

  const particlesRef = useRef(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.1;
      const scale = 1 + Math.sin(t * 0.5) * 0.05;
      particlesRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <>
      <ambientLight color={0x6366f1} intensity={0.3} />
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particlesCount}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          vertexColors
          transparent
          opacity={0.8}
          depthWrite={false}
        />
      </points>
    </>
  );
}

export default function Error() {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 15) % 360);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 bg-[#0f0f1c] text-white">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <NotFoundParticles />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <Search
              size={80}
              className="text-purple-400 animate-pulse"
              style={{ transform: `rotate(${rotation}deg)` }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">404</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500">
          Quest Not Found
        </h1>

        <p className="text-lg mb-8 text-gray-400">
          The educational adventure you're looking for seems to be in another
          castle.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 border border-gray-600 text-sm rounded-md hover:bg-gray-800 flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 text-white text-sm rounded-md bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center gap-2"
          >
            <Home size={16} />
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
}
