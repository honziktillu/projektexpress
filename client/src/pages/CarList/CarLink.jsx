import {Link} from "react-router-dom"

import React from 'react'

export default function CarLink(props) {
  return (
    <>
        <Link to={`/car/${props._id}`}>
            <p>{props.name}</p>
        </Link>
    </>
  )
}
