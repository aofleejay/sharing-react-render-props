import React, { Component } from 'react'

const withData = ({ url }) => (ComposedComponent) => {
  return class WithDataComponent extends Component {
    state = {
      list: [],
      loading: false,
      error: null,
    }
  
    componentDidMount() {
      this.setState({ loading: true }, () => {
        fetch(url)
          .then(response => response.json())
          .then(list => this.setState({ list, loading: false, error: null }))
          .catch(error => this.setState({ list: [], loading: false, error: error.message }))
      })
    }
  
    render() {
      const { loading, error, list } = this.state
  
      if (loading) return <p>Loading...</p>
      else if (error) return <p>Whoops! Something wrong...</p>
  
      return (
        <ComposedComponent {...this.props} list={list}  />
      )
    }
  }
}

export default withData
