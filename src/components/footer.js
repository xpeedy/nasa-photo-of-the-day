import React, {useState, useEffect} from "react";
import styled from "styled-components";

function Footer(props){


    return(
    <InfoContainer>
        <StyleTitle className="title">
        <h1>{props.title}</h1>
        </StyleTitle>
        <StyleInfo className="info">
        <p>{props.info}</p>
        </StyleInfo>
        <StyleDate className="date">
        <h2>{props.date}</h2>
        </StyleDate>
    </InfoContainer>)
}

const InfoContainer = styled.div`
box-shadow: 0.4rem 0.4rem 0.4rem whitesmoke;
border: solid white;
border-radius: 10%
`

const StyleTitle = styled.h1`
font-weight:bold;
`
const StyleInfo = styled.p`
font-size: 160%;
`

const StyleDate = styled.h2`
font-size: 2rem;
`
export default Footer;