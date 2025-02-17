import { Pepper } from "../objects/pepper";
import { z } from "zod";

export const getAllPeppers = async (): Promise<{
  data: Pepper[];
  error: Error | null;
}> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/peppers` || "",
      {
        next: { tags: ["peppers"] },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseJson = await response.json();

    const data = pepperSchema.parse(responseJson);

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
