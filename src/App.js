import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
import Header from "./components/header"
import Img from "./components/img"
import Footer from "./components/footer"



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
    <div className="App">
      <Header/>
      <Img
      HDimage = {nasaData.hdurl}
      />
      <Footer
      title = {nasaData.title}
      info = {nasaData.explanation}
      date = {nasaData.date}
      />
    </div>
  );
}

export default App;
