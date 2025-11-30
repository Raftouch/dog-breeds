export type DogBreedData = {
  message: {
    [breed: string]: string[];
  };
  status: string;
};

// export type DogBreedData = {
//   message: Record<string, string[]>;
//   status: string;
// };

export type ImageData = {
  message: string;
  status: string;
};

export type PageItem = number | "...";
