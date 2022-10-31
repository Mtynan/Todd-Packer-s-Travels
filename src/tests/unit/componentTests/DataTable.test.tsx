import { render, screen } from "@testing-library/react";
import { FormattedData } from "../../../models/FormattedData";
import DataTable from "../../../components/DataTable";

describe("Data table Component", () => {
const data = [new FormattedData("53.801277, -1.548567", "53.483959, -2.244644","0.15","01:30:00", "Test", "Data", 1)];
  test("Renders correctly", () => {
    render(<DataTable data={data}/>);

    expect(screen.getByText("From")).toBeInTheDocument();
    expect(screen.getByText("To")).toBeInTheDocument();
    expect(screen.getByText("Distance")).toBeInTheDocument();
    expect(screen.getByText("Speed")).toBeInTheDocument();
    expect(screen.getByText("Time")).toBeInTheDocument();
    expect(screen.getByText("Billable")).toBeInTheDocument();
    expect(screen.getByText("Line colour")).toBeInTheDocument();
  });
});
