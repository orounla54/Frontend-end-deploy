import React from "react";

function SpinnerCligne() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-3 bg-green-500/20"></span>
    </span>
  );
}

export default SpinnerCligne;
