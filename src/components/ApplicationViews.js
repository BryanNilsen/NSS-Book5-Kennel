import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import "./Kennel.css"


class ApplicationViews extends Component {
  ownersFromAPI = [
    { id: 1, name: "Ryan Tanay", phone: "615-423-9000" },
    { id: 2, name: "Emma Beaton", phone: "615-378-8762" },
    { id: 3, name: "Dani Adkins", phone: "919-736-1143" },
    { id: 4, name: "Adam Oswalt", phone: "848-903-6553" },
    { id: 5, name: "Fletcher Bangs", phone: "615-442-1683" },
    { id: 6, name: "Angela Lee", phone: "615-409-2044" }
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
    { id: 6, ownerId: 4, animalId: 5},
    { id: 7, ownerId: 2, animalId: 5}
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
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners}/>
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                  }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews

