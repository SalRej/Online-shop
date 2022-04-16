import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Categorie from "./components/Categorie/Categorie";
import {
  BrowserRouter as Router , Routes , Route
} from "react-router-dom";

function App() {
  
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:categorie" element={<Categorie />}></Route>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
