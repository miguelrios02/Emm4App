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
        <img
          className="DeviceCard__header-img2"
          src={device.productImgs[2]}
          alt=""
        />
      </header>
      <div className="DeviceCard__body">
        <h3 className="DeviceCard__title">{device.title}</h3>
        <h4 className="DeviceCard__title-price">Price</h4>
        <span className="DeviceCard__price">{device.price}</span>
        <button className="DeviceCard__btn">
          <i className="bx bx-cart"></i>
        </button>
      </div>
    </article>
  );
};

export default DeviceCard;
