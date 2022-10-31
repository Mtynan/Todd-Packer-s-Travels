import { render, screen } from "@testing-library/react";
import {
  GetBillableData,
  GetSpeedViolationData,
} from "../../../utils/generateTestdata";
import DataTableRow from "../../../components/DataTableRow";

const billableData = GetBillableData();
const violationData = GetSpeedViolationData();
const colourString = "rgb(224, 165, 109);";

describe("Data table Component", () => {
  test("Renders with billable", () => {
    render(
      <table>
        <tbody>
          <DataTableRow x={billableData} />
        </tbody>
      </table>
    );

    expect(screen.getByText("53.801277, -1.548567")).toBeInTheDocument();
    expect(screen.getByText("53.483959, -2.244644")).toBeInTheDocument();
    expect(screen.getByText("52.85 Miles")).toBeInTheDocument();
    expect(screen.getByText("£7.93")).toBeInTheDocument();
    expect(screen.getByText("01:30:00")).toBeInTheDocument();
    expect(screen.getByTestId("checkmarkId")).toBeInTheDocument();
    expect(screen.queryByTestId("closeId")).toBeNull();
    expect(screen.getByTestId("colourId")).toHaveStyle(
      `background-color: ${colourString}`
    );
  });

  test("Renders with not billable", () => {
    render(
      <table>
        <tbody>
          <DataTableRow x={violationData} />
        </tbody>
      </table>
    );

    expect(screen.getByText("53.801277, -1.548567")).toBeInTheDocument();
    expect(screen.getByText("53.483959, -2.244644")).toBeInTheDocument();
    expect(screen.getByText("52.85 Miles")).toBeInTheDocument();
    expect(screen.getByText("£7.93")).toBeInTheDocument();
    expect(screen.getByText("00:10:00")).toBeInTheDocument();
    expect(screen.queryByTestId("checkmarkId")).toBeNull();
    expect(screen.getByTestId("closeId")).toBeInTheDocument();
    expect(screen.getByTestId("colourId")).toHaveStyle(
      `background-color: ${colourString}`
    );
  });
});
