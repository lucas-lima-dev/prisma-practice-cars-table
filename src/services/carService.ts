import notFoundError from "../errors/notFoundError.js";
import conflictError from "../errors/conflictError.js";
import carRepository from "../repository/carRepository.js";
import { CarsEntity,Cars, NewCar } from "../protocols.js";

async function getCars() {
  const cars = await carRepository.getCars();
  return cars;
}

async function getCar(id: number) {
  const car = await carRepository.getCar(id);
  if (!car) {
    throw notFoundError();
  }

  return car;
}

async function upsert(cars: NewCar) {
  const car = await carRepository.getCarWithLicensePlate(cars.licensePlate);
  if (!car.id) {
    throw conflictError(`Car with license plate ${cars.licensePlate} already registered.`)
  }

  await carRepository.upsert(cars);
}

async function deleteCar(id: number) {
  await getCar(id);
  await carRepository.deleteCar(id);
}

const carService = {
  getCars,
  getCar,
  upsert,
  deleteCar
}

export default carService;