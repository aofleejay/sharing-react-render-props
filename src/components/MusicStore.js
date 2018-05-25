import React from 'react'
import DataConnector from './DataConnector'

const MusicStore = () => (
  <DataConnector
    url="https://jsonplaceholder.typicode.com/albums"
    render={(albums) => (
      <div>
        <h1>Music Store</h1>
        { albums.length > 0 && albums.map(({ id, title }) => <li key={id}>{title}</li>) }
      </div>
    )}
  />
)

export default MusicStore
