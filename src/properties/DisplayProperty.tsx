import { useEffect } from "react";
import { GlobalVariables } from "../globalVariables/globalVariables";

// export const DisplayProperty = ({ element }: { element: HTMLElement }) => {
export const DisplayProperty = () => {
  const handleClick = (event: any) => {
    //console.log(event.target.innerText);
    (GlobalVariables.pointer as HTMLElement).style.display = event.target.innerText;
  };

  useEffect(() => {
    const spans = document.querySelectorAll("span");
    spans.forEach((span) => {
      span.addEventListener("click", handleClick);
      span.style.margin = "2px";
    });
    //?.addEventListener("click", handleClick);
  }, []);

  return (
    <div className="display-property">
      DISPLAY:
      <span>flex</span>
      <span>none</span>
      <span>block</span>
    </div>
  );
};
