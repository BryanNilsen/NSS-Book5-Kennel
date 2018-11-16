import React, { Component } from 'react'


export default class LocationList extends Component {
  render() {
    return (
      <section className="locations">
        <h1>Locations</h1>
        {
          this.props.locations.map(location =>
            <div key={location.id}>
              {location.name}
            </div>
          )
        }
      </section>
    );
  }
}