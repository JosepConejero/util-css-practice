import { useContext, useEffect } from "react";
import { GlobalVariables } from "../globalVariables/globalVariables";
import { mainScreen } from "../handlers/handlers";
import { handleClickOnElement } from "../handlers/handleClickOnElement";
import { GlobalPropertiesContext } from "../context/GlobalPropertiesContext";
import { handleOnFocus } from "../handlers/handleFocusOnElement";
import { handleOnBlur } from "../handlers/handleBlurOnElement";

export const PracticeLeft = () => {
  const { setElementSelected }: any = useContext(GlobalPropertiesContext);

  useEffect(() => {
    GlobalVariables.pointer = mainScreen();
    GlobalVariables.pointer.tabIndex = 0;
    GlobalVariables.pointer.style.border = "1px solid blue";
    GlobalVariables.pointer.style.width = "300px";
    GlobalVariables.pointer.style.maxWidth = "300px";
    GlobalVariables.pointer.style.height = "300px";
    GlobalVariables.pointer.style.maxHeight = "300px";
    GlobalVariables.pointer.style.margin = "auto";
    //GlobalVariables.pointer.focus();
    GlobalVariables.pointer.addEventListener("click", handleClickOnElement);
    GlobalVariables.pointer.addEventListener("focus", handleOnFocus);
    GlobalVariables.pointer.addEventListener("blur", handleOnBlur);
    setElementSelected(GlobalVariables.pointer);
    GlobalVariables.setMode = "selection";
  }, []);

  return (
    <section className="section section-left">
      <div className="mainScreen"></div>
    </section>
  );
};
