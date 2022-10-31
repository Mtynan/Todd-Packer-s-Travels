export class OptionalModel  {
  from: string;
  to: string;
  miles: string;
  cost: string;

  constructor(_from: string, _to: string, _miles: string, _cost: string) {
    this.from = _from;
    this.to = _to;
    this.miles = _miles;
    this.cost = _cost;
  
  }
}