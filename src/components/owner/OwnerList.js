import React, { Component } from 'react'
import { Link } from "react-router-dom"

class OwnerList extends Component {
    render() {
        return (
            <article className="list_title">
                <h1>Owners</h1>
                <section className="owners list">
                    {
                        this.props.owners.map(owner =>
                            <div key={owner.id}>
                                {owner.name} - phone: {owner.phone} -
                                <a href="#" onClick={() => this.props.deleteOwner(owner.id)}
                                    className="card-link">Delete</a>
                                <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                            </div>
                        )
                    }
                </section>
            </article>
        )
    }
}

export default OwnerList