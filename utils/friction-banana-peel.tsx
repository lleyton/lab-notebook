const rawBananaPeelData = [
  { mass: 129.8, force: 0.5 },
  { mass: 229.8, force: 1.5 },
  { mass: 329.8, force: 2.3 },
  { mass: 429.8, force: 3.3 },
  { mass: 529.8, force: 3.5 },
  { mass: 529.8, force: 4.5 },
];

const rawDoorstopData = [
  { mass: 210, force: 1.5 },
  { mass: 310, force: 1.7 },
  { mass: 310, force: 2 },
  { mass: 410, force: 2.5 },
  { mass: 510, force: 3 },
  { mass: 610, force: 3.5 },
];

const rawSockData = [
  { mass: 128, force: 0.5 },
  { mass: 228, force: 1.5 },
  { mass: 328, force: 2.3 },
  { mass: 428, force: 3.3 },
  { mass: 528, force: 3.5 },
];

const gToKG = (g: number) => g / 1000;
const KGToN = (kg: number) => kg * 9.8;
const calculateData = (data: { mass: number; force: number }[]) =>
  data.map((row) => ({ ...row, weight: KGToN(gToKG(row.mass)) }));

export const bananaPeelData = calculateData(rawBananaPeelData);
export const doorstopData = calculateData(rawDoorstopData);
export const sockData = calculateData(rawSockData);
