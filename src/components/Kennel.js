import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {

    state = {
        results: [],
      }

    setSearchState = (data) =>{
        this.setState({
          results: data
      })
    }

    render() {
        return (
            <React.Fragment>
                <NavBar setSearchState={this.setSearchState}/>
                <ApplicationViews searchResults={this.state.results} />
            </React.Fragment>
        )
    }
}

export default Kennel