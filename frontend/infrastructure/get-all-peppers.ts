import { Pepper } from "../objects/Pepper";
import { z } from "zod";

export const getAllPeppers = async (): Promise<{
  data: Pepper[];
  error: Error | null;
}> => {
  try {
    const response = await fetch("http://localhost:8000/peppers");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseJson = await response.json();

    const data = pepperSchema.parse(responseJson);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return { data, error: null };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { data: [], error };
    }
    return { data: [], error: new Error("Unknown error occurred") };
  }
};

const pepperSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    type: z.string(),
    color: z.string(),
    height: z.string(),
    yield: z.string(),
  })
);
