import { Coordinate } from "calculate-distance-between-coordinates";
import { ICoordinate } from "../interfaces/ICoordinate";
import { ICoordinateModel } from "../interfaces/ICoordinateModel";

export class CoordinateModel implements ICoordinateModel {
    latLongString: string;
    
    constructor(latLongString: string) {
      this.latLongString = latLongString;
    }

    get coordinate(): ICoordinate {
      return { lat: +this.latLongString.split(",")[1], lon: +this.latLongString.split(",")[0] }
    }
  }