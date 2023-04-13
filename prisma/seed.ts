// import prisma from "../src/config/database"
// import * as fs from "fs"
// import { parse } from "node-sql-parser";

// // const parse = new Parser()

// async function main() {
//     const sql = fs.readFileSync("src/config/cars.sql", "utf8");
//     const parsed = parse(sql)

//     const cars = parsed.statements[0].values.map((values) => ({
//         model: values[0].value,
//         "licensePlate": values[1].value,
//         year: values[2].value,
//         color: values[3].value,
//     }));

//     await prisma.cars.createMany({data: cars})

// }

// main()
//     .then(() => console.log("Sucess"))
//     .catch((e) => {
//       console.log(e)
//       process.exit(1)
//     })
    