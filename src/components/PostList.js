import React from 'react'
import DataConnector from './DataConnector'

const PostList = () => (
  <DataConnector
    url="https://jsonplaceholder.typicode.com/posts"
    render={(list) => (
      <div>
        <h1>Post List</h1>
        { list.length > 0 && list.map(({ id, title }) => <li key={id}>{title}</li>) }
      </div>
    )}
  />
)

export default PostList
