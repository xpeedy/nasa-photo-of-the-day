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
border: solid white;

box-shadow: 0.4rem 0.4rem 0.4rem whitesmoke;
border-radius:10%;
height: 50%;
width: 53% ;
display: flex;
margin:4%;
margin-right:4%;


`

export default Img;