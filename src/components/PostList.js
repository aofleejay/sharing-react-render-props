import React, { Component } from 'react'

class PostList extends Component {
  state = {
    posts: [],
    loading: false,
    error: null,
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => this.setState({ posts, loading: false, error: null }))
        .catch(error => this.setState({ posts: [], loading: false, error: error.message }))
    })
  }

  render() {
    const { loading, error, posts } = this.state

    if (loading) return <p>Loading...</p>
    else if (error) return <p>Whoops! Something wrong...</p>

    return (
      <div>
        <h1>Post List</h1>
        { posts.length > 0 && posts.map(({ id, title }) => <li key={id}>{title}</li>) }
      </div>
    )
  }
}

export default PostList
