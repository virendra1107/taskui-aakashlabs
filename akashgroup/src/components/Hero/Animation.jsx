import { useRef, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import Text from './Text';

const Animation = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { mouse } = useThree();

  useFrame(() => {
    if (hovered && meshRef.current) {
      meshRef.current.rotation.y = mouse.x * Math.PI * 0.1;
      meshRef.current.rotation.x = -mouse.y * Math.PI * 0.1;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <planeGeometry args={[5, 5.7]} />
      <meshStandardMaterial transparent opacity={0} />
      <Html center position={[0, 0, 0.01]} transform scale={0.4} className='z-10'>
        <Text />
      </Html>
    </mesh>
  );
};

export default Animation;
