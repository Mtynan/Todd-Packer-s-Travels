import { ICreate } from "../interfaces/creation/ICreate";
import { IFormattedData } from "../interfaces/IFormattedData";
import { Averages } from "../models/creation/Averages";
import { formatter } from "../utils/formatter";

export class AveragesService implements ICreate<Averages> {
  private getAverageSpeed = (data: IFormattedData[]): string => {
    return (
      data.reduce(
        (previousValue, currentValue) => previousValue + currentValue.speed,
        0
      ) / data.length
    ).toFixed(2);
  };

  private getTotalDistance = (data: IFormattedData[]): string => {
    return data
      .reduce(
        (previousValue, currentValue) => previousValue + currentValue.distance,
        0
      )
      .toFixed(2);
  };

  private getAveragePricePerMile = (data: IFormattedData[]): string => {
    const avg =
      data.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.priceOfFuelPerMile,
        0
      ) / data.length;

    return formatter.format(avg);
  };

  create = (data: IFormattedData[]): Averages => {
    const averageSpeed = this.getAverageSpeed(data);
    const totalDistance = this.getTotalDistance(data);
    const averagePricePerMile = this.getAveragePricePerMile(data);

    return new Averages(averageSpeed, totalDistance, averagePricePerMile);
  };
}
