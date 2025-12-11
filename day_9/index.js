// const input = `
// 7,1
// 11,1
// 11,7
// 9,7
// 9,5
// 2,5
// 2,3
// 7,3`
import { readFile } from "../utils/index.js"

const input = readFile(import.meta.dirname)

const max =input.trim().split("\n").map(row => row.split(",").map(c => parseInt(c)))
console.log(max)

let maxSquare = 0

for (const [x,y] of max) {
    for (const [x2, y2] of max) {
        const area = (Math.max(x, x2) - Math.min(x, x2) + 1) * (Math.max(y, y2) - Math.min(y, y2) + 1)
        if(area > maxSquare) maxSquare = area
    }
}

console.log(maxSquare)