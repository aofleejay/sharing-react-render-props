import React, { Component } from 'react'

class DataConnector extends Component {
  state = {
    list: [],
    loading: false,
    error: null,
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      fetch(this.props.url)
        .then(response => response.json())
        .then(list => this.setState({ list, loading: false, error: null }))
        .catch(error => this.setState({ list: [], loading: false, error: error.message }))
    })
  }

  render() {
    const { loading, error, list } = this.state

    if (loading) return <p>Loading...</p>
    else if (error) return <p>Whoops! Something wrong...</p>

    return this.props.render(this.state.list)
  }
}

export default DataConnector
