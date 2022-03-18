const weight = 842.8
const heightOfStep = 0.2
const steps = 12
const stairHeight = heightOfStep * steps
const timeOfClimbs = [
    4.47,
    3.74,
    3.72,
    4.02,
    4.12,
    4.06,
    3.27,
    4.21,
    4.33,
    3.81,
]

export const workPerClimb = weight * stairHeight

const powerPerClimb = (work: number, time: number) => work / time
const powerForClimbs = timeOfClimbs.map(time => powerPerClimb(workPerClimb, time))
export const averagePower = powerForClimbs.reduce((a, b) => a + b) / powerForClimbs.length

export const amountOfPeanutsBurned = workPerClimb / (24 * 1000)
