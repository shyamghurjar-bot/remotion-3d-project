import React from 'react';
import { Composition } from 'remotion';
import { Video } from './Video';
import storyData from './storyData.json';

export const Root: React.FC = () => {
  const totalDuration = storyData.scenes.reduce((acc, scene) => acc + scene.duration, 0);

  return (
    <Composition
      id="My3DVideo"
      component={Video}
      durationInFrames={totalDuration}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
