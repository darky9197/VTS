//import { Routes, Route } from "react-router-dom";
//import Login from "./Pages/Login";
//import Userpage from "./Pages/Userpage";
import { useState } from "react";
import AdminView from "./Pages/AdminView";
import Entry from "./Pages/Entry";
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
  const [comp,setComp] = useState(false)

  return (
    <>
      {/* <div>
        <Routes>
          <Route index element={<Generatorpage/>} />
        </Routes>
        <Generatorpage/>
      </div> */}
      
      {/* Important components dont to be delete */}

      {/* <Generatorpage/> */}
      {/* <Tableviewform/> */}
      {!comp?
      (<Entry adminComp={()=>setComp(true)}/>)
      :
      (<AdminView/>)}
      {/* <AdminView/> */}
    </>
  );
}

export default App;
