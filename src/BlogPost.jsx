import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import blogData from './blogData'

export const BlogPost = () => {
    const navigate = useNavigate()
    const { slug } = useParams()

    const blogpost = blogData.find(post => post.slug === slug)

    const returnToBlog = () => {
        navigate("/blog")
    }

    return (
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={
                returnToBlog
            } >Volver al Blog</button>
            <p>{blogpost.content}</p>
        </>
    )

}
