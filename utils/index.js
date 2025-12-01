import {readFileSync} from "fs"
import { join } from "path"
export const readFile = (dirname) => {
    return readFileSync(join(dirname, "./input.txt"), "utf-8")
}