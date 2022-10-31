import { IOutputData } from "../interfaces/IOutputData";
import { OutputDataBuilder } from "./OutputDataBuilder";

export interface IOutputDataBuilder {
    withDefaults: () => OutputDataBuilder;
    withOptional: () => OutputDataBuilder;
    build: () => IOutputData;
  }