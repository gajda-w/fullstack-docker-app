import { getAllPeppers } from "../infrastructure/get-all-peppers";
import { PepperCard } from "./pepper-card";

export const PepperList = async () => {
  const response = await getAllPeppers();

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {response.data.map((pepper) => (
        <PepperCard pepper={pepper} key={pepper.id} />
      ))}
    </div>
  );
};

export const PepperListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 h-screen">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          className="animate-pulse border border-green-400 bg-white shadow-lg rounded-xl p-5 transition-transform transform hover:scale-105 hover:shadow-2xl"
          key={index}
        ></div>
      ))}
    </div>
  );
};
