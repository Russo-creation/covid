import React from "react";
import * as THREE from "three";

const AtmosphereCreator = () => {
  return (
    <mesh>
      <sphereBufferGeometry
        attach="geometry"
        args={[200, 32, 20]}
        position={[0, 25, 0]}
      />

      <shaderMaterial
        attach="material"
        vertexShader={document.getElementById("vertexShader2").textContent}
        fragmentShader={document.getElementById("fragmentShader2").textContent}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
        transparent={true}
      />
    </mesh>
  );
};

export default AtmosphereCreator;
