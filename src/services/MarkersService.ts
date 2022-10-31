import { ICreate } from "../interfaces/creation/ICreate";
import { IFormattedData } from "../interfaces/IFormattedData";
import { MarkerModel } from "../models/creation/MarkerModel";


export class MarkersService implements ICreate<MarkerModel[]> {
  private generateMarker = (data: IFormattedData, id: number): MarkerModel => {
    return new MarkerModel(
      id,
      new google.maps.LatLng(
        data?.from.coordinate.lat!,
        data?.from.coordinate.lon!
      ),
      new google.maps.LatLng(
        data?.to.coordinate.lat!,
        data?.to.coordinate.lon!
      ),
      data.colour
    );
  };

  create = (data: IFormattedData[]): MarkerModel[] => {
    const markers = data.map((x, i) => {
      return this.generateMarker(x, i);
    });

    return markers;
  };
}
