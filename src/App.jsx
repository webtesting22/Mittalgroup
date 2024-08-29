import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Gallery from "./Component/Gallery";
import Groupcom from "./Component/Groupcom";
import Home from "./Component/Home";

const App=()=>{
    return (
        <>
            <Navbar/>
            <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/about" Component={About}/>
            <Route path="/contact" Component={Contact}/>
            <Route path="/gallery" Component={Gallery}/>
            <Route path="/group" Component={Groupcom}/>
        </Routes>
        </>
    );
};
export default App;