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
    { id: 1, species: "dog", name: "Buster" },
    { id: 2, species: "cat", name: "Whiskers" },
    { id: 3, species: "ferret", name: "Mr. Furley" },
    { id: 4, species: "dog", name: "Pickles" },
    { id: 5, species: "snake", name: "SSSlick" }
  ]

  animalOwnersFromAPI = [
    { id: 1, ownerId: 1, animalId: 3},
    { id: 2, ownerId: 1, animalId: 1}
  ]

  state = {
    owners: this.ownersFromAPI,
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI
  }

  render() {
    return (
      <article className="kennel">
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
        <AnimalList animals={this.state.animals} />
        <OwnerList owners={this.state.owners} />
      </article>
    )
  }
}

export default Kennel