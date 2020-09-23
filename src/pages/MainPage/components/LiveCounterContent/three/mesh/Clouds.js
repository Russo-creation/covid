import React, { useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { TextureLoader } from "three";

import AlbedoMapClouds from "../textures/fair_clouds_4k.png";

const CloudsCreator = () => {
  const meshClouds = useRef();
  const mapAlbedoClouds = useLoader(TextureLoader, AlbedoMapClouds);
  useFrame(() => (meshClouds.current.rotation.y += 0.002));

  return (
    <mesh ref={meshClouds} position={[0, 0, 0]}>
      <sphereBufferGeometry attach="geometry" args={[181.003, 44, 44]} />
      <meshPhongMaterial
        attach="material"
        map={mapAlbedoClouds}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  );
};

export default CloudsCreator;
