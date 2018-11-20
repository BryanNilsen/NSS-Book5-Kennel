import React, { Component } from 'react'


export default class LocationList extends Component {
  render() {
    return (
      <article className="list_title">
        <h1>Location List</h1>
        <section className="locations list">
        {
          this.props.locations.map(location =>
            <div key={location.id}>
              <strong>{location.name}</strong>
              <p>{location.address}</p>
            </div>
          )
        }
      </section>
      </article>
    );
  }
}