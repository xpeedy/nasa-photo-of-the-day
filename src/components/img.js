
import React from "react";
import styled from "styled-components";

function Img(props){
    const {HDimage, video} = props

    return(
        <StyledImg src = {HDimage} alt = "nasa picture"/>
    )
}
{/* <StyledImg src = {HDimage} alt = "nasa picture"/> */}

const StyledImg = styled.img`
border: solid white;

box-shadow: 0.4rem 0.4rem 0.4rem whitesmoke;
border-radius:10%;
height: 20%;
width: 40% ;
display: flex;
margin:4%;
margin-right:4%;


`

export default Img;