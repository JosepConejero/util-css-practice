import { useContext, useEffect, useState } from "react";
import { GlobalVariables } from "../globalVariables/globalVariables";
import { GlobalPropertiesContext } from "../context/GlobalPropertiesContext";
import { handleClickOnElement } from "../handlers/handleClickOnElement";
import { handleOnFocus } from "../handlers/handleFocusOnElement";
import { handleOnBlur } from "../handlers/handleBlurOnElement";
import { DisplayProperty } from "../properties/DisplayProperty";

export const PracticeRight = () => {
  //const [activated, setActivated] = useState(GlobalVariables.moveToActivated);

  const { moveToActivated, setMoveToActivated, elementSelected, setElementSelected }: any = useContext(GlobalPropertiesContext);

  const addPNode = () => {
    GlobalVariables.setMode = "selection";
    console.log(elementSelected);
    console.log(GlobalVariables.pointer);
    const otroP = document.createElement("p");
    otroP.textContent = "texto";
    otroP.className = "clase";
    otroP.style.width = "100%";
    otroP.tabIndex = 0;
    otroP.addEventListener("focus", handleOnFocus);
    otroP.addEventListener("blur", handleOnBlur);
    otroP.addEventListener("click", handleClickOnElement);
    GlobalVariables.pointer?.append(otroP);
  };

  const addNodeDiv = () => {
    GlobalVariables.setMode = "selection";
    const otroDiv = document.createElement("div");
    otroDiv.className = "clase";
    otroDiv.style.height = "100px";
    otroDiv.style.width = "100px";
    otroDiv.tabIndex = 0;
    otroDiv.addEventListener("focus", handleOnFocus);
    otroDiv.addEventListener("blur", handleOnBlur);
    otroDiv.addEventListener("click", handleClickOnElement);
    GlobalVariables.pointer?.append(otroDiv);
  };

  const increase = () => {
    let tempW = +(GlobalVariables.pointer as HTMLElement).offsetWidth + 10;
    let tempH = +(GlobalVariables.pointer as HTMLElement).offsetHeight + 10;
    (GlobalVariables.pointer as HTMLElement).style.maxWidth = `${tempW}px`;
    (GlobalVariables.pointer as HTMLElement).style.width = `${tempW}px`;
    (GlobalVariables.pointer as HTMLElement).style.maxHeight = `${tempH}px`;
    (GlobalVariables.pointer as HTMLElement).style.height = `${tempH}px`;
  };

  const decrease = () => {
    let tempW = +(GlobalVariables.pointer as HTMLElement).offsetWidth - 10;
    let tempH = +(GlobalVariables.pointer as HTMLElement).offsetHeight - 10;
    (GlobalVariables.pointer as HTMLElement).style.maxWidth = `${tempW}px`;
    (GlobalVariables.pointer as HTMLElement).style.width = `${tempW}px`;
    (GlobalVariables.pointer as HTMLElement).style.maxHeight = `${tempH}px`;
    (GlobalVariables.pointer as HTMLElement).style.height = `${tempH}px`;
  };

  const remove = () => {
    if ((GlobalVariables.pointer as HTMLElement) !== GlobalVariables.mainScreenPointer()) {
      (GlobalVariables.pointer as HTMLElement).remove();
    }
    GlobalVariables.pointer = GlobalVariables.mainScreenPointer() as HTMLElement;
  };

  const parent = () => {
    if ((GlobalVariables.pointer as HTMLElement) !== GlobalVariables.mainScreenPointer()) {
      GlobalVariables.pointer = (GlobalVariables.pointer as HTMLElement).parentElement;
    }
  };

  const moveToParent = () => {
    if (GlobalVariables.pointer !== GlobalVariables.mainScreenPointer() && (GlobalVariables.pointer as HTMLElement).parentElement !== GlobalVariables.mainScreenPointer()) {
      let tempPointer = (GlobalVariables.pointer as HTMLElement).cloneNode(true); //puede que falle por el ID
      let parent = (GlobalVariables.pointer as HTMLElement).parentElement?.parentElement;
      (GlobalVariables.pointer as HTMLElement).remove();
      if (parent) GlobalVariables.pointer = parent;
      (GlobalVariables.pointer as HTMLElement).append(tempPointer);
    } else {
      console.log("don't move to parent");
    }
  };

  const moveTo = (event: any) => {
    //event.stopPropagation();
    /*  if (isValidElement(GlobalVariables.pointer as HTMLElement)) {
      GlobalVariables.moveToActivated = !GlobalVariables.moveToActivated;
      //setMoveToActivated(GlobalVariables.moveToActivated);
      if (!GlobalVariables.moveToActivated) {
        GlobalVariables.pointer = mainScreen();
      }
    }
    console.log("moveToActivated: ", GlobalVariables.moveToActivated); */
    GlobalVariables.setMode = "moving";
    setMoveToActivated(GlobalVariables.moveToActivated);
  };

  const refresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    document.querySelector(".addPNode")!.addEventListener("click", addPNode);
    document.querySelector(".addDivNode")!.addEventListener("click", addNodeDiv);
    document.querySelector(".refreshButton")!.addEventListener("click", refresh);
    document.querySelector(".roundButtonMinus")!.addEventListener("click", decrease);
    document.querySelector(".roundButtonPlus")!.addEventListener("click", increase);
    document.querySelector(".removeButton")!.addEventListener("click", remove);
    document.querySelector(".parentButton")!.addEventListener("click", parent);
    document.querySelector(".moveToParentButton")!.addEventListener("click", moveToParent);
    document.querySelector(".moveToButton")!.addEventListener("click", (event) => moveTo(event));
  }, []);

  return (
    <section className="section section-right">
      <button className="addButton addPNode">add p</button>
      <button className="addButton addDivNode">add div</button>
      <button className="addButton refreshButton">refresh</button>
      <div className="buttons">
        <div className="roundButtonMinus">-</div>
        <div className="roundButtonPlus">+</div>
      </div>
      <button className="addButton removeButton">remove</button>
      <button className="addButton parentButton">parent</button>
      <button className="moveToParentButton">move to parent</button>
      <button className={moveToActivated ? "moveToButton moveToButtonActivated" : "moveToButton moveToButtonIdle"}>move to</button>
      <DisplayProperty />
    </section>
  );
};
