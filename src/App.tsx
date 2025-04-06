import { useState } from "react";
import { carsData, Car } from "./data/cars";
import CarCard from "./components/CarCard";
import CarDetails from "./components/CarDetails";
import AddCarForm from "./components/AddCarForm";

function App() {
  const [cars, setCars] = useState<Car[]>(carsData);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleAddCar = (newCar: Omit<Car, "id">) => {
    setCars([...cars, { ...newCar, id: Date.now() }]);
  };

  const handleDeleteCar = (id: number) => {
    setCars(cars.filter((car) => car.id !== id));
    if (selectedCar?.id === id) setSelectedCar(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">🚗 Concesionaria React</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onSelect={() => setSelectedCar(car)}
              onDelete={() => handleDeleteCar(car.id)}
            />
          ))}
        </div>

        <div>
          <CarDetails car={selectedCar} />
          <AddCarForm onAddCar={handleAddCar} />
        </div>
      </div>
    </div>
  );
}

export default App;
