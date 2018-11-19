import React, { Component } from 'react'
export default class AnimalList extends Component {

  findOwner(animal_Id) {
    // console.log("owners", animal_Id)
    let animalOwners = this.props.animalOwners
      .filter(joinTable => joinTable.animalId === animal_Id)
      .map(joinTable => this.props.owners.find(owner => owner.id === joinTable.ownerId).name)

    // console.log('owners', animalOwners);

    if (animalOwners.length === 0) {
      animalOwners = ["nobody"]
    }
    return animalOwners
  }

  render() {
    return (
      <article className="animals list">
        <h1>AnimalList</h1>
        {
          this.props.animals.map(animal =>
            <div key={animal.id}>
              <p>{animal.name}, which is a {animal.color} {animal.species}, is owned by {this.findOwner(animal.id).join(", ")}.</p>
            </div>
          )
        }
      </article>
    )
  }
}