import { useState } from "react";
import { Car } from "../data/cars";

type AddCarFormProps = {
  onAddCar: (newCar: Omit<Car, "id">) => void;
};

const AddCarForm = ({ onAddCar }: AddCarFormProps) => {
  const [formData, setFormData] = useState<Omit<Car, "id">>({
    brand: "",
    model: "",
    color: "",
    year: 2023,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCar(formData);
    setFormData({ brand: "", model: "", color: "", year: 2023 });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-2 bg-gray-50 rounded">
      <h3 className="font-semibold mb-2">Agregar nuevo auto</h3>
      <input name="brand" value={formData.brand} onChange={handleChange} placeholder="Marca" required className="block mb-1 w-full"/>
      <input name="model" value={formData.model} onChange={handleChange} placeholder="Modelo" required className="block mb-1 w-full"/>
      <input name="color" value={formData.color} onChange={handleChange} placeholder="Color" required className="block mb-1 w-full"/>
      <input name="year" value={formData.year} onChange={handleChange} type="number" placeholder="Año" required className="block mb-1 w-full"/>
      <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded mt-2">Agregar</button>
    </form>
  );
};

export default AddCarForm;
