import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const UseWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);
  if (!context) {
    throw Error("Error");
  }
  return context;
};
