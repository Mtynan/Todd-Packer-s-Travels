import { Coordinate } from "calculate-distance-between-coordinates";
import { ICoordinateModel } from "./ICoordinateModel";
import { CoordinateModel } from "../models/CoordinateModel";

export interface IMarker {
  id?: number;
  from: google.maps.LatLng;
  to: google.maps.LatLng;
  colour: string;
  directions? : google.maps.DirectionsResult | null
  readonly path: Array<google.maps.LatLng>;
}
