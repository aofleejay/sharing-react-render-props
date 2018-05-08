import React, { Component } from 'react'
import MusicStore from './components/MusicStore'
import PostList from './components/PostList'

class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <MusicStore />
        </div>
        <div style={{ flex: 1 }}>
          <PostList />
        </div>
      </div>
    )
  }
}

export default App
