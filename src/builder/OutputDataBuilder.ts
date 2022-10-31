import { IOutputData } from "../interfaces/IOutputData";
import { FormattedData } from "../models/FormattedData";
import { AveragesService } from "../services/AveragesService";
import { BrokenSpeedLimitService } from "../services/BrokenSpeedLimitService";
import { MarkersService } from "../services/MarkersService";
import { OptionalDataService } from "../services/OptionalDataService";
import { IOutputDataBuilder } from "./IOutputDataBuilder";

export class OutputDataBuilder implements IOutputDataBuilder {
  private readonly outPutData: IOutputData;
  private readonly _averagesService: AveragesService;
  private readonly _brokenSpeedLimitService: BrokenSpeedLimitService;
  private readonly _formattedData: FormattedData[];
  private readonly _optionalDataService: OptionalDataService;
  private readonly _markersService: MarkersService;

  constructor(formattedData: FormattedData[]) {
    this.outPutData = {
      formattedData: formattedData,
    };

    this._formattedData = formattedData;
    this._averagesService = new AveragesService();
    this._brokenSpeedLimitService = new BrokenSpeedLimitService();
    this._optionalDataService = new OptionalDataService();
    this._markersService = new MarkersService();
  }

  withDefaults(): OutputDataBuilder {
    this.outPutData.fullName = `${this._formattedData[0].firstName} ${this._formattedData[0].lastName}`;
    this.outPutData.averages = this._averagesService.create(
      this._formattedData
    );
    this.outPutData.brokenSpeedLimit = this._brokenSpeedLimitService.create(
      this._formattedData
    );
    return this;
  }

  withOptional(): OutputDataBuilder {
    this.outPutData.optionalData = this._optionalDataService.create(
      this._formattedData
    );
    this.outPutData.markers = this._markersService.create(this._formattedData);

    return this;
  }

  build(): IOutputData {
    return this.outPutData;
  }
}
