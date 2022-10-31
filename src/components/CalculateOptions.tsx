import { Button, Checkbox, Container, Message } from "semantic-ui-react";
import { CheckboxType } from "../hooks/useChecked";

type Props = {
  calculate: () => void;
  cbOnChange: (type: CheckboxType) => void;
  isChecked: boolean;
};

const CalculateOptions = ({
  calculate,
  cbOnChange,
  isChecked,
}: Props): JSX.Element => {
  return (
    <>
      <Button onClick={() => calculate()}>calculate</Button>
      <Checkbox
        onChange={() => cbOnChange(CheckboxType.Optional)}
        checked={isChecked}
        label="With Optional?"
      ></Checkbox>
      {/* <Checkbox
        onChange={() => toggleValue(CheckboxType.Map)}
        checked = {withMap}
        label="With Map?"
      ></Checkbox> */}
    </>
  );
};

export default CalculateOptions;
