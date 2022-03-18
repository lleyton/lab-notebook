const medicineBallMass = 7
const receiverMass = 70

export const runs = [
    { time: 4.7, distance: 0.50 },
    { time: 4.38, distance: 0.46 },
    { time: 5.28, distance: 0.35 },
    { time: 1.22, distance: 0.05 },
    { time: 6.02, distance: 0.42 },
    { time: 0.86, distance: 0.20 }
]

export const averageRun = {
    time: runs.map(row => row.time).reduce((a, b) => a + b) / runs.length,
    distance: runs.map(row => row.distance).reduce((a, b) => a + b) / runs.length
}

export const velocityBeforeImpact = ((medicineBallMass + receiverMass) * averageRun.distance) / medicineBallMass