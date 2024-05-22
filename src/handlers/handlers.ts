//export const isValidElement = (element: HTMLElement) => !(element === document.querySelector(".section-right") || element === document.querySelector(".section-left"));

export const isMainScreen = (element: HTMLElement): boolean => element === document.querySelector(".mainScreen");

export const mainScreen = (): HTMLElement => document.querySelector(".mainScreen") as HTMLElement;

export const isValidElement = (elementSelected: HTMLElement): boolean => {
  let isValid: boolean = false;
  let element: HTMLElement | null = elementSelected;
  while (element !== null) {
    if (isMainScreen(element.parentElement as HTMLElement)) {
      isValid = true;
    }
    element = element.parentElement;
  }
  return isValid;
};
