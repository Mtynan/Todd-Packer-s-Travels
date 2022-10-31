import { MarkerModel } from "../../../models/creation/MarkerModel";
import { OptionalData } from "../../../models/creation/OptionalData";
import { OptionalModel } from "../../../models/creation/OptionalModel";
import { GetBillableData, GetCheapest, GetSpeedViolationData } from "../../../utils/generateTestdata";
import { MarkersService } from "../../../services/MarkersService";
import { OptionalDataService } from "../../../services/OptionalDataService";

describe("Creates Markers", () => {
  test("Creation of markers", () => {
    const data = GetBillableData();
    const data2 = GetCheapest();
    const optionalDataService = new OptionalDataService();
    const optionalData = optionalDataService.create([data, data2]);
    
  
    expect(optionalData.leastExpensive.cost).toBe("1.96");
    expect(optionalData.leastExpensive.from).toBe("53.801277, -1.548567");
    expect(optionalData.leastExpensive.to).toBe("53.645792, -1.785035");
    expect(optionalData.leastExpensive.miles).toBe("19.55");
    expect(optionalData.mostExpensive.cost).toBe("7.93");
    expect(optionalData.mostExpensive.from).toBe("53.801277, -1.548567");
    expect(optionalData.mostExpensive.miles).toBe("52.85");
    expect(optionalData.mostExpensive.to).toBe("53.483959, -2.244644");
    expect(optionalData instanceof OptionalData).toBe(true);
    expect(optionalData.leastExpensive instanceof OptionalModel).toBe(true);
    expect(optionalData.mostExpensive instanceof OptionalModel).toBe(true);
  });

 
});
