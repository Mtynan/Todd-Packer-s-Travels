import { ICreate } from "../interfaces/creation/ICreate";
import { IFormattedData } from "../interfaces/IFormattedData";
import { OutPutString } from "../models/creation/OutputString";

export class OutPutStringService implements ICreate<OutPutString> {
  private generateString = (data: IFormattedData, id: number): Array<string> => {
    return new Array<string>();
  };

  create = (data: IFormattedData[]): OutPutString => {
    const test = new Array<string>();
    return new OutPutString(test)

  };
}
