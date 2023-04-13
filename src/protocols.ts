
export type CarsEntity = {
    id: number,
    model: string,
    licensePlate: string,
    year: number,
    color: string,
}

export type Cars = Omit<CarsEntity, "id">

export type NewCar = Partial<CarsEntity>