import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllCars } from "../../models/Car";

import React from "react";
import CarLink from "./CarLink";

export default function CarList() {
  const [cars, setCars] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllCars();
    if (data.status === 404 || data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setCars(data.payload);
      setLoaded(true);
    }
  };

  //window.onload
  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Cars not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Car list XD</h1>
      {
        cars.map((car, index) => (
          <CarLink key={index} {...car}/>
        ))
      }
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
