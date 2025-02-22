import Header from "./Components/Header/Header";
import Timetable from "./Components/Timetable/Timetable";
import Inputform from "./Components/Inputform/Inputform";
import { useState } from "react";

function App() {
  const [subs, setSub] = useState([]);
  const [controller, setController] = useState(0);

  function handlecontroller() {
    setController(1);
  }

  function handlesubs(ele) {
    const newElement = [...subs, ele];
    setSub(newElement);
  }

  function handledelete(index) {
    const newlist = subs.filter((subs, subindex) => {
      return subindex != index;
    });
    setSub(newlist);
  }

  return (
    <>
      <Header />
      <Timetable arr={subs} />
      <Inputform
        handlesubs={handlesubs}
        subs={subs}
        handledelete={handledelete}
      />
    </>
  );
}

export default App;
