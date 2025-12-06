import { readFile } from "../utils/index.js"
const input = `
987654321111111
811111111111119
234234234234278
818181911112111
`
// const input = readFile(import.meta.dirname)

const rows = input.trim().split("\n").map(r => r.split(""))
console.log(rows.forEach(r => {
    const map = []
    r.forEach((r, i) => map.push(`[${r}, ${i}]`))
    console.log(map)
    // console.log(map)
    let final = ""
    const maxes = map.toSorted((a, b) => b.split("[")[1].split(",")[0] - a.split("[")[1].split(",")[0]).slice(0, 12)
    // console.log(maxes)
    for (let i = 0; i < r.length; i++) {
        const l = r[i]
        console.log(maxes, l)
        if (maxes.includes(`[${l}, ${i}]`)) {
            final += l
        }
        // const found = r.findIndex(l => l == max)
        // final[found] = max
        // r[found] = null
        // // console.log("Looking for", max, "in ", r, "found @", found)
    }

    console.log("final:", final)
}))



const maxes = []
for (let i = 0; i < rows.length; i++) {
    let max = -Infinity
    for (let y = 0; y < rows[i].length; y++) {
        for (let z = y; z < rows[i].length; z++) {
            if (y == z) continue
            // console.log(rows[i][y], rows[i][z])
            const sum = rows[i][y] + rows[i][z]
            if (sum > max) {
                max = sum
            }
        }
    }
    maxes.push(max)
}

console.log(maxes.reduce((a, b) => parseInt(a) + parseInt(b), 0))


