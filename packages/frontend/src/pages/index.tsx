import React from 'react'
import { Post } from '@monorepo-app/types'

const posts: Post[] = [
  {title: 'AAA', description: 'aaa'},
  {title: 'BBB', description: 'bbb'},
]

const index = () => {
  return <div>
    <h1>Hello World</h1>
    {posts.map(post => <PostCell post={post} />)}
  </div>
}

const PostCell: React.FC<{
  post: Post
}> = ({ post }) => {
  return <div>
    <h2>{post.title}</h2>
    <p>{post.description}</p>
  </div>
}

export default index