import React, { Component } from 'react'


export default class AnimalList extends Component {
  render() {
    return (
      <section className="animals">
        <h1>Animals</h1>
        {
          this.props.animals.map(animal =>
            <div key={animal.id}>
              <strong>{animal.species}:</strong> {animal.name} is owned by
            </div>
          )
        }
      </section>
    );
  }
}