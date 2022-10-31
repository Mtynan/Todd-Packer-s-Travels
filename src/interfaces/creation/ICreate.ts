import { IFormattedData } from "../IFormattedData";

export interface ICreate<T> {
  create: (data: IFormattedData[]) => T;
}
