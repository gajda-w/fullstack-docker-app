import { AddPepperSchema } from "@/app/forms/add-pepper-form";

export const addPepper = async (
  pepper: AddPepperSchema
): Promise<{
  success: boolean;
  error: Error | null;
}> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/peppers` || "",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: pepper.name,
          type: pepper.type,
          color: pepper.color,
          height: pepper.height,
          yield: pepper.yield,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return { success: true, error: null };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, error };
    }
    return { success: false, error: new Error("Unknown error occurred") };
  }
};
