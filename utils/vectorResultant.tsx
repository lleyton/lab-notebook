const rawData = [
  { deltaX: 0.4, deltaY: 14 },
  { deltaX: 0, deltaY: 7 },
  { deltaX: 1.8, deltaY: 4.8 },
];

const radiansToDegrees = (radians: number) => (radians * 180) / Math.PI;

const calculateMagnitude = (deltaX: number, deltaY: number) =>
  Math.sqrt(deltaX ** 2 + deltaY ** 2);

const calculateAngle = (deltaX: number, magnitude: number) =>
  Math.asin(deltaX / magnitude);

export const data = rawData.map((row) => {
  const magnitude = calculateMagnitude(row.deltaX, row.deltaY);
  const radians = calculateAngle(row.deltaX, magnitude);
  const degrees = radiansToDegrees(radians);

  return {
    ...row,
    magnitude,
    radians,
    degrees,
  };
});

export const averageMagnitude =
  data.map((row) => row.magnitude).reduce((a, b) => a + b) / data.length;

export const averageDirectionDegrees =
  data.map((row) => row.degrees).reduce((a, b) => a + b) / data.length;

export const averageDirectionRadians =
  data.map((row) => row.radians).reduce((a, b) => a + b) / data.length;
