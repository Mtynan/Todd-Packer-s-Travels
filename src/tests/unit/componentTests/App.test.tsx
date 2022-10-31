import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../../App";

describe("App", () => {
  test("Renders correctly without optional", async () => {
    render(<App />);

    expect(screen.getByText("calculate")).toBeInTheDocument();
    expect(screen.getByText("With Optional?")).toBeInTheDocument();
    expect(screen.queryByTestId("actionGroup")).toBeInTheDocument();
    expect(screen.queryByTestId("outputmessage")).toBeNull();
    expect(screen.queryByTestId("map")).toBeNull();
    expect(screen.queryByTestId("grid")).toBeNull();

    userEvent.click(screen.getByText("calculate"));
    expect(screen.getByText("Calculating..")).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.queryByTestId("outputmessage")).toBeInTheDocument()
    );
  
    expect(screen.queryByTestId("map")).toBeNull();
    expect(screen.queryByTestId("grid")).toBeNull();
  });



});
