import { Averages } from "../models/creation/Averages";
import { BrokenSpeedLimit } from "../models/creation/BrokenSpeedLimit";
import { OptionalData } from "../models/creation/OptionalData";
import { FormattedData } from "../models/FormattedData";
import { IMarker } from "./IMarker";


export interface IOutputData {
  formattedData: FormattedData[];
  fullName?: string;
  averages?: Averages;
  brokenSpeedLimit?: BrokenSpeedLimit;
  optionalData?: OptionalData;
  outPutString?: Array<string>;
  markers?: Array<IMarker>;
}
