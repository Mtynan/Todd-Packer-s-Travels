import { useState } from "react";
import { getData, getRouteData } from "../utils/calculations";
import { IOutputData } from "../interfaces/IOutputData";
import { useChecked } from "./useChecked";

export const useData = () => {
  const [calculatedData, setcalculatedData] = useState<IOutputData | undefined>(
    undefined
  );
  const calculateData = async (withOptional: boolean) => {
    const dataWithoutRoutes = getData(withOptional);
    if(!withOptional){
      setcalculatedData(dataWithoutRoutes);
      return;
    }
    await getRouteData(dataWithoutRoutes).then((res) => {
      setcalculatedData(res);
    });
  };
  return [calculatedData, calculateData] as const;
};
