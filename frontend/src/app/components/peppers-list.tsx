import { getAllPeppers } from "../../../infrastructure/get-all-peppers";
import { PepperCard } from "./peppers-card";

export const PeppersList = async () => {
  const response = await getAllPeppers();

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {response.data.map((pepper) => (
        <PepperCard key={pepper.id} pepper={pepper} />
      ))}
    </div>
  );
};
