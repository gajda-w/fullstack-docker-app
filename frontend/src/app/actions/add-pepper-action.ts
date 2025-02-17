"use server";

import { revalidateTag } from "next/cache";
import { addPepper } from "../../../infrastructure/add-pepper";
import { AddPepperSchema } from "../forms/add-pepper-form";

export const addPepperAction = async (pepper: AddPepperSchema) => {
  const response = await addPepper(pepper);

  if (!response.success) {
    console.error(response.error);
    return response;
  }

  revalidateTag("peppers");
};
