import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

import {
  BrowserRouter as Router , Routes , Route
} from "react-router-dom";

function App() {

  React.useEffect(()=>{
    // fetch("http://localhost:5000/test").
    // then(res=>{return res.json()}).
    // then((res)=>console.log(res));
    console.log("hey")
  },[])

  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="test" element={<div>My Test Element</div>}></Route>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
