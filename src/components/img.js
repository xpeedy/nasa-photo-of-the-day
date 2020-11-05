import React, {useState, useEffect} from "react";
import styled from "styled-components";

function Img(props){
    const {HDimage} = props

    return(
    // className = "imgContainer">
    //     <img src = {HDimage} alt = "nasa picture"/>
    <StyledImg src = {HDimage} alt = "nasa picture"/>
    )
}

const StyledImg = styled.img`
border: solid black;
border: 30px;
height: 40%;
width: 50% ;
border-style: dotted;
display: flex;
margin:4%;
margin-right:4%;


`

export default Img;