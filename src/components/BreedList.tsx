import { useEffect, useState } from "react";
import type { DogBreedData } from "../types/data";
import styles from "./BreedList.module.css";
import BreedCard from "./BreedCard";
import { dogApi } from "../utils/api";

export default function BreedList() {
  const [dogBreeds, setDogBreeds] = useState<[string, string[]][]>([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getDogBreeds = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${dogApi}/breeds/list/all`);

      // if (!res.ok) throw new Error("Failed to fetch breeds");
      if (!res.ok) {
        setError("Failed to fetch breeds");
        return;
      }

      const data: DogBreedData = await res.json();
      const breedEntries = Object.entries(data.message);

      if (data.status === "success") {
        setDogBreeds(breedEntries);
      } else {
        setError("Failed to fetch");
        setDogBreeds([]);
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
      setDogBreeds([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDogBreeds();
  }, []);

  const filteredBreeds = dogBreeds.filter((breed) => {
    return breed[0].toLowerCase().includes(search.toLowerCase());
  });

  if (loading) return <>Loading...</>;
  if (error) return <>{error}</>;

  return (
    <>
      <div className={styles.searchBar}>
        <label>Search breed</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className={styles.breeds}>
        {filteredBreeds.map(([breed, subBreeds]) => (
          <BreedCard key={breed} breed={breed} subBreeds={subBreeds} />
        ))}
      </ul>
    </>
  );
}
