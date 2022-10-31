import { render, screen } from "@testing-library/react";
import DisplayOutPutMessage from "../../../components/DisplayOutPutMessage";

describe("Display output message Component", () => {
  test("Renders correctly", () => {
    render(<DisplayOutPutMessage messages={["test", "test2"]} />);

    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("test2")).toBeInTheDocument();
  });
});
