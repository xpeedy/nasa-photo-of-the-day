import React, {useState, useEffect} from "react";

function Footer(props){


    return(
    <div>
        <div className="title">
        <h1>{props.title}</h1>
        </div>
        <div className="info">
        <p>{props.info}</p>
        </div>
        <div className="date">
        <h2>{props.date}</h2>

        </div>
    </div>)
}

export default Footer;