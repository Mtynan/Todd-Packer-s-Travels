import { OptionalModel } from "./OptionalModel";

export class OptionalData {
  mostExpensive: OptionalModel;
  leastExpensive: OptionalModel;

  constructor(_mostExpensive: OptionalModel, _leastExpensive: OptionalModel) {
    this.mostExpensive = _mostExpensive;
    this.leastExpensive = _leastExpensive;
  }
}
