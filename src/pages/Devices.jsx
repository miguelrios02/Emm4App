import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeviceCard from "../components/devices/DeviceCard";
import { getAllDivices } from "../store/slices/devices.slice";
import "./styles/Devices.css";

const Devices = () => {
  const [namedevice, setNameDevice] = useState("");
  const [filterdevice, setFilterDevice] = useState([]);

  const devices = useSelector((state) => state.devices);
  const handlesubmit = (e) => {
    e.preventDefault();
    const newName = e.target.nameProduct.value;
    setNameDevice(newName);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDivices());
  }, []);

  useEffect(() => {
    setFilterDevice(devices);
  }, [devices]);

  useEffect(() => {
    const newDevices = devices.filter((devices) =>
      devices.title.includes(namedevice)
    );
    setFilterDevice(newDevices);
  }, [namedevice]);

  return (
    <main className="Devices">
      <form className="home__form" onSubmit={handlesubmit}>
        <div className="home__form-div">
          <input
            className="home__form-input"
            type="text"
            id="nameProduct"
            placeholder="nombre del dispositivo"
          />
          <button className="home__form-btn">
            <i className="bx bx-search"></i>
          </button>
        </div>
      </form>
      <section className="home__containerProducts">
        {filterdevice.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </section>
    </main>
  );
};

export default Devices;
