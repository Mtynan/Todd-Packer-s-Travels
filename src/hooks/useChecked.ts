import { useState } from "react";

export const useChecked = (optional: boolean) => {
  const [checked, setChecked] = useState<boolean>(false);

  const toggleValue = (type: CheckboxType) => {
    switch (type) {
      case CheckboxType.Optional:
        setChecked((prevState) => !prevState);
        break;
      case CheckboxType.Map:
    
        break;
    }
  };

  return [checked, toggleValue] as const
};

export enum CheckboxType {
  Map,
  Optional,
}