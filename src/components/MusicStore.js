import React, { Component } from 'react'
import withData from './withData'

const MusicStore = ({ list }) => (
  <div>
    <h1>Music Store</h1>
    { list.length > 0 && list.map(({ id, title }) => <li key={id}>{title}</li>) }
  </div>
)

export default withData({
  url: 'https://jsonplaceholder.typicode.com/albums',
})(MusicStore)
