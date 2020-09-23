import React, { useRef, useState } from "react";

import { useFrame } from "react-three-fiber";

const Marker = () => {
  var radius = 5;
  var sphereRadius = 2;
  var height = 1;

  return (
    <>
      <mesh position={[0, height * 0.5, 0]} rotation={[Math.PI, 0, 0]}>
        <coneBufferGeometry
          attach="geometry"
          args={[radius, height, 8, 1, true]}
        />
        <meshLambertMaterial
          attach="material"
          emissive="#cb0007"
          color="#cb0007"
        />
      </mesh>
      <mesh position={[0, height * 0.95 + sphereRadius, 0]}>
        <sphereBufferGeometry attach="geometry" args={[sphereRadius, 16, 8]} />
        <meshLambertMaterial
          attach="material"
          emissive="#cb0007"
          color="#cb0007"
        />
      </mesh>
    </>
  );
};

const CreateMarker = ({ lat, lon, id, markerClickHandler, deaths }) => {
  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);

  var latRad = lat * (Math.PI / 180);
  var lonRad = -lon * (Math.PI / 180);

  var r = 180;

  const ClickHandle = (id) => {
    markerClickHandler(id);
    setActive(!active);
  };

  let cylinderRadius = 0.0001 * deaths;

  if (cylinderRadius < 2) {
    cylinderRadius = 2;
  }

  let cylinderHeight = 0.001 * deaths;

  if (cylinderHeight < 5) {
    cylinderHeight = 5;
  }

  return (
    <group
      position={[
        Math.cos(latRad) * Math.cos(lonRad) * r,
        Math.sin(latRad) * r,
        Math.cos(latRad) * Math.sin(lonRad) * r,
      ]}
      rotation={[0.0, -lonRad, latRad - Math.PI * 0.5]}
    >
      {/*  <Marker /> */}

      <mesh
        onClick={(e) => ClickHandle(id)}
        scale={hovered ? [1.5, 1, 1.5] : [1, 1, 1]}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <cylinderBufferGeometry
          attach="geometry"
          args={[cylinderRadius, cylinderRadius, cylinderHeight, 16]}
        />

        <meshLambertMaterial
          attach="material"
          emissive={hovered ? "#1b0000" : "#860005"}
          color={hovered ? "#1b0000" : "#860005"}
        />
      </mesh>
    </group>
  );
};

const MakeMarker = ({ markerClickHandler, continetalDeathData }) => {
  const MarkerArray = continetalDeathData.map((item, index) => (
    <CreateMarker
      key={index}
      id={index}
      lat={item.lat}
      lon={item.lon}
      deaths={item.deaths}
      markerClickHandler={markerClickHandler}
    />
  ));

  const markersGroup = useRef();
  useFrame(() => (markersGroup.current.rotation.y += 0.0015));
  return <group ref={markersGroup}>{MarkerArray}</group>;
};

export default MakeMarker;
