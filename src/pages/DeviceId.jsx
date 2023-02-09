import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DeviceInfo from "../components/deviceInfo/DeviceInfo";

const DeviceId = () => {
  const [device, setDevice] = useState();
  const { id } = useParams();
  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`;
    axios
      .get(URL)
      .then((res) => setDevice(res.data.data.product))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <main className="deviceId">
      <section className="deviceId__path">
        <Link to="/" className="deviceId__home">
          Home
        </Link>
        <i className="devicetId__point bx bxs-circle"></i>
        <h4 className="devicetId__nameDevice">{device?.title}</h4>
      </section>
      <DeviceInfo device={device} />
    </main>
  );
};

export default DeviceId;
