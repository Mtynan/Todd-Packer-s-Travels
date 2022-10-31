import { BrokenSpeedLimit } from "../../../models/creation/BrokenSpeedLimit";
import { GetBillableData, GetSpeedViolationData } from "../../../utils/generateTestdata";

import { BrokenSpeedLimitService } from "../../../services/BrokenSpeedLimitService";

describe("Creates Broken speed limit", () => {
  test("Creation of speed limit - billable", () => {
    const data = GetBillableData();
    const brokenSpeedLimitService = new BrokenSpeedLimitService();
    const limits = brokenSpeedLimitService.create([data]);

    expect(limits.reimburstmentLost).toBe("0.00");
    expect(limits.timesBroken).toBe(0);
    expect(limits instanceof BrokenSpeedLimit).toBe(true);
  });

  test("Creation of speed limit - not billable", () => {
    const data = GetSpeedViolationData();
    const brokenSpeedLimitService = new BrokenSpeedLimitService();
    const limits = brokenSpeedLimitService.create([data]);

    expect(limits.reimburstmentLost).toBe("7.93");
    expect(limits.timesBroken).toBe(1);
    expect(limits instanceof BrokenSpeedLimit).toBe(true);
  });
});
