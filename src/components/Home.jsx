import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Reactfile=()=>{

    const Navigate = useNavigate()

    return(
        <div> <Navbar /><h1>Welcome to my website!</h1></div>
       
    )
}

export default Reactfile