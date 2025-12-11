const input = `
162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689`

const rows = input.trim().split("\n")
const nums = rows.map(row => row.split(',').map(r => parseInt(r)))

let diff = Infinity

let pair = []

for (const [x,y,z] of nums) {
    for (const [x2, y2, z2] of nums) {
        if(x == x2 && y == y2 && z == z2) continue
    //    √[(x2 - x1)² + (y2 - y1)² + (z2 - z1)²].
        const c = Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2) + Math.pow(z2 - z, 2))
        diff = Math.min(c, diff)
        if(diff === c) {
            pair = [[x,y,z], [x2,y2,z2]]
        }
        
        
    } 
}

console.log(pair)