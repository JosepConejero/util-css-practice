/// <reference types="react-scripts" />

export interface ValuesOfDOM {
  pointer: HTMLElement | null;
  moveToActivated: boolean;
}

export interface ValuesOfDOMValueAndsetValue {
  valuesOfDom: ValuesOfDOM;
  setValuesOfDom: React.Dispatch<React.SetStateAction<ValuesOfDOM>>;
}

export type Mode = "none" | "selection" | "moving";
