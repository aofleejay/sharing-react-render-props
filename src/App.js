import React, { Component } from 'react'
import MusicStore from './components/MusicStore'
import PostList from './components/PostList'

class App extends Component {
  render() {
    return (
      <div>
        <MusicStore />
        <PostList />
      </div>
    )
  }
}

export default App
