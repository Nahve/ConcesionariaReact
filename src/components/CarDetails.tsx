import { Car } from "../data/cars";

type CarDetailsProps = {
  car: Car | null;
};

const CarDetails = ({ car }: CarDetailsProps) => {
  if (!car) return <p>Selecciona un auto para ver los detalles</p>;

  return (
    <div className="border p-2 mb-4 bg-gray-100 rounded">
      <h3 className="font-bold text-lg">Detalles del auto</h3>
      <p>Marca: {car.brand}</p>
      <p>Modelo: {car.model}</p>
      <p>Color: {car.color}</p>
      <p>Año: {car.year}</p>
    </div>
  );
};

export default CarDetails;
