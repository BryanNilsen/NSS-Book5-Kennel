import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from './location/LocationList'
import AnimalList from './animal/AnimalList'
import OwnerList from './owner/OwnerList'

import "./Kennel.css"


class Kennel extends Component {
  /*
      Although you will eventually be pulling your objects
      from your json-server API, for this chapter, we're
      faking it and just creating those arrays in the component
      itself
  */

  ownersFromAPI = [
    { id: 1, name: "Ryan Tanay" },
    { id: 2, name: "Emma Beaton" },
    { id: 3, name: "Dani Adkins" },
    { id: 4, name: "Adam Oswalt" },
    { id: 5, name: "Fletcher Bangs" },
    { id: 6, name: "Angela Lee" }
  ]

  employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ]

  // This will eventually get pulled from the API
  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
  ]

  animalsFromAPI = [
    { id: 1, species: "dog", name: "Buster", color: "brown" },
    { id: 2, species: "cat", name: "Whiskers", color: "calico"},
    { id: 3, species: "ferret", name: "Mr. Furley", color: "white" },
    { id: 4, species: "dog", name: "Pickles", color: "black" },
    { id: 5, species: "snake", name: "SSSlick", color: "green" },
    { id: 6, species: "bird", name: "Tweeters", color: "yellow" }
  ]

  animalOwnersFromAPI = [
    { id: 1, ownerId: 1, animalId: 3},
    { id: 2, ownerId: 1, animalId: 1},
    { id: 3, ownerId: 2, animalId: 2},
    { id: 4, ownerId: 3, animalId: 4},
    { id: 5, ownerId: 1, animalId: 5},
    { id: 6, ownerId: 4, animalId: 5}
  ]

  state = {
    owners: this.ownersFromAPI,
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI,
    animalOwners: this.animalOwnersFromAPI
  }

  render() {
    return (
      <article className="kennel">
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
        <AnimalList animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners}/>
        <OwnerList owners={this.state.owners} />
      </article>
    )
  }
}

export default Kennel