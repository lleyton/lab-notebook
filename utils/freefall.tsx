const rawData = [1, 0.86, 0.79, 0.93, 0.79];

export const averageTime = rawData.reduce((a, b) => a + b) / rawData.length;
export const averageDistance = (1 / 2) * 9.8 ** 2 * averageTime ** 2;
