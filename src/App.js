import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/header";
import Img from "./components/img";
import Footer from "./components/footer";
import styled from "styled-components";

const API_KEY = "DMr5a81EXXgFsFmgzXxIHFJtsCm8e2hSimoce9js"
const URL = "https://api.nasa.gov/planetary"

function App() {
  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    axios
    .get(`${URL}/apod?api_key=${API_KEY}`
    )
    .then((res) => {
      console.log(res)
      setNasaData(res.data)
    })
    .catch((err) => {
      console.log(err)
      debugger
    })
  },[])

  // `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}` 
  // "https://api.nasa.gov/planetary/apod?api_key=DMr5a81EXXgFsFmgzXxIHFJtsCm8e2hSimoce9js"
  
  return (
    <StyledBackground className="App">
      <Header/>
      <StyledDiv>
        <Img
        HDimage = {nasaData.hdurl}
        video = {nasaData.url}
        />
        <Footer
        title = {nasaData.title}
        info = {nasaData.explanation}
        date = {nasaData.date}
        />
      </StyledDiv>
    </StyledBackground>
  );
}

const StyledDiv = styled.div`
display:flex;
text-align: center;
margin-right:4%;

`

const StyledBackground = styled.div`
background: url("https://wp.technologyreview.com/wp-content/uploads/2019/05/hubble-telescope-nasa-10.jpg");
padding:1%;
color: whitesmoke;
`

export default App;
