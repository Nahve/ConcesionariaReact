import { Car } from "../data/cars";

type CarCardProps = {
  car: Car;
  onSelect: () => void;
  onDelete: () => void;
};

const CarCard = ({ car, onSelect, onDelete }: CarCardProps) => {
  return (
    <div className="border p-2 rounded shadow">
      <h2 className="font-bold">
        {car.brand} {car.model}
      </h2>
      <p>Color: {car.color}</p>
      <p>Año: {car.year}</p>
      <button className="text-blue-500" onClick={onSelect}>
        Ver Detalles
      </button>
      <button className="text-red-500 ml-2" onClick={onDelete}>
        Eliminar
      </button>
    </div>
  );
};

export default CarCard;
