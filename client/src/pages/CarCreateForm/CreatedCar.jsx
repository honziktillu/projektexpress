import { Link, useParams } from "react-router-dom";
import React from 'react'

export default function CreatedCar() {
    const {id} = useParams();
  return (
    <>
        <h1>New car created: {id}</h1>
        <Link to={`/car/${id}`}>
            <p>View car</p>
        </Link>
        <Link to={`/`}>
            <p>Go home</p>
        </Link>
    </>
  )
}
