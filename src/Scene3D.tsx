import React from 'react';
import { ThreeCanvas } from '@remotion/three';
import { useCurrentFrame, interpolate } from 'remotion';

export interface SceneProps {
  bgColor: string;
  lightColor: string;
  objectType: string;
  objectColor: string;
  cameraZ: number;
  rotationSpeed: number;
}

export const Scene3D: React.FC<SceneProps> = ({
  bgColor,
  lightColor,
  objectType,
  objectColor,
  cameraZ,
  rotationSpeed,
}) => {
  const frame = useCurrentFrame();
  
  // सिनेमैटिक कैमरा ज़ूम-इन इफेक्ट
  const dynamicZ = interpolate(frame, [0, 90], [cameraZ + 1.5, cameraZ], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{ flex: 1, backgroundColor: bgColor }}>
      <ThreeCanvas width={1080} height={1920} camera={{ position: [0, 0, dynamicZ] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2.5} color={lightColor} />
        <pointLight position={[-5, -5, 2]} intensity={1} color="#ffffff" />

        <mesh rotation={[frame * rotationSpeed, frame * (rotationSpeed * 1.2), 0]}>
          {objectType === 'box' && <boxGeometry args={[1.8, 1.8, 1.8]} />}
          {objectType === 'sphere' && <sphereGeometry args={[1.3, 32, 32]} />}
          {objectType === 'torus' && <torusGeometry args={[1.1, 0.4, 16, 100]} />}
          <meshStandardMaterial color={objectColor} roughness={0.25} metalness={0.6} />
        </mesh>
      </ThreeCanvas>
    </div>
  );
};
