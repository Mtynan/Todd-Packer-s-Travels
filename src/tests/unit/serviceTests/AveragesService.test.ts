import { Averages } from "../../../models/creation/Averages";
import { GetBillableData } from "../../../utils/generateTestdata";
import { AveragesService } from "../../../services/AveragesService";

describe("Creates Averages", () => {
  test("Creation", () => {
    const data = GetBillableData();
    const averagesService = new AveragesService();
    const averages1 = averagesService.create([data]);

    expect(averages1.averageSpeed).toBe("35.23");
    expect(averages1.totalDistance).toBe("52.85");
    expect(averages1.averagePricePerMile).toBe("£0.15");
    expect(averages1 instanceof Averages).toBe(true);
  });
});
