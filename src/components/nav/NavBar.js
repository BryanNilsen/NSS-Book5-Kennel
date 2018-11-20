import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"



class NavBar extends Component {

    handleKeyUp = (e) => {
        const input = e.target.value
        if (e.keyCode === 13) {
            return fetch(`http://localhost:5002/animals?q=${input}`)
                .then(r => r.json())
                .then((data) => {
                    console.log(data)
                    this.props.setSearchState(data)
                })

        }
    }

    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/locations">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/animals">Animals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/owners">Owners</Link>
                    </li>
                    <li className="nav-item">
                        <input id="searchInput" type="text" onKeyUp={this.handleKeyUp}></input>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar