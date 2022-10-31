export class BrokenSpeedLimit {
  timesBroken: number;
  reimburstmentLost: string;

  constructor(_timesBroken: number, _reimburstmentLost: string) {
    this.timesBroken = _timesBroken;
    this.reimburstmentLost = _reimburstmentLost;
  }
}
