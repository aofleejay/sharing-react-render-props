import React from 'react'
import withData from './withData'

const PostList = ({ list }) => (
  <div>
    <h1>Post List</h1>
    { list.length > 0 && list.map(({ id, title }) => <li key={id}>{title}</li>) }
  </div>
)

export default withData({
  url: 'https://jsonplaceholder.typicode.com/posts',
})(PostList)
