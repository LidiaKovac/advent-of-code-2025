// const input = `
// 987654321111111
// 811111111111119
// 234234234234278
// 818181911112111
// `

import { readFile } from "../utils/index.js"


const input = readFile(import.meta.dirname)

const rows = input.trim().split("\n").map(r => r.split(""))

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


