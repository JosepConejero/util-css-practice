import { useState } from "react";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { GlobalPropertiesContext } from "./context/GlobalPropertiesContext";
import { GlobalVariables } from "./globalVariables/globalVariables";

function App() {
  const [moveToActivated, setMoveToActivated] = useState(false);
  const [elementSelected, setElementSelected] = useState(GlobalVariables.mainScreenPointer());

  return (
    <>
      <GlobalPropertiesContext.Provider value={{ moveToActivated, setMoveToActivated, elementSelected, setElementSelected }}>
        <MainPage />
      </GlobalPropertiesContext.Provider>
    </>
  );
}

export default App;
