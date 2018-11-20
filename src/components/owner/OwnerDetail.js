import React, { Component } from 'react'

export default class OwnerList extends Component {
    render() {
        const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}

        return (
            <section className="owner list_title">
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {owner.name}
                        </h4>
                        <a href="#"
                            onClick={() => this.props.deleteOwner(owner.id)
                                .then(() => this.props.history.push("/owners"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}

