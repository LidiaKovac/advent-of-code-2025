import { cleanAndSplitInput, readFile, stringToMatrix } from "../utils/index.js";

// const input = `
// ..@@.@@@@.
// @@@.@.@.@@
// @@@@@.@.@@
// @.@@@@..@.
// @@.@@@@.@@
// .@@@@@@@.@
// .@.@.@.@@@
// @.@@@.@@@@
// .@@@@@@@@.
// @.@.@@@.@.`

const input = readFile(import.meta.dirname)


let m = stringToMatrix(input)
console.log(m)

//main directions
const checkTop = (x, y) => m[y - 1] ? m[y - 1][x] : null
const checkBottom = (x, y) => m[y + 1] ? m[y + 1][x] : null
const checkLeft = (x, y) => m[y][x - 1] ? m[y][x - 1] : null
const checkRight = (x, y) => m[y][x + 1] ? m[y][x + 1] : null

//diagonals
const checkTopLeft = (x, y) => (m[y - 1] && m[y - 1][x - 1]) ? m[y - 1][x - 1] : null
const checkTopRight = (x, y) => (m[y - 1] && m[y - 1][x + 1]) ? m[y - 1][x + 1] : null
const checkBottomLeft = (x, y) => (m[y + 1] && m[y + 1][x - 1]) ? m[y + 1][x - 1] : null
const checkBottomRight = (x, y) => (m[y + 1] && m[y + 1][x + 1]) ? m[y + 1][x + 1] : null

const allDirs = [checkTop, checkBottom, checkLeft, checkRight, checkTopLeft, checkTopRight, checkBottomLeft, checkBottomRight]

const checkLessThanFour = (x, y) => {
    let rolls = 0
    for (const cb of allDirs) {
        if (cb(x, y) === "@") rolls++
    }
    return rolls < 4
    // return allDirs.map(cb => cb(x,y)).filter(c => c=="@").length < 4
}
let count = 0
let tobermoved = null
while (tobermoved !== 0) {
    tobermoved = 0
    for (let y = 0; y < m.length; y++) {
        const row = m[y];
        for (let x = 0; x < row.length; x++) {
            const cell = row[x];
            if (cell === "@" && checkLessThanFour(x, y)) {
                m[y][x] = "."
                tobermoved++
                count++
            }

        }
    }
    console.log(m)
}

console.log("count", count)