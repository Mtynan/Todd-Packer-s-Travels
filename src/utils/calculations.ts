import { OutputDataBuilder } from "../builder/OutputDataBuilder";
import data from "../data.json";
import { IOutputData } from "../interfaces/IOutputData";
import { FormattedData } from "../models/FormattedData";
import { IData } from "../interfaces/IData";

import { MarkerModel } from "../models/creation/MarkerModel";
import { IMarker } from "../interfaces/IMarker";

import { IFormattedData } from "../interfaces/IFormattedData";

const getFormattedData = (): FormattedData[] => {
  const typedData = data as IData;

  const formattedData = typedData.travelled.map(
    (x, i) =>
      new FormattedData(
        x.from,
        x.to,
        x.priceOfFuelPerMile,
        x.timeTaken,
        data.firstName,
        data.lastName,
        i
      )
  );
  return formattedData;
};

const getOutPutString = (
  data: IOutputData,
  withOptional: boolean
): Array<string> => {
  const toPrint = new Array<string>();
  toPrint.push(`${data.fullName}'s Travel Report`);
  toPrint.push(
    `Total Miles Travelled Travel ${data?.averages?.totalDistance} miles at an average speed of ${data?.averages?.averageSpeed} miles an hour`
  );
  toPrint.push(
    `Speed limit broken: ${data?.brokenSpeedLimit?.timesBroken} times - £${data?.brokenSpeedLimit?.reimburstmentLost}  reimbursement lost due to speeding`
  );
  if (withOptional) {
    toPrint.push(`Most expensive path: From ${data?.optionalData?.mostExpensive.from} to ${data?.optionalData?.mostExpensive.to} 
    (${data?.optionalData?.mostExpensive.miles} miles), costing £${data?.optionalData?.mostExpensive.cost} amount (optional)`);
    toPrint.push(`Cheapest path: From ${data?.optionalData?.leastExpensive.from} to ${data?.optionalData?.leastExpensive.to} 
    (${data?.optionalData?.leastExpensive.miles} miles), costing £${data?.optionalData?.leastExpensive.cost} amount (optional)`);
  }

  const canExpense = data.formattedData.filter((x) => x.billable);
  const cantExpense = data.formattedData.filter((x) => !x.billable);
  const expenseTotal = canExpense
    .reduce((x, y) => {
      return x + y.cost;
    }, 0)
    .toFixed(2);
  toPrint.push(`Expense Report (${canExpense.length} Total: £${expenseTotal})`);
  canExpense.forEach((x, i) => {
    toPrint.push(
      `${i + 1}) Travelled from ${x.from.latLongString} to ${
        x.to.latLongString
      } doing ${x.speedString} miles an hour (miles: ${
        x.distanceString
      }, expense: £${x.costString})`
    );
  });
  toPrint.push(
    `Speed Limit Violations (${cantExpense.length} Total - ${cantExpense.length}  Not Paid)`
  );
  cantExpense.forEach((x, i) => {
    toPrint.push(
      `${i + 1}) Travelled from ${x.from.latLongString} to ${
        x.to.latLongString
      } doing ${x.speedString} miles an hour ${(x.speed - 70).toFixed(
        0
      )} over the speed limit`
    );
  });

  return toPrint;
};

const buildData = (
  withOptional: boolean,
  formattedData: FormattedData[]
): IOutputData => {
  const buidler = new OutputDataBuilder(formattedData);
  if (withOptional) {
    buidler.withDefaults();
    buidler.withOptional();
    return buidler.build();
  }
  buidler.withDefaults();
  return buidler.build();
};

const getDirections = async (
  marker: IMarker,
  directionsService: google.maps.DirectionsService
) => {
  {
    const origin = marker.from;
    const destination = marker.to;
    return new Promise((resolve, reject) => {
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            marker.directions = result;
            resolve(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    });
  }
};

export const getData = (withOptional: boolean): IOutputData => {
  const formattedData = getFormattedData();
  const builtData = buildData(withOptional, formattedData);
  builtData.outPutString = getOutPutString(builtData, withOptional);
  return builtData;
};

export const getRouteData = async (data: IOutputData): Promise<IOutputData> => {
  const directionsService = new google.maps.DirectionsService();
  for (const marker of data.markers!) {
    await getDirections(marker, directionsService);
  }

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};
