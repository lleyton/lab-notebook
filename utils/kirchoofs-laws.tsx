export const data = [
  {
    label: "V1, I1",
    volts: 0.52,
    milliAmp: 0.52,
    resistance: 1,
  },
  {
    label: "V2, I2",
    volts: 2.56,
    milliAmp: 0.5,
    resistance: 5.12,
  },
  {
    label: "V3, I3",
    volts: 0.22,
    milliAmp: 0.02,
    resistance: 11,
  },
  {
    label: "V4, I4",
    volts: 2.33,
    milliAmp: 0.02,
    resistance: 116.5,
  },
  {
    label: "V5, I5",
    volts: 0.05,
    milliAmp: 0.52,
    resistance: 0.096,
  },
  {
    label: "Vs, Is",
    volts: 3.15,
    milliAmp: 0.52,
    resistance: 6.058,
  },
];

export const source = data[5].volts;
export const loop1 = data[0].volts + data[1].volts + data[4].volts;
export const loop1Result = source - loop1;

export const loop2 = data[2].volts + data[3].volts + data[4].volts;
export const loop2Result = source - loop2;

export const nodeA = data[5].milliAmp - data[0].milliAmp;
export const nodeB = data[0].milliAmp - (data[1].milliAmp + data[2].milliAmp);
export const nodeC = data[2].milliAmp - data[3].milliAmp;
export const nodeD = data[1].milliAmp + data[3].milliAmp - data[4].milliAmp;
