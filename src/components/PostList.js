import React from 'react'
import DataConnector from './DataConnector'

const PostList = () => (
  <DataConnector
    url="https://jsonplaceholder.typicode.com/posts"
    render={(posts) => (
      <div>
        <h1>Post List</h1>
        { posts.length > 0 && posts.map(({ id, title }) => <li key={id}>{title}</li>) }
      </div>
    )}
  />
)

export default PostList
