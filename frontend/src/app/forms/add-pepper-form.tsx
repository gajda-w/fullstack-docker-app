"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { addPepperAction } from "../actions/add-pepper-action";

export const AddPepperForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddPepperSchema>();

  const onSubmit: SubmitHandler<AddPepperSchema> = async (data) => {
    const response = await addPepperAction(data);

    if (response?.error) {
      console.error(response.error);
      return;
      // TODO: toast error
    }

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          placeholder="Name"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-700"
        />
        {errors.name && (
          <span className="text-red-500 text-xs mt-1">
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="type"
          className="block text-sm font-semibold text-gray-700"
        >
          Type
        </label>
        <input
          id="type"
          {...register("type")}
          placeholder="Type"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-700"
        />
        {errors.type && (
          <span className="text-red-500 text-xs mt-1">
            {errors.type.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="color"
          className="block text-sm font-semibold text-gray-700"
        >
          Color
        </label>
        <input
          id="color"
          {...register("color")}
          placeholder="Color"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-700"
        />
        {errors.color && (
          <span className="text-red-500 text-xs mt-1">
            {errors.color.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="height"
          className="block text-sm font-semibold text-gray-700"
        >
          Height
        </label>
        <input
          id="height"
          {...register("height")}
          placeholder="Height"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-700"
        />
        {errors.height && (
          <span className="text-red-500 text-xs mt-1">
            {errors.height.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="yield"
          className="block text-sm font-semibold text-gray-700"
        >
          Yield
        </label>
        <input
          id="yield"
          {...register("yield")}
          placeholder="Yield"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-700"
        />
        {errors.yield && (
          <span className="text-red-500 text-xs mt-1">
            {errors.yield.message}
          </span>
        )}
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export const addPepperSchema = z.object({
  name: z.string(),
  type: z.string(),
  color: z.string(),
  height: z.string(),
  yield: z.string(),
});
export type AddPepperSchema = z.infer<typeof addPepperSchema>;
