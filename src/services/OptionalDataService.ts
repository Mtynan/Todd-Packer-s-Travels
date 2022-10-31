import { ICreate } from "../interfaces/creation/ICreate";
import { IFormattedData } from "../interfaces/IFormattedData";
import { OptionalData } from "../models/creation/OptionalData";
import { OptionalModel } from "../models/creation/OptionalModel";

export class OptionalDataService implements ICreate<OptionalData> {
  private getMostExpensive = (data: IFormattedData[]): OptionalModel => {
    const { cost, distance, from, to } = data.reduce((prev, current) =>
      +prev.cost > +current.cost ? prev : current
    );
    return new OptionalModel(
      from.latLongString,
      to.latLongString,
      distance.toFixed(2),
      cost.toFixed(2)
    );
  };

  private getLeastExpensive = (data: IFormattedData[]): OptionalModel => {
    const { cost, distance, from, to } = data.reduce((prev, current) =>
      +prev.cost < +current.cost ? prev : current
    );
    return new OptionalModel(
      from.latLongString,
      to.latLongString,
      distance.toFixed(2),
      cost.toFixed(2)
    );
  };

  create = (data: IFormattedData[]): OptionalData => {
    const mostExpensive = this.getMostExpensive(data);
    const leastExpensive = this.getLeastExpensive(data);

    return new OptionalData(mostExpensive, leastExpensive);
  };
}
