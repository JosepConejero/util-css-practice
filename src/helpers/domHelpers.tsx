/* const { log } = console;
const mainScreen = document.querySelector(".mainScreen");
//const nodos = document.querySelectorAll(".clase");
//const addNode2 = ()=>{  console.log("he pulsado div")};
const addNode = () => {
  const otroP = document.createElement("p");
  otroP.textContent = "textoprueba";
  otroP.className = "clase";
  otroP.addEventListener("click", addNode);
  mainScreen.append(otroP);
  console.log("entra");
  //
};

const addNodeDiv = () => {
  const otroDiv = document.createElement("div");
  //otroDiv.textContent = "mierda";
  //otroDiv.setAttribute("style", "color:red;");
  otroDiv.style.height = "200px";
  otroDiv.style.width = "200px";
  otroDiv.style.border = "2px solid black";
  otroDiv.style.backgroundColor = "green";
  //console.log(otroDiv.hasAttributes());
  //log(typeof otroDiv);
  //console.log(JSON.stringify(otroDiv.attributes));
  ///
  //otroP.addEventListener("click", addNode);
  mainScreen.append(otroDiv);
};

function glubglub(e) {
  if (e.stopPropagation) e.stopPropagation();
  else window.event.cancelBubble = true;
}
//nodos.forEach((nodo)=>{  nodo.addEventListener("click", addNode)});
document.querySelector("#addButton").addEventListener("click", addNode);
document.querySelector("#addDiv").addEventListener("click", addNodeDiv);
//https://developer.mozilla.org/es/docs/Web/API/Document
//https://developer.mozilla.org/es/docs/Web/API/Element
//https://developer.mozilla.org/es/docs/Web/API/Element/append
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

const button = document.querySelector("button");

//button.setAttribute("name", "helloButton");
//button.setAttribute("disabled", "");
 */

export const a: string = "";
