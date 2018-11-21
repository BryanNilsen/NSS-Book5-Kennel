import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Animal.css"
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
      <article className="list_title">
        <h1>Animal List</h1>
        <section className="animals">
        {
          this.props.animals.map(animal =>
            <div key={animal.id} className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <img src={`./images/${animal.species}Icon.png`} alt="" className="icon--dog" />
                  {animal.name}  {/* is owned by {this.findOwner(animal.id).join(", ")}. */}
                                <a href="#"
                    onClick={() => this.props.deleteAnimal(animal.id)}
                    className="card-link">Delete</a>
                    <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                </h5>
              </div>
            </div>
          )

        }
        </section>
      </article>
    )
  }
}