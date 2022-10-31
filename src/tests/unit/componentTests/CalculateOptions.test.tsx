import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CalculateOptions from "../../../components/CalculateOptions";


describe("Action group Component", () => {
  test("Renders correctly", () => {
    const mockCalculate = jest.fn();
    let isChecked =false;
    const mockSetChecked = jest.fn(() => isChecked = true);
    render(<CalculateOptions isChecked={isChecked} calculate={mockCalculate} cbOnChange={mockSetChecked} />);

    expect(screen.getByText("calculate")).toBeInTheDocument();
    expect(screen.getByText("With Optional?")).toBeInTheDocument();
  });

  test("fires correctly", async () => {
    const mockCalculate = jest.fn();
    let isChecked =false;
    const mockSetChecked =jest.fn(() => isChecked = true);
    render(<CalculateOptions isChecked={isChecked} calculate={mockCalculate} cbOnChange={mockSetChecked} />);

    await userEvent.click(screen.getByText('calculate'));
    expect(mockCalculate).toBeCalledTimes(1);

    await userEvent.click(screen.getByText('With Optional?'));
    expect(mockSetChecked).toBeCalledTimes(1);
    expect(isChecked).toBe(true);

  });
});
