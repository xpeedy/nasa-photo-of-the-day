import React from "react";
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
border-radius: 10%;
height : 20%;
margin-top: 5%;
`

const StyleTitle = styled.div`
font-weight:bold;
`
const StyleInfo = styled.div`
font-size: 160%;
`

const StyleDate = styled.div`
font-size: 2rem;
`
export default Footer;