import React, { Component } from 'react'
export default class AnimalList extends Component {

  animalOwner(animalId) {
    console.log("owners", animalId)
    let animalOwners = this.props.animalOwners
      .filter(join => join.animalId === animalId)
      .map(join => this.props.owners.find(owner => owner.id === join.ownerId).name)

    console.log('owners', animalOwners);

    if (animalOwners.length === 0) {
      animalOwners = ["nobody"]
    }
    return animalOwners
  }

  render() {
    return (
      <article className="animals">
        <h1>AnimalList</h1>
        {
          this.props.animals.map(animal =>
            <div key={animal.id}>
              <p>{animal.name}, which is a {animal.color} {animal.species}, is owned by {this.animalOwner(animal.id).join(" ")}.</p>
            </div>
          )
        }
      </article>
    )
  }
}