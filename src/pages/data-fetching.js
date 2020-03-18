import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostList from '../components/posts/list'

const DataFetching = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    console.log('Posts have changed', posts)
  }, [posts])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(resp => {
        setPosts(resp.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}

export default DataFetching
