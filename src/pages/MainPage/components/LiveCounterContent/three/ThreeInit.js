import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Lights from "./lights/Lights";

import MeshLoader from "./mesh/MeshCreator";

import Effects from "./effects/Effects.js";

import { ReactReduxContext, Provider } from "react-redux";
import { Html } from "drei";

import LoadingIndicator from "../../../../../components/LoadingIndicator";

import Curve from "./Curve";

const curveMoving = (curveGeometry, speed, direction) => {
  //checking what position in curve expected
  var time = Date.now();
  var looptime = speed * 1000;
  var t = (time % looptime) / looptime;

  //invert direction if needed
  if (!direction) {
    t = 1 - t;
  }

  //getting exact position at cuve in time
  var pos = curveGeometry.parameters.path.getPointAt(t);

  //making small transition to displaying
  pos.x += -350; //left right
  pos.y += 0; //top bottom
  pos.z += 1250; //forweward backword
  pos.multiplyScalar(0.5);

  //retrunging calculated position
  return pos;
};

extend({ OrbitControls });

const Controls = (props) => {
  const curveGeometry = new THREE.TubeBufferGeometry(Curve(), 100, 1, 1, true);

  useFrame(({ clock, camera }) =>
    camera.updateProjectionMatrix(
      void camera.position.copy(curveMoving(curveGeometry, 150, true))
    )
  );
  return null;
};

function LoadingBox() {
  return (
    <mesh position={[200, 0, 200]}>
      <dodecahedronBufferGeometry attach="geometry" />
      <meshStandardMaterial
        attach="material"
        roughness={0.75}
        emissive="#404057"
      />
      <Html scaleFactor={10}>
        <div className="content">Loading Please Wait</div>
      </Html>
    </mesh>
  );
}

const ThreeInit = ({ markerClickHandler, continetalDeathData }) => {
  const sun = useRef();

  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Canvas
          style={{
            height: "100%",
            width: "100%",
            overflow: "hidden",
            outline: "none",
            border: "none",
          }}
          concurrent
          pixelRatio={window.devicePixelRatio}
          camera={{
            position: [0, 0, 1200],
            near: 1,
            far: 10000,
            fov: 27,
          }}
          gl={{ antialias: false }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.outputEncoding = THREE.sRGBEncoding;
            gl.toneMappingExposure = 0.7;
          }}
        >
          <Provider store={store}>
            <Controls
              enableDamping
              enableZoom={true}
              enablePan={true}
              dampingFactor={0.05}
              rotateSpeed={1.1}
            />

            <mesh ref={sun} position={[-250, 0, -300]}>
              <sphereBufferGeometry attach="geometry" args={[100, 32, 32]} />
              <meshBasicMaterial
                attach="material"
                color="#ffd36a"
                transparent={true}
                fog={false}
              />
            </mesh>

            <Suspense fallback={<LoadingBox />}>
              <group position={[-400, 0, 0]}>
                <Lights />
                <MeshLoader
                  markerClickHandler={markerClickHandler}
                  continetalDeathData={continetalDeathData}
                />
                <Effects sun={sun} />
              </group>
            </Suspense>
          </Provider>
        </Canvas>
      )}
    </ReactReduxContext.Consumer>
  );
};

export default ThreeInit;
