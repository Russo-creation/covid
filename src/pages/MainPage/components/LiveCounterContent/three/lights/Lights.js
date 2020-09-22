import React from "react";

const Light = () => {
  return (
    <>
      <ambientLight color={0x5a5a5a} />
      <directionalLight
        color={0xffffff}
        intensity={4}
        position={[600, 0, -200]}
      />
    </>
  );
};

export default Light;
