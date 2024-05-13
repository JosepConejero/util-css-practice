export const PracticeRight = () => {
  const { log } = console;
  let pointer = null;

  //const nodos = document.querySelectorAll(".clase");
  //const addNode2 = ()=>{  console.log("he pulsado div")};
  const addNode = () => {
    const mainScreen = document.querySelector(".mainScreen");
    if (!mainScreen) {
      pointer = mainScreen;
    }

    const otroP = document.createElement("p");
    otroP.textContent = "textoprueba";
    otroP.className = "clase";
    otroP.addEventListener("click", addNode);
    mainScreen?.append(otroP);
    console.log("entra");
    ///
  };

  const addNodeDiv = () => {
    const mainScreen = document.querySelector(".mainScreen");
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
    mainScreen?.append(otroDiv) || log("mierda");
  };
  //document.querySelector("#addButton")?.addEventListener("click", addNode);
  //document.querySelector("#addDiv")?.addEventListener("click", addNodeDiv);
  //
  return (
    <section className="section section-right">
      <button id="addButton" onClick={addNode}>
        add
      </button>
      <button id="addDiv" onClick={addNodeDiv}>
        add Div
      </button>
      <div id="roundButton" onClick={() => log("nada")}>
        botón redondo
      </div>
    </section>
  );
};
