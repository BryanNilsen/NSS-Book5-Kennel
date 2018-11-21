import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <article className="list_title">
                <h1>Search Results</h1>
                <section className="search list">
                {
                    this.props.searchResults.map(result =>
                        <div key={result.id}>
                            {result.name}
                        </div>
                    )
                }
                </section>
            </article>
        )
    }
}

export default Search