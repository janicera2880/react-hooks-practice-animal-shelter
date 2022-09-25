import React from "react";

import Pet from "./Pet";

function PetBrowser( {pets, onAdoptPets}) {
const petList = pets.map( pet =>  {
  return <Pet
  key={pet.id}
  pet = {pet}
  onAdoptPets={onAdoptPets}
  />
})

  return <div className="ui cards">{petList}</div>;
}

export default PetBrowser;