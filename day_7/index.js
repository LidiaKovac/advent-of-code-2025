import { readFile, stringToMatrix } from "../utils/index.js"

// const input = `
// .......S.......
// ...............
// .......^.......
// ...............
// ......^.^......
// ...............
// .....^.^.^.....
// ...............
// ....^.^...^....
// ...............
// ...^.^...^.^...
// ...............
// ..^...^.....^..
// ...............
// .^.^.^.^.^...^.
// ...............`

const input = readFile(import.meta.dirname)

const m = stringToMatrix(input)

//find S
let spos = m[0].findIndex((x) => x === "S")
console.log(spos)
m[1][spos] = "|"
let splits = 0
for (let y = 1; y < m.length; y++) {
    for (let x = 0; x < m[y].length; x++) {
        if(m[y][x] === "|") {
            if (m[y + 1]?.[x] === ".") {
                m[y + 1][x] = "|"
            } else if (m[y + 1]?.[x] === "^") {
                //split
                splits++
                m[y + 1][x - 1] = "|"
                m[y + 1][x + 1] = "|"
            }
        }
    }
  
  console.log(m.join("\n").replaceAll(",", ""))
}
console.log(splits)
