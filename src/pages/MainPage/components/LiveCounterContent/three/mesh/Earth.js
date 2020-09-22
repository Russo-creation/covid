import React, { useRef } from "react";
import * as THREE from "three";
import { useLoader, useFrame } from "react-three-fiber";
import { TextureLoader } from "three";

import AlbedoMap from "../textures/2_no_clouds_4k1.jpg";

import BumpMap from "../textures/elev_bump_4k.jpg";

import SpecularMap from "../textures/water_4k.png";

const EarthCreator = () => {
  const mapAlbedo = useLoader(TextureLoader, AlbedoMap);
  const mapBump = useLoader(TextureLoader, BumpMap);
  const mapSpecular = useLoader(TextureLoader, SpecularMap);

  const meshEarth = useRef();
  useFrame(() => (meshEarth.current.rotation.y += 0.0015));

  return (
    <mesh ref={meshEarth}>
      <sphereBufferGeometry
        attach="geometry"
        args={[180, 44, 44]}
        position={[0, 0, 0]}
      />

      <meshPhongMaterial
        attach="material"
        map={mapAlbedo}
        bumpMap={mapBump}
        bumpScale={1}
        specularMap={mapSpecular}
        specular={new THREE.Color("grey")}
        shininess={10}
      />
    </mesh>
  );
};

export default EarthCreator;
