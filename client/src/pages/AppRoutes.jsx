import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import CarCreateForm from "./CarCreateForm";

export default function AppRoutes() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add-car" element={<CarCreateForm/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
