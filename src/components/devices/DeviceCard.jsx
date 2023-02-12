import React from "react";
import { useNavigate } from "react-router-dom";

const DeviceCard = ({ device }) => {
  const navigate = useNavigate();

  const handleClickDevice = () => {
    navigate(`/devices/${device.id}`);
  };

  return (
    <article className="DeviceCard" onClick={handleClickDevice}>
      <header className="DeviceCard__header">
        <img
          className="DeviceCard__header-img1"
          src={device.productImgs[0]}
          alt=""
        />
      </header>
      <div className="DeviceCard__body">
        <h3 className="DeviceCard__title">{device.title}</h3>
      </div>
    </article>
  );
};

export default DeviceCard;
