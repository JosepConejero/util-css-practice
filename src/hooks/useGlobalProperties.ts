import { useContext } from "react";
import { GlobalPropertiesContext } from "../context/GlobalPropertiesContext";

export const useGlobalProperties = () => {
  const { moveToActivated, setMoveToActivated, elementSelected, setElementSelected }: any = useContext(GlobalPropertiesContext);

  return { moveToActivated, setMoveToActivated, elementSelected, setElementSelected };
};
