import React, { Component } from 'react'
import { Link } from "react-router-dom"

class LocationList extends Component {
    render() {
        return (
            <article className="list_title">
                <h1>Locations</h1>
                <section className="locations list">
                    {
                        this.props.locations.map(location =>
                            <div key={location.id}>
                                {location.name} -
                                <a href="#" onClick={() => this.props.deleteLocation(location.id)}
                                    className="card-link">Delete</a>
                                <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                            </div>
                        )
                    }
                </section>
            </article>
        )
    }
}

export default LocationList
