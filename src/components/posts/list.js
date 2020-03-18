import React from 'react'
import PostListItem from './list-item'

const PostList = ({ posts }) => {
  return (
    <>
      <h1>Posts!</h1>
      <ul>
        {posts.map(post => <PostListItem key={post.id} post={post} />)}
      </ul>
    </>
  )
}

export default PostList
