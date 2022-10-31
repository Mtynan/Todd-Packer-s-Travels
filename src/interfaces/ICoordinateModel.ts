import { Coordinate } from "calculate-distance-between-coordinates";
import { ICoordinate } from "./ICoordinate";

export interface ICoordinateModel {
  latLongString: string;
  readonly coordinate: ICoordinate;
}
