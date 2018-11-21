import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import Search from './search/Search'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"
import LocationManager from "../modules/LocationManager"
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owner/OwnerDetail'
import LocationDetail from './location/LocationDetail'
import "./Kennel.css"


export default class ApplicationViews extends Component {


  state = {
    owners: [],
    employees: [],
    locations: [],
    animals: [],
    animalOwners: [],
  }

  componentDidMount() {
    const newState = {}

    AnimalManager.getAll().then(animals => newState.animals = animals)
    EmployeeManager.getAll().then(employees => newState.employees = employees)
    OwnerManager.getAll().then(owners => newState.owners = owners)
    LocationManager.getAll().then(locations => newState.locations = locations)


    fetch("http://localhost:5002/animalOwners")
      .then(r => r.json())
      .then(animalOwners => newState.animalOwners = animalOwners)
      // the following takes all the fetches and sets the state
      .then(() => this.setState(newState))
  }


  deleteAnimal = (id) => {
    return AnimalManager.removeAndList(id)
      .then(animals => this.setState({
        animals: animals
      })
      )
  }

  deleteEmployee = (id) => {
    return EmployeeManager.removeAndList(id)
      .then(employees => this.setState({
        employees: employees
      })
      )
  }


  deleteOwner = (id) => {
    return OwnerManager.removeAndList(id)
      .then(owners => this.setState({
        employees: owners
      })
      )
  }

  deleteLocation = (id) => {
    return LocationManager.removeAndList(id)
      .then(locations => this.setState({
        employees: locations
      })
      )
  }



  render() {
    return (
      <React.Fragment>
        <Route exact path="/locations" render={(props) => {
          return <LocationList locations={this.state.locations} deleteLocation={this.deleteLocation} />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList
            animals={this.state.animals}
            owners={this.state.owners}
            animalOwners={this.state.animalOwners}
            deleteAnimal={this.deleteAnimal}
          />
        }} />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnerList owners={this.state.owners} deleteOwner={this.deleteOwner} />
        }} />
        <Route exact path="/search" render={(props) => {
          console.log("props: ", props)
          return <Search results={this.props.searchResults} />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail {...props} deleteLocation={this.deleteLocation} locations={this.state.locations} />
        }} />
      </React.Fragment>
    )
  }
}
