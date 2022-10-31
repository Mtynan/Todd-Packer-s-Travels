import { IMarker } from "../../interfaces/IMarker";

export class MarkerModel implements IMarker {
    id?: number;
    from: google.maps.LatLng;
    to: google.maps.LatLng;
    colour: string;
    directions? : google.maps.DirectionsResult | null
    
    constructor(_id: number, _from:google.maps.LatLng, _to: google.maps.LatLng, _colour: string) {
      this.from = _from;
      this.to = _to;
      this.colour = _colour;
      this.id = _id;
    }

    get path(): Array<google.maps.LatLng> {
      return  [
        this.from,
        this.to
      ]
    }
  }