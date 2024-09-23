import React from "react";
import "ldrs/helix";
const Loadding = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <l-helix className="h-48 w-48" size="45" speed="2.5" color="black"></l-helix>
    </div>
  );
};

export default Loadding;
