import { CoordinateModel } from "../models/CoordinateModel";

export interface IFormattedData {
  id: number;
  from: CoordinateModel;
  to: CoordinateModel;
  priceOfFuelPerMile: number;
  timeString: string;
  firstName: string;
  lastName: string;
  colour: string;

  readonly timeTaken: number;
  readonly distance: number;
  readonly speed: number;
  readonly billable: boolean;
  readonly cost: number;

  readonly speedString: string;
  readonly distanceString: string;
  readonly costString: string;
}
