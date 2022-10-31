export interface IData {
  firstName: string;
  lastName: string;
  travelled: ITravelled[];
}

export interface ITravelled {
  from: string;
  to: string;
  priceOfFuelPerMile: string;
  timeTaken: string;
}
