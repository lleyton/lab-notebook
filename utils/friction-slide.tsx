const slideHeight = 1.05;
const slideLength = 2.36;

const timings = [2.11, 1.52, 1.68];
const gravity = 9.8;

const theta = Math.asin(slideHeight / slideLength);
const accelerationParallel = (time: number) =>
  slideLength / ((1 / 2) * time ** 2);

const coefficentOfFriction = (accelerationParallel: number) =>
  -(
    (accelerationParallel - gravity * Math.sin(theta)) /
    (gravity * Math.cos(theta))
  );

export const data = timings.map((t) =>
  coefficentOfFriction(accelerationParallel(t))
);
