import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
const ANiMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  useEffect(() => {
    requestPets();
  }, []);
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
    console.log(pets)
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="loaction">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => {
              setLocation(e.target.value);
              setBreed("");
            }}
          />
        </label>
        <label htmlFor="animals">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            {ANiMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      <Results pets={pets} />
      
    </div>
  );
};
export default SearchParams;
