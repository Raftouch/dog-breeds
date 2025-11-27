import type { DogBreedData } from "../types/data";
import { dogApi } from "../utils/api";

export async function getDogBreeds(): Promise<DogBreedData> {
  const res = await fetch(`${dogApi}/breeds/list/all`);

  if (!res.ok) throw new Error("Failed to fetch breeds");

  return res.json();
}
