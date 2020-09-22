import React from "react";

import Earth from "./Earth";
import Clouds from "./Clouds";
import Atmosphere from "./Atmosphere";
import Markers from "./Markers";

const MeshCreator = ({ markerClickHandler, continetalDeathData }) => {
  return (
    <>
      <Markers
        markerClickHandler={markerClickHandler}
        continetalDeathData={continetalDeathData}
      />
      <Earth />
      <Clouds />
      {/* <Atmosphere /> */}
    </>
  );
};

export default MeshCreator;
