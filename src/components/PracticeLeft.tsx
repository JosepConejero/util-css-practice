import { useContext, useEffect } from "react";
import { GlobalVariables } from "../globalVariables/globalVariables";
import { mainScreen } from "../handlers/handlers";
import { handleClickOnElement } from "../handlers/handleClickOnElement";
import { GlobalPropertiesContext } from "../context/GlobalPropertiesContext";

export const PracticeLeft = () => {
  const { setElementSelected }: any = useContext(GlobalPropertiesContext);

  useEffect(() => {
    GlobalVariables.pointer = mainScreen();
    GlobalVariables.pointer.addEventListener("click", handleClickOnElement);
    setElementSelected(GlobalVariables.pointer);
    GlobalVariables.setMode = "selection";
  }, []);

  return (
    <section className="section section-left">
      <div className="mainScreen"></div>
    </section>
  );
};
