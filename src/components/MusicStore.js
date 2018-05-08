import React from 'react'
import DataConnector from './DataConnector'

const MusicStore = () => (
  <DataConnector
    url="https://jsonplaceholder.typicode.com/albums"
    render={(list) => (
      <div>
        <h1>Music Store</h1>
        { list.length > 0 && list.map(({ id, title }) => <li key={id}>{title}</li>) }
      </div>
    )}
  />
)

export default MusicStore
