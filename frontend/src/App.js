import React from "react";
function App() {

  React.useEffect(()=>{
    // fetch("http://localhost:5000/test").
    // then(res=>{return res.json()}).
    // then((res)=>console.log(res));
    console.log("hey")
  },[])

  return (
    <div className="App">
      raboti
    </div>
  );
}

export default App;
