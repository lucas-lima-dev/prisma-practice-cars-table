import prisma from "../config/database.js";
import { Cars, CarsEntity, NewCar } from "../protocols.js";

async function getCars() {
  const data = await prisma.cars.findMany()
  return data
  // const data = await db.query(`SELECT * FROM cars`);
  // return data.rows;
}

async function getCar(id: number) {
  const data = prisma.cars.findFirst({
    where: {
      id
    }
  })
  return data
  // const data = await db.query(`SELECT * FROM cars WHERE id = $1`, [id]);
  // return data.rows[0];
}

async function getCarWithLicensePlate(licensePlate: string) {
  const data = prisma.cars.findFirst({
    where: {
      licensePlate
    }
  })

  return data
  // const data = await db.query(`SELECT * FROM cars WHERE "licensePlate" = $1`, [licensePlate]);
  // return data.rows[0];
}
async function upsert(cars: NewCar) {
  return prisma.cars.upsert({
    where: {
      id: cars.id || 0,
    },
    create: cars as Cars,
    update: cars
  })
}
async function createCar(cars: Cars) {
    await prisma.cars.create({
      data: cars
    })
//   await db.query(
//     `INSERT INTO cars (model, "licensePlate", year, color)
//      VALUES ($1, $2, $3, $4)`,
//     [model, licensePlate, year, color]
//   );
}

async function deleteCar(id: number) {
  await prisma.cars.delete({
    where: {
      id
    }
  })
  // await db.query(`DELETE FROM cars WHERE id = $1`, [id]);
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  upsert,
  deleteCar
}

export default carRepository;