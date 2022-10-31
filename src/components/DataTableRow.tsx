import React from "react";
import { Checkbox, Icon, Table } from "semantic-ui-react";
import { FormattedData } from "../models/FormattedData";

type Props = {
  x: FormattedData;
};

const DataTableRow = ({ x }: Props): JSX.Element => {
  const billable = x.billable;
  return (
    <>
    <Table.Row>
      <Table.Cell textAlign="center">{x.from.latLongString}</Table.Cell>
      <Table.Cell textAlign="center">{x.to.latLongString}</Table.Cell>
      <Table.Cell textAlign="center">{x.distanceString} Miles</Table.Cell>
      <Table.Cell textAlign="center">£{x.costString}</Table.Cell>
      <Table.Cell textAlign="center">{x.speedString} MPH</Table.Cell>
      <Table.Cell textAlign="center">{x.timeString}</Table.Cell>
      <Table.Cell textAlign="center">
        {billable ? (
          <Icon data-testid="checkmarkId" color="green" name="checkmark" size="large" />
        ) : (
          <Icon data-testid="closeId" color="red" name="close" size="large" />
        )}
      </Table.Cell>
      <Table.Cell data-testid="colourId" style={{ "backgroundColor": x.colour }}></Table.Cell>
    </Table.Row>
    </>
    
  );
};

export default DataTableRow;
