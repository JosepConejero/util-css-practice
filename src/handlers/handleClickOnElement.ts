import { GlobalVariables } from "../globalVariables/globalVariables";
import { mainScreen } from "./handlers";

export const handleClickOnElement = (event: Event) => {
  if (GlobalVariables.getMode === "selection") {
    //console.log("en modo selection");
    GlobalVariables.pointer = event.target as HTMLElement;
    GlobalVariables.pointer.focus();
    return;
  }

  if (GlobalVariables.getMode === "moving") {
    //console.log("en modo moving");
    if (GlobalVariables.pointer !== mainScreen()) {
      if (GlobalVariables.pointer !== event.target) {
        let tempPointer = (GlobalVariables.pointer as HTMLElement).cloneNode(true); //puede que falle por el ID /
        let parent = event.target;
        (GlobalVariables.pointer as HTMLElement).remove();
        GlobalVariables.pointer = parent as HTMLElement;
        (GlobalVariables.pointer as HTMLElement).append(tempPointer);
      }
    }

    GlobalVariables.pointer = mainScreen();
    GlobalVariables.setMode = "selection";
    return;
  }

  if (GlobalVariables.getMode === "none") {
    //console.log("en modo none");
    //console.log(event.target);
    return;
  }
};

//const isMoveToActivated = () => GlobalVariables.moveToActivated;

const clickSectionLeftHandle = (event: any) => {
  /*   const clickedElement = event.target;

    if (!isMoveToActivated() && isValidElement(clickedElement)) {
      GlobalVariables.pointer = clickedElement;
      setElementSelected(GlobalVariables.pointer);
      GlobalVariables.remarkSelection(clickedElement);
    }

    if (isMoveToActivated() && (isValidElement(clickedElement) || isMainScreen(clickedElement))) {
      console.log("entra aquí");
      // GlobalVariables.pointer = clickedElement;
      // setElementSelected(GlobalVariables.pointer);
      // console.log("es elemento válido");
    } else {
      // console.log("NO es elemento válido");
    } */
  // if (isMainScreen(event.target)) console.log("es mainScreen");
  /* //GlobalVariables.pointer = event.target;
    console.log("se ha pulsado en: ", event.target);
    if (event.target === document.querySelector(".section-left") || GlobalVariables.pointer === document.querySelector(".section-left")) {
      GlobalVariables.moveToActivated = false;
      setMoveToActivated(false);
    }

    if (
      GlobalVariables.moveToActivated &&
      event.target !== document.querySelector(".section-left") &&
      GlobalVariables.pointer !== GlobalVariables.mainScreenPointer() &&
      GlobalVariables.pointer !== document.querySelector(".section-left")
    ) {
      // TODO: comprobar que el moveto no ha sido fuera del mainScreen
      let tempPointer = (GlobalVariables.pointer as HTMLElement).cloneNode(true); //puede que falle por el ID /
      let parent = event.target;
      (GlobalVariables.pointer as HTMLElement).remove();
      GlobalVariables.pointer = parent;
      (GlobalVariables.pointer as HTMLElement).append(tempPointer);
    } else {
      if (event.target !== document.querySelector(".section-left")) {
        GlobalVariables.pointer!.style.border = GlobalVariables.previousColorElement;
        GlobalVariables.pointer = event.target;
        GlobalVariables.previousColorElement = GlobalVariables.pointer!.style.border;
        GlobalVariables.pointer!.style.border = "2px solid yellow";

        //GlobalVariables.pointer?.classList.add("selectedElement");
        //console.log("se ha pulsado en: ", GlobalVariables.pointer);
      }
    }
    GlobalVariables.moveToActivated = false;
    setMoveToActivated(false); */
};
