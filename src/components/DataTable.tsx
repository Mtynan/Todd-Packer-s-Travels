import React from "react";
import { Checkbox, Icon, Table } from "semantic-ui-react";
import { FormattedData } from "../models/FormattedData";
import DataTableRow from "./DataTableRow";

type Props = {
  data: FormattedData[];
};

const DataTable = ({
  data,
}: Props): JSX.Element => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>From</Table.HeaderCell>
          <Table.HeaderCell>To</Table.HeaderCell>
          <Table.HeaderCell>Distance</Table.HeaderCell>
          <Table.HeaderCell>Cost</Table.HeaderCell>
          <Table.HeaderCell>Speed</Table.HeaderCell>
          <Table.HeaderCell>Time</Table.HeaderCell>
          <Table.HeaderCell>Billable</Table.HeaderCell>
          <Table.HeaderCell>Line colour</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((x) => (
          <DataTableRow key={x.id} x={x} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default DataTable;
