import React from "react";

function Pet( {pet, onAdoptPets } ) {

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.gender === 'male' ? '♀' : '♂'}
          {pet.name}
          PET NAME
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age} years</p>
          <p>Weight: {pet.weight} lbs</p>
        </div>
      </div>
      <div className="extra content">
        <button className={pet.isAdopted ? "ui primary button" :  "ui disabled button" } >Already adopted</button>
        <button className={!pet.isAdopted ? "ui primary button" : "ui disabled button"} onClick = {() => onAdoptPets(pet.id)}>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;