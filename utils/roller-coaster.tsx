export const loopRadius = 0.2064

export const withLoop = [
    { time: 0.42, distance: 0.63 },
    { time: 0.43, distance: 0.60 },
    { time: 0.46, distance: 0.49 },
    { time: 0.41, distance: 0.61 },
    { time: 0.40, distance: 0.59 }
]

export const angleOfElevation = 28

export const withLoopAverage = {
    time: withLoop.map(row => row.time).reduce((a, b) => a + b) / withLoop.length,
    distance: withLoop.map(row => row.distance).reduce((a, b) => a + b) / withLoop.length
}

const degreesToRadians = (degrees: number) => degrees * (Math.PI / 180)
export const realRequiredVelocity = withLoopAverage.distance / (Math.cos(degreesToRadians(angleOfElevation)) * withLoopAverage.time)

export const theoreticalRequiredVelocity = Math.sqrt(9.8 * loopRadius)

export const minimumHeight = 2.5 * loopRadius