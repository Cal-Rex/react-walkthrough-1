import React, { Component } from 'react'
import names from './Names'

export class SearchBar extends Component {
    constructor(props) {
      super(props)
      this.state = {
        names: names
      }
    }

    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        console.log(inputText)
        const filteredNames = names.filter(name => {
            return name.toLowerCase().includes(inputText)
        })
        this.setState({
            names: filteredNames
        })
    }

  render() {
    return (
      <div>
        <h1>Name search</h1>
        <p>Matching names found: {this.state.names.length}</p>
        <form>
            <label htmlFor='id-search-names'>Search: </label>
            <input
                onChange={(event) => this.handleChange(event)}
                id="id-search-names" name="search-names"
                type="text"
                placeholder='search names...'
            />
        </form>
        <div>
            {this.state.names.map(name => {
            return <p key={name}>{name}</p>
            })}
        </div>
      </div>
    )
  }
}

export default SearchBar