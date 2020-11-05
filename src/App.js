import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
import Header from "./components/header"
import Img from "./components/img"
import Footer from "./components/footer"
import styled from "styled-components";


function App() {
  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DMr5a81EXXgFsFmgzXxIHFJtsCm8e2hSimoce9js")
    .then((res) => {
      console.log(res)
      setNasaData(res.data)
    })
    .catch((err) => {
      debugger
    })
  },[])


  return (
    <StyledBackground className="App">
      <Header/>
      <StyledDiv>
        <Img
        HDimage = {nasaData.hdurl}
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
background-color: darkblue;
padding:1%;
`

export default App;
