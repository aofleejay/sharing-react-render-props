import React, { Component } from 'react'

class MusicStore extends Component {
  state = {
    albums: [],
    loading: false,
    error: null,
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(albums => this.setState({ albums, loading: false, error: null }))
        .catch(error => this.setState({ albums: [], loading: false, error: error.message }))
    })
  }

  render() {
    const { loading, error, albums } = this.state

    if (loading) return <p>Loading...</p>
    else if (error) return <p>Whoops! Something wrong...</p>

    return (
      <div>
        <h1>Music Store</h1>
        { albums.length > 0 && albums.map(({ id, title }) => <li key={id}>{title}</li>) }
      </div>
    )
  }
}

export default MusicStore
