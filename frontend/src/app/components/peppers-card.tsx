import { Pepper } from "../../../objects/pepper";

export const PepperCard = ({ pepper }: { pepper: Pepper }) => {
  return (
    <div
      className="w-72 border border-green-400 bg-white shadow-lg rounded-xl p-5 transition-transform transform hover:scale-105 hover:shadow-2xl"
      key={pepper.id}
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-green-700">{pepper.name}</h2>
      </div>
      <span className="inline-block bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
        {pepper.type}
      </span>
      <div className="mt-3 text-gray-600">
        <p>
          <strong className="text-green-700">Color:</strong>
          {pepper.color}
        </p>
        <p>
          <strong className="text-green-700">Height:</strong>
          {pepper.height}
        </p>
        <p>
          <strong className="text-green-700">Yield:</strong>
          {pepper.yield}
        </p>
      </div>
    </div>
  );
};
