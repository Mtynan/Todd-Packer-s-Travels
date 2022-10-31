import { FormattedData } from "../models/FormattedData";

export const  GetBillableData = () => {
    const data = new FormattedData("53.801277, -1.548567", "53.483959, -2.244644","0.15","01:30:00", "Test", "Data", 1);
    data.colour = '#e0a56d';
    return data   
}

export const  GetSpeedViolationData = () => {
    const data = new FormattedData("53.801277, -1.548567", "53.483959, -2.244644","0.15","00:10:00", "Test", "Data", 2);
    data.colour = '#e0a56d';
    return data   
}

export const GetCheapest = () => {
    const data = new FormattedData("53.801277, -1.548567", "53.645792, -1.785035","0.10","00:10:00", "Test", "Data", 2);
    data.colour = '#e0a56d';
    return data   
}