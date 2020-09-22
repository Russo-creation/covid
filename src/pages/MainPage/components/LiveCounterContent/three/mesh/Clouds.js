import React, { useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { TextureLoader } from "three";

import AlbedoMapClouds from "../textures/fair_clouds_4k.png";

const CloudsCreator = () => {
  const meshClouds = useRef();
  const mapAlbedoClouds = useLoader(TextureLoader, AlbedoMapClouds);
  useFrame(() => (meshClouds.current.rotation.y += 0.002));

  return (
    <mesh ref={meshClouds}>
      <sphereBufferGeometry
        attach="geometry"
        args={[182.003, 44, 44]}
        position={[0, 0, 0]}
      />
      <meshPhongMaterial
        attach="material"
        map={mapAlbedoClouds}
        transparent={true}
      />
    </mesh>
  );
};

export default CloudsCreator;
