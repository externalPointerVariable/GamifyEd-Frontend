import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

function BackgroundParticles({ isDark }) {
  const particlesRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  const primaryColors = isDark
    ? [
        { r: 0.4, g: 0.4, b: 0.9 },
        { r: 0.6, g: 0.3, b: 0.9 },
        { r: 0.8, g: 0.3, b: 0.8 },
      ]
    : [
        { r: 0.3, g: 0.3, b: 0.8 },
        { r: 0.5, g: 0.2, b: 0.8 },
        { r: 0.7, g: 0.2, b: 0.7 },
      ];

  const particlesCount = 2500;
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i += 3) {
    if (i < particlesCount * 3 * 0.7) {
      const radius = 5 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    } else {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }

    const colorIndex = Math.floor(Math.random() * primaryColors.length);
    const color = primaryColors[colorIndex];

    colors[i] = color.r + (Math.random() * 0.2 - 0.1);
    colors[i + 1] = color.g + (Math.random() * 0.2 - 0.1);
    colors[i + 2] = color.b + (Math.random() * 0.2 - 0.1);
  }

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseRef.current = {
        x: (event.clientX / size.width) * 2 - 1,
        y: -(event.clientY / size.height) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size]);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      const time = clock.getElapsedTime();

      particlesRef.current.rotation.x += 0.0003;
      particlesRef.current.rotation.y += 0.0005;

      particlesRef.current.rotation.x += mouseRef.current.y * 0.0005;
      particlesRef.current.rotation.y += mouseRef.current.x * 0.0005;

      const pos = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < pos.length; i += 3) {
        pos[i + 2] = pos[i + 2] + Math.sin(pos[i] * 0.05 + time) * 0.05;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <ambientLight color={isDark ? 0x6366f1 : 0x4f46e5} intensity={0.2} />
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particlesCount} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={particlesCount} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          size={isDark ? 0.05 : 0.04}
          vertexColors
          transparent
          opacity={isDark ? 0.8 : 0.6}
          depthWrite={false}
        />
      </points>
    </>
  );
}

export default function ThreeBackground() {
  const theme = useSelector((state) => state.theme); // directly read from Redux
  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <BackgroundParticles isDark={isDark} />
      </Canvas>
    </div>
  );
}
