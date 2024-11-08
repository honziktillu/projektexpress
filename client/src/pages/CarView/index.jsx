import { Link, useParams, useNavigate } from "react-router-dom";
import { getCarById, deleteCar } from "../../models/Car";
import { useState, useEffect } from "react";

import React from "react";

export default function CarView() {
  const { id } = useParams();
  const [car, setCar] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCarById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCar(data.payload);
      setLoaded(true);
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (car.name === formData) {
      const data = await deleteCar(id);
      if (data.status === 200) {
        //navigate(`/deleted-car/${id}`)
        navigate(`/`)
      } else{
        setInfo(data.message);
      }
    } else {
      setInfo("Wrong input")
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Car not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Car is loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Car view </h1>
      <p>{id}</p>
      <p>Název auta: {car.name}</p>
      <p>Brand auta: {car.brand}</p>
      <p>Barva auta: {car.color}</p>
      <p>Cena auta: {car.price}</p>
      <form>
        <input type="text" placeholder={car.name} onChange={handleChange} />
        <button onClick={handleDelete}>Smazat auto</button>
      </form>
      <p>{info}</p>
      <Link to={`/update-car/${id}`}>
        <p>Update car</p>
      </Link>
      <Link to={`/`}>
        <p>Go home</p>
      </Link>
    </>
  );
}
