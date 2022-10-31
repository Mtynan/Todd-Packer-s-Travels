import { BrokenSpeedLimit } from "../models/creation/BrokenSpeedLimit";
import { ICreate } from "../interfaces/creation/ICreate";
import { IFormattedData } from "../interfaces/IFormattedData";

export class BrokenSpeedLimitService implements ICreate<BrokenSpeedLimit> {
  private getTimesBroken = (data: IFormattedData[]): number => {
    return data.filter((x) => x.speed > 70).length;
  };

  private getreimburstmentLost = (data: IFormattedData[]): string => {
    return data
      .filter((x) => x.speed > 70)
      .reduce(
        (previousValue, currentValue) => previousValue + currentValue.cost,
        0
      )
      .toFixed(2);
  };

  create = (data: IFormattedData[]): BrokenSpeedLimit => {
    const timesBroken = this.getTimesBroken(data);
    const reimburstmentLost = this.getreimburstmentLost(data);

    return new BrokenSpeedLimit(timesBroken, reimburstmentLost);
  };
}
