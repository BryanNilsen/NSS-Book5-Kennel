import React, { Component } from "react"

export default class LocationDetail extends Component {
  render() {
    const location = this.props.locations.find(a => a.id === parseInt(this.props.match.params.locationId)) || {}

    return (
      <section className="location list_title">
        <div key={location.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
              {/* <img src={`./../images/${animal.species}Icon.png`} className="icon--dog" /> */}
              {location.name}
            </h4>
            {/* <h6 className="card-title">{animal.breed}</h6> */}
            <a href="#"
              onClick={() => this.props.deleteLocation(location.id)
                .then(() => this.props.history.push("/locations"))}
              className="card-link">Delete</a>
          </div>
        </div>
      </section>
    )
  }
}