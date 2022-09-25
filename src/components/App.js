import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType(e) {
    setFilters(e.target.value)
}

function onFindPetsClick() {
  if(filters.type === "all") {
fetch("http://localhost:3001/pets")
.then(res => res.json())
.then(data => setPets(data))

}
else {
  fetch(`http://localhost:3001/pets?type=${filters.type}`)
  .then(res => res.json())
  .then(data => setPets(data))
}
}

//modifying changing is adopeted to true, if not leave regular pets with no change
function onAdoptPets(id) {
  console.log(id)
  const newPets= pets.map(pet => {
    return pet.id === id ? {...pet, isAdopted: true} : pet;
  })
setPets(newPets)
}

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChange = {onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets}  onAdoptPets={onAdoptPets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
