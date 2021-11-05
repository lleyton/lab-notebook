const rawData = [
  { deltaX: 17.2, time: 1.23 },
  { deltaX: 17.2, time: 1.38 },
  { deltaX: 17.2, time: 1.5 },
  { deltaX: 15.64, time: 1.46 },
  { deltaX: 18.75, time: 1.75 },
  { deltaX: 16.84, time: 1.94 },
  { deltaX: 18.86, time: 1.79 },
  { deltaX: 14.53, time: 2.26 },
  { deltaX: 15.65, time: 2.08 },
];

const radiansToDegrees = (radians: number) => (radians * 180) / Math.PI;

const calculateAngle = (deltaX: number, time: number) =>
  Math.atan((9.8 * time ** 2) / (2 * deltaX));

const calculateInitialVelocity = (
  deltaX: number,
  time: number,
  angle: number
) => deltaX / (Math.cos(angle) * time);

export const data = rawData.map((row) => {
  const radians = calculateAngle(row.deltaX, row.time);
  const degrees = radiansToDegrees(radians);
  const initialVelocity = calculateInitialVelocity(
    row.deltaX,
    row.time,
    radians
  );

  return {
    ...row,
    radians,
    degrees,
    initialVelocity,
  };
});
