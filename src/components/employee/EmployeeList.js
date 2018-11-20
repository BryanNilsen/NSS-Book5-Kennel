import React, { Component } from 'react'
import { Link } from "react-router-dom"

class EmployeeList extends Component {
    render() {
        return (
            <article className="list_title">
                <h1>Employees</h1>
                <section className="employees list">
                    {
                        this.props.employees.map(employee =>
                            <div key={employee.id}>
                                {employee.name} -
                                <a href="#" onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Delete</a>
                                <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                            </div>
                        )
                    }
                </section>
            </article>
        )
    }
}

export default EmployeeList