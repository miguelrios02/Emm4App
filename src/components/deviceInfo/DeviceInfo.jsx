import React from "react";

const DeviceInfo = ({ device }) => {
  return (
    <article>
      <h2>{device?.title}</h2>
    </article>
  );
};

export default DeviceInfo;
