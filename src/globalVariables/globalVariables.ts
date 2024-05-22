import { Mode } from "../react-app-env";

export class GlobalVariables {
  static pointer: HTMLElement | null = document.querySelector(".mainScreen");
  static previousElement: HTMLElement | null = document.querySelector(".mainScreen");
  static previousColorElement: string = "1px solid black";
  static moveToActivated: boolean = false;
  private static mode: Mode = "none";

  static set setMode(mode: Mode) {
    this.mode = mode;
  }

  static get getMode() {
    return this.mode;
  }

  static mainScreenPointer() {
    return document.querySelector(".mainScreen");
  }

  /*   static restoreSelection = () => {
    this.pointer!.style.border = this.previousColorElement;
    this.previousColorElement = "1px solid black";
    this.pointer = document.querySelector(".mainScreen");
  };

  static remarkSelection = (element: HTMLElement) => {
    if (element !== this.pointer) {
      this.pointer!.style.border = this.previousColorElement;
      this.previousColorElement = element.style.border;

      this.pointer!.style.border = "2px solid yellow";
    }
  }; */

  /*   constructor(pointer: HTMLElement, moveToActivated: boolean) {
    this.pointer = pointer;
    this.moveToActivated = moveToActivated;
  }

  imprimir() {
    console.log(`Nombre: ${this.nombre} y edad:${this.edad}`);
  } */
}
