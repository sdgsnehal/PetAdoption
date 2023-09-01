import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPets from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const result = useQuery(["details", id], fetchPets);
  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">💕</h2>
      </div>
    );
  }
  const pet = result.data.pet[0];
  return (
    <div className="details">
      <div>
        <h2>{pet.name}</h2>
        <h2>
          {pet.animal} - {pet.breed} -{pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  );
};

export default Details;
