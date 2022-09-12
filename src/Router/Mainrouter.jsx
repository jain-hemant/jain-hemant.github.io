import { Route,Routes } from "react-router-dom";
import React from 'react'
import { Homepage } from "../Pages/Homepage";

export const Mainrouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
    </Routes>
  )
}
