import React from 'react';
import { AbsoluteFill, Series } from 'remotion';
import { Scene3D } from './Scene3D';
import storyData from './storyData.json';

export const Video: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ backgroundColor: '#000' }}
      from={76}
      durationInFrames={194}
      trimBefore={76}
    >
      <Series>
        {storyData.scenes.map((scene) => (
          <Series.Sequence key={scene.id} durationInFrames={scene.duration}>
            <Scene3D
              bgColor={scene.bgColor}
              lightColor={scene.lightColor}
              objectType={scene.objectType}
              objectColor={scene.objectColor}
              cameraZ={scene.cameraZ}
              rotationSpeed={scene.rotationSpeed}
            />
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
};
