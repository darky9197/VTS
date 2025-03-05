//import { Routes, Route } from "react-router-dom";
//import Login from "./Pages/Login";
//import Userpage from "./Pages/Userpage";
import AdminView from "./Pages/AdminView";
import Generatorpage from "./Pages/Generatorpage";
import Tableviewform from "./Pages/Tableviewform";
//import { useEffect, useState } from "react";



function App() {
  // const [routeone, setRountone] = useState(false);

  // function handleRouteone() {
  //   JSON.parse(localStorage.logdata).loggedin = true
  //   setRountone(prev => prev ? false : true)
  // }


  // useEffect(() => {
  //   let logdata = localStorage.getItem("logdata")

  //   if (JSON.parse(logdata).loggedin == true) {
  //     setRountone(true)
  //   }
  // }, [])


  // const mainrenderer = routeone ? <Userpage /> : <Login  handleRouteone={handleRouteone} />;

  return (
    <>
      {/* <div>
        <Routes>
          <Route index element={<Generatorpage/>} />
        </Routes>
        <Generatorpage/>
      </div> */}
      {/* <Generatorpage/> */}
      {/* <Tableviewform/> */}
      <AdminView/>

    </>
  );
}

export default App;
