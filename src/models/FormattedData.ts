import { getDistanceBetweenTwoPoints } from "calculate-distance-between-coordinates";
import { CoordinateModel } from "./CoordinateModel";
import { IFormattedData } from "../interfaces/IFormattedData";
var randomColor = require('random-color');

export class FormattedData implements IFormattedData {
    from: CoordinateModel;
    to: CoordinateModel;
    priceOfFuelPerMile: number;
    timeString: string;
    firstName: string;
    lastName: string;
    id:number;
    colour: string;

    constructor(from: string, to: string, priceString: string, time: string, firstName: string,lastName: string, id:number) {
        this.from = new CoordinateModel(from);
        this.to = new CoordinateModel(to);
        this.priceOfFuelPerMile = +priceString;
        this.timeString = time;
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.colour = randomColor().hexString();
    }

    get timeTaken(): number {
        const [hours, minutes, seconds] = this.timeString.split(':');
        return (+hours) + (+minutes) / 60.0 + (+seconds) / 3600.0;
    }

    get distance(): number {
        return getDistanceBetweenTwoPoints(this.from.coordinate, this.to.coordinate, "mile");
    }

    get speed(): number {
        return this.distance / this.timeTaken;
    }

    get billable(): boolean {
        return !(this.speed > 70);
    }

    get cost(): number {
        return this.priceOfFuelPerMile * this.distance;
    }

    get speedString(): string {
        return this.speed.toFixed(0);
    }

    get costString(): string {
        return this.cost.toFixed(2);
    }

    get distanceString(): string {
        return this.distance.toFixed(2);
    }
}

