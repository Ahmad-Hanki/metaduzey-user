import React from "react";

const loading = () => {
  return (
    <div className="flex h-[80px] items-center">
      <span className="loading loading-spinner loading-xs"></span>
      <span className="loading loading-spinner loading-sm"></span>
      <span className="loading loading-spinner loading-md"></span>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default loading;
