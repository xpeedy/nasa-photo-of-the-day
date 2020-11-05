import React, {useState, useEffect} from "react";
import styled from "styled-components";

function Footer(props){


    return(
    <div>
        <StyleTitle className="title">
        <h1>{props.title}</h1>
        </StyleTitle>
        <StyleInfo className="info">
        <p>{props.info}</p>
        </StyleInfo>
        <StyleDate className="date">
        <h2>{props.date}</h2>
        </StyleDate>
    </div>)
}

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