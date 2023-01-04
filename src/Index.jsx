import React from 'react'

// importing from react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/App"
import Home from "./pages/Home"


function index() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>            <Route path="/" element={<App />}/>
            <Route path="/game/:name" element={<App />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default index