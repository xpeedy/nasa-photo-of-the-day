import React, {useState, useEffect} from "react";

function Img(props){
    const {HDimage} = props

    return(
    <div className = "imgContainer">
        <img src = {HDimage} alt = "nasa picture"/>
    </div>
    )
}

export default Img;