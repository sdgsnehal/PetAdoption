import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedlist";
const localCache = {};
export default function useBreedList(animal) {
  const results = useQuery(["breed",animal],fetchBreedList);
  return [results?.data?.breeds??[],results.status]
}
