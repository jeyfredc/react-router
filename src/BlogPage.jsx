import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import blogData from './blogData';

export const BlogPage = () => {
  return (
    <>
      <h1>BlogPage</h1>
      <Outlet />
      <ul>

        {blogData.map(post => (
          <BlogPreview key={post.slug} post={post} />
        ))}

      </ul>
    </>
  )
}


function BlogPreview({ post }) {

  return (
    <>
      <li>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </li>
    </>
  )
}



export default BlogPage